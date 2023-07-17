import React, { useEffect } from "react";
import { FaReact } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";


const LandingPage = () => {
  useEffect(() => {
    const particlesConfig = {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 6,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    };

    const particlesInit = () => {
      const particles = window.particlesJS;
      if (particles) {
        particles("tsparticles", particlesConfig);
      }
    };

    if (!window.particlesJS) {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
      script.onload = particlesInit;
      document.body.appendChild(script);
    } else {
      particlesInit();
    }
  }, []);

  return (
    <div className="container">
      <div className="particlesContainer">
        <div id="tsparticles" />
      </div>
      <div className="content">
        <div className="circleButton">
          <FaReact className="reactIcon" />
        </div>
        <p className="caption">Click the circle to explore</p>

        <div className="mainContent">
          <h1 className="heading">Welcome to My Website</h1>
          <p className="paragraph">
            This is the main content of the website. Feel free to explore!
          </p>
          {/* Rest of your main content */}
        </div>

        <footer className="footer">
          <div className="linksContainer">
            <a href="#" className="link homeLink">
              Home
            </a>
            <RiArrowRightSLine className="arrowIcon" />
            <a href="#" className="link">
              About
            </a>
            <RiArrowRightSLine className="arrowIcon" />
            <a href="#" className="link">
              Contact
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
