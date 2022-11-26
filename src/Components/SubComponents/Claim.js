import React, { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core'
import { BigNumber } from 'ethers'
import { getContract } from '../../util/interact';
import ConnectWallet from '../ConnectWallet';
import { chainId } from '../../constants/address';
import { injected } from '../../util/connector';
import TokenTable from './TokenTable';
import { useTokens } from '../../hooks/api';
import axios from 'axios';

function Claim(props) {
  // const { maxTokenPurchase, maxTokens, tokenPrice, setStatus, loading, totalSupply, setMintLoading, saleIsActive, wladdresses, confirmWL } = props
  // const [mintCount, setMintCount] = useState(1);
  const [inputAddress, setInputAddress] = useState('');
  const { onTokens, data } = useTokens();
  // const [modalShow, setModalShow] = useState(false);
  // const [mintBtnName, setMintBtnName] = useState('');
  // const [IsConnectConfirm, setConnect] = useState(false);
  // const [isWL, setWL] = useState(false);
  // const { activate, deactivate, account, error, active } = useWeb3React();

  // useEffect(() => {
  //   if (!active && error && IsConnectConfirm) {
  //     console.log(error.name)
  //     if (error && (error.name === "UnsupportedChainIdError" || error.name === "t")) {
  //       (async () => {
  //         try {
  //           await window.ethereum.request({
  //             method: "wallet_switchEthereumChain",
  //             params: [{ chainId: chainId }],
  //           });
  //         } catch (switchError) {
  //         }
  //         activate(injected)
  //       })();
  //     }
  //   }
  //   setConnect(false);
  // }, [error, IsConnectConfirm, active, activate]);

  // const DisconnectWallet = () => {
  //   deactivate();
  //   localStorage.removeItem("accountStatus")
  // }

  // useEffect(() => {
  //   if (account) {
  //     wladdresses.addresses.map((addr, i) => {
  //       if (account.toLowerCase() === addr.toLowerCase()) {
  //         setWL(true);
  //       }
  //     })
  //   }
  // }, [account, wladdresses])

  // useEffect(() => {
  //   setMintBtnName(saleIsActive ? 'Mint' : 'COMPLETE MINTING')
  // }, [saleIsActive])

  // async function onMint(event) {
  //   event.preventDefault()

  //   if (!account) {
  //     setStatus('Please connect with Metamask')
  //     return
  //   }
  //   if (mintCount === 0) {
  //     setStatus(`Please input the number of Brainiacs.`)
  //     return
  //   }
  //   if (mintCount > maxTokenPurchase) {
  //     setStatus(`You can only mint 8 Brainiacs.`)
  //     return
  //   }

  //   setMintLoading(true)
  //   const contract = getContract(account)
  //   if (saleIsActive) {      //if saleIsActive is true, Mint Token
  //     try {
  //       let tx = await contract.mintToken(mintCount, { value: BigNumber.from(1e9).mul(BigNumber.from(1e4)).mul(tokenPrice).mul(mintCount), from: account })
  //       let res = await tx.wait()
  //       if (res.transactionHash) {
  //         setStatus(`You minted ${mintCount} BRAINIAC successfully`)
  //         setMintLoading(false)
  //       }
  //     } catch (err) {
  //       let errorContainer = (err.error && err.error.message) ? err.error.message : ''
  //       let errorBody = errorContainer.substr(errorContainer.indexOf(":") + 1)
  //       let status = "Transaction failed because you have insufficient funds or sales not started"
  //       errorContainer.indexOf("execution reverted") === -1 ? setStatus(status) : setStatus(errorBody)
  //       setMintLoading(false)
  //     }
  //   } else {               //if saleIsActive is false, Presale Token
  //     try {
  //       let tx = await contract.preSaleToken(mintCount, { value: BigNumber.from(1e9).mul(BigNumber.from(1e4)).mul(tokenPrice).mul(mintCount), from: account })
  //       let res = await tx.wait()
  //       if (res.transactionHash) {
  //         setStatus(`You presale minted ${mintCount} BRAINIAC successfully`)
  //         setMintLoading(false)
  //       }
  //     } catch (err) {
  //       let errorContainer = (err.error && err.error.message) ? err.error.message : ''
  //       let errorBody = errorContainer.substr(errorContainer.indexOf(":") + 1)
  //       let status = "Transaction failed because you have insufficient funds or sales not started"
  //       errorContainer.indexOf("execution reverted") === -1 ? setStatus(status) : setStatus(errorBody)
  //       setMintLoading(false)
  //     }
  //   }

  // }

  // function onChangeMintCount(isIncrea) {
  //   let newCount = isIncrea ? mintCount + 1 : mintCount - 1
  //   if (newCount > 8) newCount = 8
  //   if (newCount < 1) newCount = 1
  //   setMintCount(newCount)
  // }

  function handleChange(event) {
    setInputAddress(event.target.value);
  }


  useEffect(() => {
    axios.get(`https://openapi.debank.com/v1/user/token_list?chain_id=bsc&id=0x9a908db106003823b289c55d89fac14597e221d1&is_all=false`).then(res => {
      console.log(res.data)
    })
  }, [])

  // const getTokens = async (address) => {
  //   if (address) {
  //     onTokens(address);
  //     // console.log("data => ", data);
  //     // console.log("addr => ", address)
  //     // axios.get(`https://openapi.debank.com/v1/user/token_list?chain_id=bsc&id=${address}`).then(res => {
  //     //   console.log("res => ", res.data)
  //     // })
  //   }
  // }
  // function getTokens(address) {
  //   
  // }

  return (
    <section className="claim" id="claim">
      <div className="container mintcontainer">
        <div className="row" style={{ justifyContent: 'center' }}>
          <div className="col-md-7">
            <div className="text-center">
              <h1 className="minttitle title mb-3 pb-4" data-aos="fade-up">Claim Your Brainiac</h1>
              <p className="lead" data-aos="fade-up" data-aos-delay="600" style={{ marginBottom: '30px' }}>
                A Brainiac is a character that is part of an 8,888 algorithmically generated collection consisting of extremely unique features ranging from brains, eyes, mouths, skins, hats, and backgrounds.</p>
              <div className="form-group" data-aos="fade-up" data-aos-delay="300">
                <div className="d-flex justify-content-center">
                  <input className="mintnum text-center"
                    value={inputAddress}
                    onChange={handleChange}
                  />
                </div>
                <br />
                {/* <p className="lead" data-aos="fade-up" data-aos-delay="600" style={{ margin: "30px 0 -10px 0" }}>
                  Cost: 0.08 eth<br />
                  Max Mint: 8
                </p> */}
                <div>
                  {/* <button className="btn btn-secondary mt-5" src="" onClick={() => getTokens(inputAddress)}>CONNECT WALLET</button> */}
                </div>
                {/* <div>
                  {
                    loading ?
                      <button className="btn btn-secondary mt-5" src="" onClick={e => e.preventDefault()}>Minting</button>
                      :

                      // <a className="mint_btn text-center" href="/" onClick={e => onMint(e)}>
                      <button className="btn btn-secondary mt-5" src="" onClick={e => onMint(e)}>Mint Now</button>
                  }
                </div> */}
              </div>
            </div>
            <TokenTable />

          </div>
        </div>
      </div>
      {/* <ConnectWallet show={modalShow} onHide={() => setModalShow(false)} setConnect={setConnect} /> */}
    </section>
  )
}

export default Claim;
