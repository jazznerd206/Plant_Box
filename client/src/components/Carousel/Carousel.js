import React from 'react';
import './styles.css';
import Carousel from 'react-bootstrap/Carousel'
import Image1 from '../../public/planter1.jpg';
import Image2 from '../../public/planter2.jpg';
import Image3 from '../../public/plant4.jpg';


function Car() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Image1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Grow without thinking.</h3>
                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Image2}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Invigorate your home.</h3>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Image3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Specialized care routines</h3>
                {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Car;
