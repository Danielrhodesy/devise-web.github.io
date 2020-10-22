import React, { Component } from "react";
// import { render } from 'react-dom'
import "leaflet/dist/leaflet.css";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
class Contact extends Component {
  render() {
    return (
      <>
        <section className="ct-container sa ct">
            <Map center={[-41.291585, 174.775499]} zoom="16">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            {/* <Marker value="Devise" positions={[-41.291585, 174.775499]}></Marker> */}
            </Map>
            <article className="bl">
            
            </article>
        </section>
      </>
    );
  }
}

export default (Contact)