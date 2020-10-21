import React, { Component } from "react";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'


class Findproject extends Component {
  render() {
    return (
      <>
       
        <section className="fp-container sa  ct">
            <article className="bl ct fdv sa">
                <h1>Find a Project</h1>
                <div className="search-container sa">
                  <div className="search">I am a ..</div>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" className="search-drop">
                      Creative Process
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="dropdown fdv">
                      <Dropdown.Item href="#/action-1" className="dropdown-item ct sa">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2" className="dropdown-item ct sa">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3" className="dropdown-item ct sa">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="button">Search</div>   
            </article>
        </section>
      </>
    );
  }
}

export default (Findproject)