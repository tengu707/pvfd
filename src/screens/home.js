import React from 'react';

const Home = () => 
    <div>
        <div className="row justify-content-center">
            <div className="col-11 col-md-5">
                <div className="card">
                    <div className="card-body">
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block img-thumbnail w-100" src="./pictures/sample.jpg" alt="First slide" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h3>Caption 1</h3>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block img-thumbnail w-100" src="./pictures/sample2.jpg" alt="Second slide" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h3>Caption 2</h3>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block img-thumbnail w-100" src="./pictures/sample3.jpg" alt="Third slide" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h3>Caption 3</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
            </div>
            <div className="col-11 col-md-6">
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title">Upcoming Event</h2>
                        <h3 className="card-subtitle mb-2 text-muted">Roll on the Mattole</h3>
                        <p className="card-text">Support your local fire department at the <b>Roll on the Mattole</b></p>
                    </div>
                </div>
                <br/>
            </div>
            <div className="col-11 col-md-6">
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title">Fund Raising</h2>
                        <h3 className="card-subtitle mb-2 text-muted">Replacement Fire Truck</h3>
                        <a href="/donate" className="card-link">Click here to donate</a>
                    </div>
                </div>
                <br/>
            </div>
            <div className="col-11 col-md-5">
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title">Title</h2>
                        <h3 className="card-subtitle mb-2 text-muted">Subtitle</h3>
                        <p className="card-text">Description</p>
                        <a href="/" className="card-link">Link</a>
                    </div>
                </div>
                <br/>
            </div>
        </div>
    </div>

export default Home;