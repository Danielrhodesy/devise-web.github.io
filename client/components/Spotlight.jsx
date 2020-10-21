import React, { Component } from "react";


class Spotlight extends Component {
  render() {
    return (
      <>
        <section class="sl-container sb">
            <article class="sl-bio fdv ct">
                <div className="bio-title"></div>
                <h3>Project of the month</h3>
                <div className="bio-text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed neque sit amet sapien dictum venenatis. Phasellus efficitur lacus et neque iaculis bibendum. Ut fermentum scelerisque lectus ac fringilla. Suspendisse. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed neque sit amet sapien dictum venenatis. Phasellus efficitur lacus et neque iaculis bibendum. Ut fermentum scelerisque lectus ac fringilla. Suspendisse. </p>
                </div>
            </article>
            <article className="sl-gallery sb">
              <div className="img-container-left fdv">
                <div className="img-cont bl"></div>
                <div className="img-cont bl"></div>
                <div className="img-cont bl"></div>
              </div>
              <div className="img-container-right bl"></div>
            </article>
        </section>
      </>
    );
  }
}

export default (Spotlight)