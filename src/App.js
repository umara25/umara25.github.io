import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import myPhoto from "./images/umarPhoto.jpg"; 

function App() {
  const canvasRef = useRef(null);
  const [hyperdriveOver, setHyperdriveOver] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let stars = [];
    let hyperdriveActive = true;

    const speedDuringHyperdrive = 60;
    const speedAfterHyperdrive = 1;
    const hyperdriveDuration = 400;

    class Star {
      constructor() {
        this.reset();
        this.prevZ = this.z;
      }

      reset() {
        this.x = Math.random() * canvas.width - canvas.width / 2;
        this.y = Math.random() * canvas.height - canvas.height / 2;
        this.z = Math.random() * canvas.width;
        this.radius = Math.random() * 3 + 1;
      }

      update() {
        this.prevZ = this.z;
        this.z -= hyperdriveActive ? speedDuringHyperdrive : speedAfterHyperdrive;

        if (this.z <= 0) {
          this.reset();
          this.z = canvas.width;
          this.prevZ = this.z + (hyperdriveActive ? speedDuringHyperdrive : speedAfterHyperdrive);
        }
      }

      draw() {
        const sx = (this.x / this.z) * canvas.width + canvas.width / 2;
        const sy = (this.y / this.z) * canvas.height + canvas.height / 2;

        const px = (this.x / this.prevZ) * canvas.width + canvas.width / 2;
        const py = (this.y / this.prevZ) * canvas.height + canvas.height / 2;

        if (sx > 0 && sx < canvas.width && sy > 0 && sy < canvas.height) {
          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(sx, sy);
          ctx.strokeStyle = "white";
          ctx.lineWidth = this.radius;
          ctx.stroke();
        }
      }
    }

    function initStars(count) {
      for (let i = 0; i < count; i++) {
        stars.push(new Star());
      }
    }

    initStars(1500);

    setTimeout(() => {
      hyperdriveActive = false;
      setHyperdriveOver(true);
    }, hyperdriveDuration);

    function animate() {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.update();
        star.draw();
      });
      requestAnimationFrame(animate);
    }
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <canvas ref={canvasRef}></canvas>

        <nav className={`main-nav ${hyperdriveOver ? "fade-in" : ""}`}>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className={`hero-text ${hyperdriveOver ? "fade-in" : ""}`}>
          <h1>Umar Ahmer</h1>
          <h2>Software Engineer</h2>
        </div>
      </header>

      <main>
        <section id="about" className="about-section">
          <div className="about-container">
            <div className="about-image">
              <img src={myPhoto} alt="Umar Ahmer"/>
            </div>
            <div className="about-text">
              <h2>About Me</h2>
              <p>
                I am a Computer Science student at McMaster University with a deep 
                passion for building impactful solutions. My experience spans 
                full-stack web development, robotics, and teaching, and I enjoy 
                exploring cutting-edge frameworks to continuously sharpen my skills. 
                Proficient in Python, JavaScript, and C++, I thrive on solving 
                complex problems and bringing innovative ideas to life. Whether 
                it’s collaborating on open-source projects or diving into the latest 
                tech, I embrace every opportunity to learn and grow.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="projects-section">
          <h2>Projects</h2>

          <div className="project-card">
            <div className="project-header">
              <h3>Velora</h3>
              <a href="https://github.com/umara25/velora" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub Link" className="github-link-icon"/>
              </a>
            </div>
            <p>
              Velora is a cutting-edge crypto stock analyzer built on the Solana 
              blockchain. It offers real-time market data, interactive charts, and 
              advanced analytics to help traders make informed decisions. With a 
              streamlined UI, Velora simplifies crypto portfolio tracking for both 
              novice and experienced users.
            </p>
          </div>

          <div className="project-card">
            <div className="project-header">
              <h3>LookLock</h3>
              <a href="https://github.com/umara25/looklock" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub Link" className="github-link-icon"/>
              </a>
            </div>
            <p>
              LookLock is a robust full-stack application developed using 
              Streamlit, OpenCV, and Django. It provides secure image processing 
              and user authentication workflows, integrating computer vision 
              techniques for identity verification. LookLock emphasizes data 
              privacy and delivers an intuitive experience for managing access 
              control.
            </p>
          </div>

          <div className="project-card">
            <div className="project-header">
              <h3>Detectorio</h3>
              <a href="https://github.com/umara25/detectorio" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub Link" className="github-link-icon"/>
              </a>
            </div>
            <p>
              Detectorio is a real-time monitoring bot for Discord, designed to 
              track website outages and alert server administrators instantly. 
              By leveraging uptime checks and downtime analytics, Detectorio 
              prevents prolonged disruptions and ensures a smooth online 
              experience for users.
            </p>
          </div>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>Feel free to reach out via:</p>

          <div className="contact-icons">
            <a href="https://www.linkedin.com/in/umar-ahmer/" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="LinkedIn" className="contact-icon"/>
            </a>
            <a href="https://github.com/umara25" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733609.png" alt="GitHub" className="contact-icon"/>
            </a>
            <a href="mailto:Umarahmer1@gmail.com">
              <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" className="contact-icon"/>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
