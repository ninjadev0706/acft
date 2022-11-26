import React from 'react';
import { useWeb3React } from '@web3-react/core'
import {Modal, ListGroup} from "react-bootstrap";
import { injected, walletconnect } from '../util/connector';

function ConnectWallet(props) {

  const { show, onHide, setConnect } = props
  const {activate} = useWeb3React();

  const connectWallet = (type) => {
    setConnect(true)
    if(type === "walletconnect") {
      activate(walletconnect)
      // localStorage.setItem("accountStatus", "1")
    } else {
      activate(injected)
      localStorage.setItem("accountStatus", "1")
    }
    onHide()
  }
  
  return (
    <Modal show={show} onHide={onHide} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Connect to a wallet
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item onClick={ () => connectWallet("injected") }> 
            MetaMask 
            <div className="wallet-logo">
              <img alt="" src="images/landing/wallet/metamask.png"></img>
            </div>
          </ListGroup.Item>
          <ListGroup.Item onClick={ () => connectWallet("walletconnect") }> 
            WalletConnect 
            <div className="wallet-logo">
              <img alt="" src="images/landing/wallet/walletconnect.png"></img>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Modal.Body>
    </Modal>
  );
}

  export default ConnectWallet;