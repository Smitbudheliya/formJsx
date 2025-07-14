import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Benner.css'; // Custom styles (you'll create this file)

const Benner = () => {
    return (
        <div className="container-fluid p-0">
            <div className="row m-0">
                <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-bs-ride="carousel"
                    data-bs-interval="3000"
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjSyG1EQ7ZXLRiEU67OQAvbp_tpitABL8_mw&s"
                                className="d-block w-100 banner-img"
                                alt="Fashion Slide 1"
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL_MHITJQh3bJcxvZuVeajj4ajKpIcTGEl3A&s"
                                className="d-block w-100 banner-img"
                                alt="Fashion Slide 2"
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7863y5DnpmL2kozb7RT-HbnGobvHDkVr6tw&s"
                                className="d-block w-100 banner-img"
                                alt="Fashion Slide 3"
                            />
                        </div>
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Benner;
