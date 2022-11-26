import React, { useState } from 'react';

function Header() {
  const [openMenuClass, setOpenMenuClass] = useState('');

  const openNav = () => {
    setOpenMenuClass('open-menu');
  }
  const closeNav = () => {
    setOpenMenuClass('');
  }

  return (
    <div className="header">
      <div className="container">
        <nav className="navbar navbar-expand-md">
          <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/mint">Mint</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#roadmap">Roadmap</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#team">Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#faq">FAQs</a>
              </li>
          </ul>
          <a className="navbar-brand" href="#home">
            <img alt="" className="lazy" src="assets/img/png/logo.png"/>
          </a>
          <ul className="social ms-auto">
            <li><a href="https://twitter.com/brainiacnfts" className="twitter" target="_blank" without rel="noreferrer"><img alt="" className="lazy" src="assets/img/svg/twitter.svg"/></a></li>
            <li><a href="https://www.instagram.com/brainiacnfts" className="instagram" target="_blank" without rel="noreferrer"><img alt="" className="lazy" src="assets/img/svg/instagram.svg"/></a></li>
          </ul>
          <button id="btn-open" className={`btn btn-sidebar ${openMenuClass}`} onClick={openNav}>
            <img src="assets/img/svg/menu.svg" alt=""/>
          </button>
          <div id="sidebar" className={`sidebar ${openMenuClass}`}>
            <button className="btn" onClick={closeNav}>
              <img src="assets/img/svg/close.svg" alt=""/>
            </button>
            <a href="/#home">Home</a>
            <a href="/mint">Mint</a>
            <a href="/#roadmap">Roadmap</a>
            <a href="/#team">Team</a>
            <a href="/#faq">FAQ</a>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header;
