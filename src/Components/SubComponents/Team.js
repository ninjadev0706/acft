import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';

function Team() {
  let fixedClassName = '';

  return (
  <Controller>
    <Scene duration={1200} offset={0} reverse={false} classToggle={[".team", "animate"]}>
      
    {(progress, event) => {
      if(event.type === 'leave') {
        fixedClassName = 'animate';
        event.target.removeClassToggle(true);
      }
      return (
        <section id="team" className={`team bg-light ${fixedClassName}`}>
          <div className="container">
            <h1 className="title text-center">Our Team</h1>
            <div className="row" id="team-slider">
              <div className="col-md-4">
                <div className="card mb-lg-3">
                  <img src="assets/img/jpg/team-1.jpg" alt=""/>
                  <div className="card-body">
                    <h5 className="card-title">Mr. Brainiac aka Jonnie</h5>
                    <p className="card-text">Founder & Lead Collection Artist </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-lg-3">
                  <img src="assets/img/jpg/team-2.jpg" alt=""/>
                  <div className="card-body">
                    <h5 className="card-title">Dr. Brainiac aka Jack</h5>
                    <p className="card-text">Founder & Lead Developer</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-lg-3">
                  <img src="assets/img/jpg/team-3.jpg" alt=""/>
                  <div className="card-body">
                    <h5 className="card-title">Cpt. Brainiac aka Luke</h5>
                    <p className="card-text">Community Manager</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-lg-3">
                  <img src="assets/img/jpg/team-4.jpg" alt=""/>
                  <div className="card-body">
                    <h5 className="card-title">Miss Brainiac aka Ka Hei</h5>
                    <p className="card-text">Collection Artist</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-lg-3">
                  <img src="assets/img/jpg/team-8.jpg" alt=""/>
                  <div className="card-body">
                    <h5 className="card-title">Dev. Brainiac aka Nemanja</h5>
                    <p className="card-text">Senior Blockchain Developer</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-lg-3">
                  <img src="assets/img/jpg/team-5.jpg" alt=""/>
                  <div className="card-body">
                    <h5 className="card-title">Brainiac Brandon aka Brandon</h5>
                    <p className="card-text">Senior Moderator</p>
                  </div>
                </div>
              </div>
              {/* <div className="col-md-4 offset-md-2">
                <div className="card mb-lg-3">
                  <img src="assets/img/jpg/team-6.jpg" alt=""/>
                  <div className="card-body">
                    <h5 className="card-title">Absolium aka Squanto</h5>
                    <p className="card-text">Senior Moderator & Team Security</p>
                  </div>
                </div>
              </div> */}
              <div className="col-md-4 offset-md-4">
                <div className="card mb-lg-3">
                  <img src="assets/img/jpg/team-7.jpg" alt=""/>
                  <div className="card-body">
                    <h5 className="card-title">Boon aka Usama</h5>
                    <p className="card-text">Senior Moderator</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )
    }}
    </Scene>
  </Controller>
  )
}

export default Team;
