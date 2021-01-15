import React from 'react';
import './styles.css';
import Carousel from "../Carousel/Carousel.js";

function Header() {
    return (
    <div className="header">
        <div className="title">
          <h1>BaniBox</h1>
          {/* <p>Your plants. Your story.</p> */}
        </div>
        <div className="under-title">
          <div className="carousel">
            <Carousel />
          </div>
          <div className="subtitle">
            <svg width="650" height="200">
              <text 
                x="0" 
                y="150" 
                fill="none" 
                stroke="black" 
                stroke-width="1" 
                font-size="50"  
                stroke-dasharray="1000"
                stroke-dashoffset="1000">
                  Your plants. Your story.
                <animate 
                  attributeName="stroke-dashoffset"
                  from="1000"
                  to="0" 
                  dur="5s"
                  fill="freeze">        
                </animate> 
              </text>
            </svg>
          </div>
        </div>
        {/* <div className="button">
          Learn More
        </div> */}
    </div>
    )
}

export default Header;
