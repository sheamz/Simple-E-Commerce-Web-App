import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slide1 from '../assets/slide1.jpg';
import Slide2 from '../assets/slide2.jpg'
import Slide3 from '../assets/slide3.jpg'

const SlideLanding = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Slide1}
                    alt="First slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Slide2}
                    alt="Second slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Slide3}
                    alt="Third slide"
                />
            </Carousel.Item>

        </Carousel>
    );
};

export default SlideLanding;