import React from 'react';
import carol1 from '../assets/carol1.jpg' ;
import carol2 from '../assets/carol2.jpg' ;
import carol3 from '../assets/carol3.jpg';




function Carousel() {
    return (
        <div id="carouselExample" class="carousel slide" data-bs-ride="carousel"data-bs-interval="5000" >
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={carol1} class="d-block w-100" height={'450px'} alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={carol2}class="d-block w-100" height={'450px'} alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={carol3}class="d-block w-100" height={'450px'} alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel