import React from 'react';
import './chooseUs.css';
import icon2 from "../../assets/icon2.png"
import icon3 from "../../assets/icon3.png"
import icon4 from "../../assets/icon4.png"
import icon5 from "../../assets/icon5.png"
import icon6 from "../../assets/icon6.png"
import icon7 from "../../assets/icon7.png"
import icon8 from "../../assets/icon8.png"
import icon10 from "../../assets/icon10.png"
import icon11 from "../../assets/icon11.png"
import icon12 from "../../assets/icon12.png"
import icon14 from "../../assets/icon14.png"
import icon15 from "../../assets/icon15.png"
import icon16 from "../../assets/icon16.png"

const ChooseUs = () => {

    const chooseUsData = [
        { name: "Seamless Integration", text: "Our systems are designed to effortlessly integrate with your existing infrastructure, ensuring a smooth transition into the future", pic: icon14 },
        { name: "Global Connectivity", text: "In a world that never sleeps, stay connected. Our systems transcend borders, providing you with real-time control and monitoring from anywhere on the globe", pic: icon3 },
        { name: "Fortified Security", text: "Your data is your fortress, and we take its security seriously. Our robust security protocols ensure that your systems are shielded from any potential threats", pic: icon12 },
        { name: "Precision Analytics", text: "Make informed decisions with the power of data. Our advanced analytics give you valuable insights, empowering you to stay ahead of the curve", pic: icon5 },
        { name: "Interconnected Ecosystems", text: "Seamlessly connect devices, sensors, and processes, creating an ecosystem that communicates in harmony", pic: icon15 },
        { name: "AI-Powered Intelligence", text: "Embrace the future with artificial intelligence. Our systems learn, adapt, and evolve, ensuring that you are always one step ahead", pic: icon11 },
        { name: "Smart Infrastructure", text: "Transform your environment into a smart, responsive space. Our solutions redefine what's possible in modern infrastructure", pic: icon8 },
        { name: "IoT Revolution", text: " Ride the wave of the Internet of Things. Connect, monitor, and control your devices like never before", pic: icon10 }
    ]

    return (
        <>
            <div className="syc__choose choose__padding" id='chooseus'>
                <div className="syc__choose-heading">
                    <h1 className="gradient__text" style={{ textAlign: "center" }}> Why Choose Us? </h1>
                </div>
                <div className="row syc__choose-links">
                    {chooseUsData.map((card, index) => (
                        <div key={index} className="col-md-3 mb-4">
                            <div className="card text-center">
                                <img src={card.pic} alt='card pic' className="card-img-top reduced-width" />
                                <div className="card-body">
                                    <h5 className="card-title">{card.name}</h5>
                                    <p className="card-text">{card.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
};

export default ChooseUs;
