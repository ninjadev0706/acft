import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';

  function Cards() {
    let fixedClassName = '';

  return (
    <Controller>
      <Scene duration={1200} offset={0} reverse={false} classToggle={[".gallery-section .gallery", "animate"]} >
      {(progress, event) => {
        if(event.type === 'leave') {
          fixedClassName = 'animate';
          event.target.removeClassToggle(true);
        }
        return (
          <section id="cards" className="gallery-section">
            <ul className={`gallery list-unstyled ${fixedClassName}`}>
              <li className="gallery-item">
                <div><img src="assets/img/png/gallery/1.png" alt="" className="lazy"/></div>
                <div><img src="assets/img/png/gallery/2.png" alt="" className="lazy"/></div>
                <div><img src="assets/img/png/gallery/3.png" alt="" className="lazy"/></div>
              </li>
              <li className="gallery-item">
                <div><img src="assets/img/png/gallery/4.png" alt="" className="lazy"/></div>
                <div><img src="assets/img/png/gallery/5.png" alt="" className="lazy"/></div>
                <div><img src="assets/img/png/gallery/6.png" alt="" className="lazy"/></div>
              </li>
              <li className="gallery-item">
                <div><img src="assets/img/png/gallery/7.png" alt="" className="lazy"/></div>
                <div><img src="assets/img/png/gallery/8.png" alt="" className="lazy"/></div>
                <div><img src="assets/img/png/gallery/9.png" alt="" className="lazy"/></div>
              </li>
              <li className="gallery-item">
                <div><img src="assets/img/png/gallery/10.png" alt="" className="lazy"/></div>
                <div><img src="assets/img/png/gallery/11.png" alt="" className="lazy"/></div>
                <div><img src="assets/img/png/gallery/12.png" alt="" className="lazy"/></div>
              </li>
              <li className="gallery-item">
                <div><img src="assets/img/png/gallery/13.png" alt="" className="lazy"/></div>
                <div><img src="assets/img/png/gallery/14.png" alt="" className="lazy"/></div>
                <div><img src="assets/img/png/gallery/15.png" alt="" className="lazy"/></div>
              </li>
              <li className="gallery-item">
                <div><img src="assets/img/png/gallery/16.png" alt="" className="lazy"/></div>
                <div><img src="assets/img/png/gallery/17.png" alt="" className="lazy"/></div>
                <div><img src="assets/img/png/gallery/18.jpeg" alt="" className="lazy"/></div>
              </li>
              <li className="gallery-item">
                <div><img src="assets/img/png/gallery/19.jpeg" alt="" className="lazy"/></div>
                <div><img src="assets/img/png/gallery/20.jpeg" alt="" className="lazy"/></div>
                <div><img src="assets/img/png/gallery/21.jpeg" alt="" className="lazy"/></div>
              </li>
            </ul>
          </section>
        )
      }}
        
      </Scene>
    </Controller>
  )
}

export default Cards;
