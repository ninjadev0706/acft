import React from 'react';

function Footer() {

   return (
  <div className="footer text-center">
    <div className="footer-top">
        <div className="container">
            <img src="assets/img/svg/logo.svg" alt="" className="logo mw-100"/>
            <a className="title my-4 pb-2" href="https://cdn.discordapp.com/attachments/937082210077507628/968098154316709908/The_Brainiacs_TCs.pdf" target="_blank" rel="noreferrer">Terms of Service</a>
            <ul className="social">
                <li><a href="https://twitter.com/brainiacnfts" target="_blank" without rel="noreferrer"><img alt="" className="lazy" src="assets/img/svg/twitter-dark.svg"/></a></li>
                <li><a href="https://www.instagram.com/brainiacnfts" target="_blank" without rel="noreferrer"><img alt="" className="lazy" src="assets/img/svg/instagram-dark.svg"/></a></li>
            </ul>
        </div>
    </div>
    <div className="footer-bottom">
        <p>Copyright by 2022</p>
    </div>
  </div>
   )
}

export default Footer;
