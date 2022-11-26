
import { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { BigNumber } from 'ethers'
import { getCurrentWalletConnected, getContract } from './util/interact';
import 'react-toastify/dist/ReactToastify.css';
import { injected } from './util/connector'
import Claim from './Components/SubComponents/Claim';
import whitelists from './config/addresses.json';
import AOS from 'aos';

const roadmaps = [
  { 'percentage': "10%", 'text': "Mint all of the Brainiacs." },
  { 'percentage': "20%", 'text': "LOCKDOWN DISCORD!" },
  { 'percentage': "30%", 'text': "Verify rarites, list on rarity.tools, and activate the Brainiac NFT bot." },
  { 'percentage': "50%", 'text': "Host first Brainstage for Brainiac holders." },
  { 'percentage': "60%", 'text': "Announce AMA & Brainstage calendar." },
  { 'percentage': "70%", 'text': "Community voting event." },
  { 'percentage': "80%", 'text': "Discord community V2 update." },
  { 'percentage': "100%", 'text': "Launch V2 Roadmap." },
];

function App() {

  const whitelist = JSON.stringify(whitelists);
  const wladdress = JSON.parse(whitelist);

  const [status, setStatus] = useState(null);
  const [loading, setMintLoading] = useState(false)
  const [tokenPrice, setTokenPrice] = useState(null);
  const [maxTokens, setMaxTokens] = useState(0);
  const [maxTokenPurchase, setMaxTokenPurchase] = useState(0);
  const [totalSupply, setTotalSupply] = useState(0)
  const [saleIsActive, setSaleIsActive] = useState(false);

  const { activate, account } = useWeb3React();

  useEffect(() => {
    AOS.init({
      once: true
    });
  }, []);

  useEffect(() => {
    if (localStorage.getItem("accountStatus")) {
      activate(injected)
    }
  }, [])

  useEffect(() => {
    if (account) {
      (async () => {
        let contract = getContract(account)
        let mtb = await contract.MAX_TOKENS()
        let mtp = await contract.maxTokenPurchase()
        let ts = await contract.totalSupply()
        let tp = await contract.tokenPrice()
        let sia = await contract.saleIsActive()
        setMaxTokens(parseInt(BigNumber.from(mtb).toString()))
        setMaxTokenPurchase(parseInt(BigNumber.from(mtp).toString()))
        setTotalSupply(BigNumber.from(ts).toString())
        setTokenPrice((BigNumber.from(tp).div(BigNumber.from(1e9).mul(BigNumber.from(1e4))).toString()))  // original value * 1e5
        setSaleIsActive(sia)
      })();
    }
    else {
      (async () => {
        let contract = getContract("");
        let mtb = await contract.MAX_TOKENS()
        let ts = await contract.totalSupply()
        setTotalSupply(BigNumber.from(ts).toString())
        setMaxTokens(parseInt(BigNumber.from(mtb).toString()))
      })();
    }
  }, [loading, account])

  useEffect(() => {
    (async () => {
      const { status } = await getCurrentWalletConnected();
      setStatus(status)
    })();
  }, [])


  return (
    <div className="App" style={{ overflowX: "hidden" }}>
      <BrowserRouter>
        <Switch>
          <Route path='/'>
            <Claim maxTokenPurchase={maxTokenPurchase} maxTokens={maxTokens} tokenPrice={tokenPrice} setStatus={setStatus}
              loading={loading} account={account} totalSupply={totalSupply} setMintLoading={setMintLoading} saleIsActive={saleIsActive}
              wladdresses={wladdress} />
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
