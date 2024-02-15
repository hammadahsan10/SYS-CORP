import React, { useRef, useEffect } from "react";

export function ParticleEffect() {
    
    const canvasRef = useRef(null);
    const particles = [];

    useEffect(() => {

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const resizeCanvas = () => {
            canvas.width = window.innerWidth * 0.9;
            canvas.height = window.innerHeight;
        };

        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.size = Math.random() * 3 + 1; // Adjust size
                this.speedX = Math.random() * 2 - 1; // Adjust speed
                this.speedY = Math.random() * 2 - 1;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                this.speedX *= 0.99; // Damping effect to reduce speed over time
                this.speedY *= 0.99;

                if (this.size > 0.2) this.size -= 0.05; // Adjust size decrement

                // Bounce off the walls
                if (this.x > canvas.width || this.x < 0) {
                    this.speedX = -this.speedX;
                }

                if (this.y > canvas.height || this.y < 0) {
                    this.speedY = -this.speedY;
                }
            }

            draw() {
                ctx.fillStyle = "red"; // Set fill color to red
                ctx.strokeStyle = "red"; // Set stroke color to red
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
            }

            connectParticles(particles) {
                for (let i = 0; i < particles.length; i++) {
                    const distance = Math.sqrt(
                        (this.x - particles[i].x) ** 2 + (this.y - particles[i].y) ** 2
                    );

                    if (distance < 120) {
                        ctx.beginPath();
                        ctx.strokeStyle = "red"; // Set line color to red
                        ctx.lineWidth = 0.2;
                        ctx.moveTo(this.x, this.y);
                        ctx.lineTo(particles[i].x, particles[i].y);
                        ctx.stroke();
                    }
                }
            }
        }

        const createParticles = () => {
            const xPos = Math.random() * canvas.width;
            const yPos = Math.random() * canvas.height;

            particles.push(new Particle(xPos, yPos));
        };

        const animateParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            createParticles(); // Create a new particle on each frame

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
                particles[i].connectParticles(particles);

                if (particles[i].size <= 0.2) {
                    particles.splice(i, 1);
                    i--;
                }
            }

            requestAnimationFrame(animateParticles);
        };

        window.addEventListener("resize", resizeCanvas);

        resizeCanvas();
        animateParticles();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    return <canvas ref={canvasRef} style={{ display: "block", position: "fixed", width: "100%" }} />;

}
