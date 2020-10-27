import React, { Component } from "react";
import port1 from "../../public/port-images/portfolio.png"
import port2 from "../../public/port-images/portfolio2.png"
import port3 from "../../public/port-images/portfolio3.png"
import port4 from "../../public/port-images/portfolio4.png"
import port5 from "../../public/port-images/portfolio5.png"
import port6 from "../../public/port-images/portfolio6.png"
import port7 from "../../public/port-images/portfolio7.png"
import port8 from "../../public/port-images/portfolio8.png"
import port9 from "../../public/port-images/portfolio9.png"
import port10 from "../../public/port-images/portfolio10.png"
import port11 from "../../public/port-images/portfolio11.png"


class Portfolio extends Component {
  render() {
    return (
      <>
        <section id="photos" class="pf-container">
            <article class="pf-title-container">
            </article>
            <article class="pf-gallery">
              <img src={port1} alt=""/>
              <img src={port2} alt=""/>
              <img src={port3} alt=""/>
              <img src={port4} alt=""/>
              <img src={port5} alt=""/>
              <img src={port6} alt=""/>
              <img src={port7} alt=""/>
              <img src={port8} alt=""/>
              <img src={port9} alt=""/>
              <img src={port10} alt=""/>
              <img src={port11} alt=""/>

            </article>
        </section>
      </>
    );
  }
}

export default (Portfolio)