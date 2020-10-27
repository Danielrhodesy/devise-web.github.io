import React, { Component } from "react";
// import { render } from 'react-dom'
import "leaflet/dist/leaflet.css";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
class Contact extends Component {
  render() {
    return (
      <>
        <section className="ct-container sa ct fdv">
            <article className="ct-title  sa fdv bl">
              <h1>Contact</h1>
            </article>
            <Map center={[-41.291585, 174.775499]} zoom="16" className="map-cont">
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              />
              {/* <Marker value="Devise" positions={[-41.291585, 174.775499]}></Marker> */}
            </Map>
            <article className="ct-text sb">
              <div className="ct-left-box fdv">
                <div className="ct-inq">
                  <h1>Inquiry</h1>
                  <p>For any inquiries, questions or commendations, please call: 123-456-7890 or fill out the following form</p>  
                  
                </div>
                <div className="ct-form fdv sb">
                  <h1>Contact Us</h1>
                  <form className="ct-form fdv">
                    <label>
                      <p>Enter your Name</p>
                      <input type="text" name="name" value="Name" className="form-input"/>
                    </label>
                    <label>
                      <p>Enter your Email</p>
                      <input type="text" name="name" value="Email" className="form-input"/>
                    </label>
                    <label>
                      <p>Enter your Subject</p>
                      <input type="text" name="name" value="Subject" className="form-input"/>
                    </label>
                    <label>
                      <p>Enter your Message</p>
                      <input type="text_box" name="name" value="Message" className="form-input" />
                    </label> 
                    <div className="form-button-wrapper sa">
                      <input type="submit" value="Submit" className="form-button sa ct" />
                    </div>                    
                  </form>
                </div>
              </div>
              <div className="ct-right-box fdv">
                <div className="ct-off">
                  <h1>Head Office</h1>
                  <p>500 Terry Francois Street <br/>
                  San Francisco, CA 94158<br/><br/>
                  info@mysite.com<br/>
                  Tel: 123-456-7890<br/>
                  Fax: 123-456-7890
                  </p>
                </div>
                <div className="ct-emp">
                  <h1>Employment</h1>
                  <p>To apply for a job with Sphere Constuctions, please send a cover letter together with your C.V. to: info@mysite.com</p>
                </div>
              </div>

            </article>
        </section>
      </>
    );
  }
}

export default (Contact)