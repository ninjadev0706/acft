import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

function Faq() {
  let fixedClassName = '';

  return (
    <Controller>
      <Scene duration={1200} offset={0} reverse={false} classToggle={[".faq", "animate"]}>
        {(progress, event) => {
          if (event.type === 'leave') {
            fixedClassName = 'animate';
            event.target.removeClassToggle(true);
          }
          return (
            <section id="faq" className={`faq bg-light ${fixedClassName}`}>
              <div className="container">
                <h1 className="title text-center">FAQ</h1>
                <div className="row">
                  <div className="col-md-10 offset-md-1">
                    <Accordion className="accordion" id="accordionExample" allowZeroExpanded={true}>

                      <AccordionItem className="accordion-item">
                        <AccordionItemHeading className="accordion-header">
                          <AccordionItemButton className="accordion-button">
                            <h2>How much does each NFT cost?</h2>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="accordion-collapse collapse show" >
                          <div className="accordion-body">
                            <p>Mint cost for each Brainiac is 0.08 eth.</p>
                          </div>
                        </AccordionItemPanel>
                      </AccordionItem>

                      <AccordionItem className="accordion-item">
                        <AccordionItemHeading className="accordion-header">
                          <AccordionItemButton className="accordion-button">
                            <h2>What is the utility for the brainiacs?</h2>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="accordion-collapse collapse show" >
                          <div className="accordion-body">
                            <ul className="faqspace">
                              <li className="">Owning a Brainiac is your membership to our exclusive the brainiacs.</li>
                              <li className="">Members will have the ability to attend our exclusive Brainstages held exclusively to holders in Discord as well as our Brainiac Keynote Events where they will have access to learn from some of the most respected members of the cryptocurrency and NFT communities.</li>
                              <li className="">Members will be eligible for airdrop giveaways of exclusive Brainic Society NFT's.
                              </li>
                              <li className="">Members will have full access to Brainiac Land in the Metaverse where they will be able to access all previously recorded Brainiac Nights and Brainiac Keynote Events.</li>
                              <li className="">Members will be eligible to attend IRL events and exclusive invites extended to the community.</li>
                            </ul>
                          </div>
                        </AccordionItemPanel>
                      </AccordionItem>

                      <AccordionItem className="accordion-item">
                        <AccordionItemHeading className="accordion-header">
                          <AccordionItemButton className="accordion-button">
                            <h2>Where can I check rarity?</h2>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="accordion-collapse collapse show" >
                          <div className="accordion-body">
                            <p>Following the public sale, we will be working with Rarity Tools.</p>
                          </div>
                        </AccordionItemPanel>
                      </AccordionItem>

                      <AccordionItem className="accordion-item">
                        <AccordionItemHeading className="accordion-header">
                          <AccordionItemButton className="accordion-button">
                            <h2>What can I do with my Brainiac?</h2>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="accordion-collapse collapse show" >
                          <div className="accordion-body">
                            <p>Whatever you want! You are free to do whatever you'd like under the non-exclusive license.</p>
                          </div>
                        </AccordionItemPanel>
                      </AccordionItem>

                      <AccordionItem className="accordion-item">
                        <AccordionItemHeading className="accordion-header">
                          <AccordionItemButton className="accordion-button">
                            <h2>How many can I mint?</h2>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="accordion-collapse collapse show" >
                          <div className="accordion-body">
                            <p>You can mint 8 Brainiacs per wallet.</p>
                          </div>
                        </AccordionItemPanel>
                      </AccordionItem>

                      <AccordionItem className="accordion-item">
                        <AccordionItemHeading className="accordion-header">
                          <AccordionItemButton className="accordion-button">
                            <h2>When can I mint?</h2>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="accordion-collapse collapse show" >
                          <div className="accordion-body">
                            <p>Minting will be live from 10am - 1pm Eastern Time on April 30, 2022.</p>
                          </div>
                        </AccordionItemPanel>
                      </AccordionItem>

                    </Accordion>
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

export default Faq;
