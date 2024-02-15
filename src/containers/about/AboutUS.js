import React, { useEffect, useRef, useState } from 'react';
import './aboutus.css';
import sycVideo from '../../assets/syc-video.mp4';
import { FaPlay } from 'react-icons/fa';

const AboutUS = () => {
    const videoRef = useRef(null);
    const [videoPlayed, setVideoPlayed] = useState(false);

    useEffect(() => {
        const video = videoRef.current;

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5, // Adjust the threshold as needed
        };

        const callback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (!videoPlayed) {
                        // Play the video for the first time
                        video.play().catch((error) => {
                            // Autoplay failed, handle the error
                            console.error('Autoplay failed:', error);
                        });
                        setVideoPlayed(true);
                    } else {
                        video.play().catch((error) => {
                            // Autoplay failed, handle the error
                            console.error('Autoplay failed:', error);
                        });
                    }
                } else {
                    video.pause();
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);
        observer.observe(video);

        return () => {
            observer.disconnect();
        };
    }, [videoPlayed]);

    return (
        <div className={!videoPlayed ? "syc__video section__margin-for-video" : "syc__novideo section__margin-for-video"} id="aboutus">
            <div className="syc__video-heading">
                <h1 className="gradient__text">About US</h1>
            </div>
            {!videoPlayed ? (
                <div onClick={() => setVideoPlayed(true)}>
                    <div className="splash-screen"  >
                        <h1>Play Video</h1>
                        <div className='video-controls'>
                            <FaPlay size={56} />
                        </div>
                    </div>
                </div>

            ) : null}
            <video
                ref={videoRef}
                controls
                loop
                muted={!videoPlayed}
                style={{ display: videoPlayed ? 'block' : 'none', borderRadius: "30px" }}
            >
                <source src={sycVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default AboutUS;
