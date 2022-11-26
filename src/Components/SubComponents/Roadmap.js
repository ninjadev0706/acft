import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';

function Roadmap() {
  let fixedClassName = '';

  return (
  <Controller>
    <Scene duration={1200} offset={200} reverse={false} classToggle={[".roadmap", "animate"]}>
      {(progress, event) => {
        if(event.type === 'leave') {
          fixedClassName = 'animate';
          event.target.removeClassToggle(true);
        }
        return (
          <section id="roadmap" className={`roadmap ${fixedClassName}`}>
            <div className="container">
              <h1 className="title text-center">Roadmap V1 Activations</h1>
              <div className="row">
                <div className="col-md-8">
                  <div className="timeline">
                    <Tween
                      to={{
                        bottom: '0px',
                      }}
                    >
                      <span className="bar"></span>
                    </Tween>
                    <div className="card card-roadmap">
                      <div className="card-body">
                        <div className="percent">
                            <p>10%</p>
                        </div>
                        <h2 className="card-title">Phase 1</h2>
                        <p className="card-text">Mint all of the Brainiacs.</p>
                      </div>
                    </div>
                    <div className="card card-roadmap">
                      <div className="card-body">
                        <div className="percent">
                            <p>20%</p>
                        </div>
                        <h2 className="card-title">Phase 2</h2>
                        <p className="card-text">LOCKDOWN DISCORD!</p>
                      </div>
                    </div>
                    <div className="card card-roadmap">
                      <div className="card-body">
                        <div className="percent">
                            <p>30%</p>
                        </div>
                        <h2 className="card-title">Phase 3</h2>
                        <p className="card-text">Verify rarites, list on rarity.tools, and activate the Brainiac NFT bot.</p>
                      </div>
                    </div>
                    <div className="card card-roadmap">
                      <div className="card-body">
                        <div className="percent">
                            <p>50%</p>
                        </div>
                        <h2 className="card-title">Phase 4</h2>
                        <p className="card-text">Host first Brainstage for Brainiac holders</p>
                      </div>
                    </div>
                    <div className="card card-roadmap">
                        <div className="card-body">
                            <div className="percent">
                                <p>60%</p>
                            </div>
                            <h2 className="card-title">Phase 5</h2>
                            <p className="card-text">Announce AMA & Brainstage calendar.</p>
                        </div>
                    </div>
                    <div className="card card-roadmap">
                        <div className="card-body">
                            <div className="percent">
                                <p>70%</p>
                            </div>
                            <h2 className="card-title">Phase 6</h2>
                            <p className="card-text">Community voting event</p>
                        </div>
                    </div>
                    <div className="card card-roadmap">
                        <div className="card-body">
                            <div className="percent">
                                <p>80%</p>
                            </div>
                            <h2 className="card-title">Phase 6</h2>
                            <p className="card-text">Discord community V2 update.</p>
                        </div>
                    </div>
                    <div className="card card-roadmap">
                        <div className="card-body">
                            <div className="percent">
                                <p>100%</p>
                            </div>
                            <h2 className="card-title">Phase 5</h2>
                            <p className="card-text">Launch V2 Roadmap.</p>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="d-flex justify-content-center align-items-end h-100 pb-5">
                    <div className="nft">
                      <img src="assets/img/png/guy.png" alt="" className="guy mw-100"/>
                      <img src="assets/img/svg/guy-cloud.svg" alt="" className="guy-cloud mw-100 d-none"/>
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

export default Roadmap;
