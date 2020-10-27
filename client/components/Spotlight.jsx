import React, { Component } from "react";
import image1 from "../../public/spot-images/sketch1.png"
import image2 from "../../public/spot-images/sketch2.png"
import image3 from "../../public/spot-images/sketch3.png"
import image4 from "../../public/spot-images/sketch4.png"


class Spotlight extends Component {
  render() {
    return (
      <>
        <section class="sl-container sb">
            <article class="sl-bio fdv ct">
                <div className="bio-title title-font"> 
                  <p>Spotlight</p>
                </div>
                <h3>Project of the month</h3>
                <div className="bio-text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed neque sit amet sapien dictum venenatis. Phasellus efficitur lacus et neque iaculis bibendum. Ut fermentum scelerisque lectus ac fringilla. Suspendisse. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed neque sit amet sapien dictum venenatis. Phasellus efficitur lacus et neque iaculis bibendum. Ut fermentum scelerisque lectus ac fringilla. Suspendisse. </p>
                </div>
            </article>
            <article className="sl-gallery sb">
              <div className="img-container-left fdv">
                <div className="img-cont">
                  <img src={image2} alt=""/>
                </div>
                <div className="img-cont">
                  <img src={image3} alt=""/>
                </div>
                <div className="img-cont">
                  <img src={image4} alt=""/>
                </div>
              </div>
              <div className="img-container-right bl">
                <img src={image1} alt="Image 1"/>
              </div>
            </article>
        </section>
      </>
    );
  }
}

export default (Spotlight)