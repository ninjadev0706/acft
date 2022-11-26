
import { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { BigNumber } from 'ethers'
import { getCurrentWalletConnected, getContract } from './util/interact';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { injected } from './util/connector'
import Header from './Components/SubComponents/Header';
import Home from './Components/SubComponents/Home';
import Claim from './Components/SubComponents/Claim';
import About from './Components/SubComponents/About';
import Cards from './Components/SubComponents/Cards';
import Team from './Components/SubComponents/Team';
import Roadmap from './Components/SubComponents/Roadmap';
import Faq from './Components/SubComponents/Faq';
import Footer from './Components/SubComponents/Footer';
import Terms from './Components/Terms';
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

const teams = [
  { 'avatar': "images/team/team01.png", "name": "Mr. Brainiac", "position": "Co Founder" },
  { 'avatar': "images/team/team00.png", "name": "Dr. Brainiac", "position": "Co Founder" },
  { 'avatar': "images/team/team03.png", "name": "Ka Hei", "position": "Co Artist" },
  { 'avatar': "images/team/team02.png", "name": "Dev. Brainiac", "position": "Blockchain Dev" },
  { 'avatar': "images/team/team04.png", "name": "Luke", "position": "Community Manager" },
  { 'avatar': "images/team/team05.png", "name": "Understand defi", "position": "Alpha management" },
]

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

  const notify = () => toast.info(status, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });

  const confirmWL = () => toast.info("You are not in Whitelist", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  })
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

  useEffect(() => {
    if (status) {
      notify()
      setStatus(null)
    }
  }, [status, notify])


  return (
    <div className="App" style={{ overflowX: "hidden" }}>
      <BrowserRouter>
        <Switch>
          {/* <Route exact path='/'> */}
            {/* <div className="main"> */}
              {/* <Header /> */}
              {/* <div className="main-content"> */}
                {/* <Home /> */}
                {/* <About />
                <Cards />
                <Team />
                <Roadmap />
                <Faq /> */}
              {/* </div> */}
              {/* <Footer /> */}
            {/* </div>
          </Route> */}
          <Route path='/'>
            {/* <Header /> */}
            <Claim maxTokenPurchase={maxTokenPurchase} maxTokens={maxTokens} tokenPrice={tokenPrice} setStatus={setStatus}
              loading={loading} account={account} totalSupply={totalSupply} setMintLoading={setMintLoading} saleIsActive={saleIsActive}
              wladdresses={wladdress} confirmWL={confirmWL} />
            {/* <ToastContainer /> */}
          </Route>
          {/* <Route path='/tos'>
            <Terms />
          </Route> */}
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
