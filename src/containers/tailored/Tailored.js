import React from 'react';
import './Tailored.css';

const Tailored = () => {

    return (
        <>
            <div className="syc__tailored tailored__padding" id='solutions'>
                <div className="syc__tailored-heading">
                    <h1 className="gradient__text" style={{ textAlign: "center" }}> Tailored Solutions </h1>
                </div>
                <div className="container">
                    <div className="cardd">
                        <div className="face face1">
                            <div className="content">
                                <span className="stars"></span>
                                <h2 className="card-1">Industrial Revolution</h2>
                                <p className="card-1">Revolutionize your production processes with our Industry 4.0 solutions, bringing automation and intelligence to the factory floor</p>
                            </div>
                        </div>
                        <div className="face face2">
                            <h2>Industrial Revolution</h2>
                        </div>
                    </div>

                    <div className="cardd">
                        <div className="face face1">
                            <div className="content">
                                <span className="stars"></span>
                                <h2 className="card-2">Healthcare of Tomorrow</h2>
                                <p className="card-2">Enhance patient care, streamline operations, and advance medical research with our state-of-the-art healthcare solutions</p>
                            </div>
                        </div>
                        <div className="face face2">
                            <h2>Healthcare of Tomorrow</h2>
                        </div>
                    </div>

                    <div className="cardd">
                        <div className="face face1">
                            <div className="content">
                                <span className="stars"></span>
                                <h2 className="card-3">Smart Cities</h2>
                                <p className="card-3">Shape the cities of the future with our urban infrastructure solutions, creating sustainable, connected, and intelligent spaces</p>
                            </div>
                        </div>
                        <div className="face face2">
                            <h2>Smart Cities</h2>
                        </div>
                    </div>

                    <div className="cardd">
                        <div className="face face1">
                            <div className="content">
                                <span className="stars"></span>
                                <h2 className="card-4">Retail Evolution</h2>
                                <p className="card-4">Redefine the shopping experience, optimize supply chains, and stay ahead in the ever-evolving retail landscape with our innovative solutions </p>
                            </div>
                        </div>
                        <div className="face face2">
                            <h2>Retail Evolution</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Tailored;
