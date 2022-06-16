import React, { Component } from 'react';
import "./About.css";
import profile_pic_name from "../assets/profile_pic_name.jpg"; 

export default class About extends Component {
  render() {
    return (
      <div>
         <div>
            <div class="split left">
              <div className="centered">
                <img 
                  className="profile_image"
                  // Image goes here
                  src= {profile_pic_name}
                  alt={"Profile Pic"}
                  ></img>
              </div>
            </div>
            <div className="split right">
              <div className="centered">
                <div className="name_title">BRIAN PEINADO</div>
                <div className="brief_description">
                  <p>Hello, My name is Brian and I am a student from the University of Texas at El Paso. 
                    I am currently part of the IBM Accelerate program. I am interested in Front End Development and Artificial Intelligence</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}