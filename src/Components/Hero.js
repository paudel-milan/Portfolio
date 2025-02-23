import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

import { GithubButton, LinkedinButton } from "../Styles/HeroStyles";


import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE: THREE, // Required for WebGL
          color: 0xaaaaaa, // Soft gray lines
          backgroundColor: 0x0b0e14, // Dark navy background
          points: 8, // Fewer points for a cleaner effect
          maxDistance: 20, // Reduce spread of lines
          spacing: 25, // More spacing for a minimal look
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} style={{ width: "100%", height: "80vh", position: "relative" }}>
      {/* Hero Content */}
      <div style={{ 
        position: "absolute", 
        top: "50%", 
        left: "50%", 
        transform: "translate(-50%, -50%)", 
        textAlign: "center", 
        color: "white" 
      }}>
        {/* Profile Image */}
        <img 
          src="/assets/pic1.jpg"  // Replace with the correct image path
          alt="Milan Profile"
          style={{ 
            width: "120px", 
            height: "120px", 
            borderRadius: "50%", 
            marginBottom: "15px", 
            border: "3px solid white" 
          }} 
        />

        <h1>Hello, I'm Milan.</h1>
        <p>A passionate CSE student, full-stack developer, and tech enthusiast, constantly exploring new technologies and building innovative projects.</p>
        
        {/*Social Buttons*/}
        <div style={{ marginTop: "20px", display: "flex", gap: "15px", justifyContent: "center" }}>
          <GithubButton href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} style={{ marginRight: "8px" }} />
            GitHub
          </GithubButton>

          <LinkedinButton href="https://www.linkedin.com/in/milan-paudel-659b43287/" target="_blank" rel="noopener noreferrer">
            < FaLinkedin size={20} style={{ marginRight: "8px" }} />
            LinkedIn
          </LinkedinButton>
        </div>;
      </div>
    </div>
  );
};

export default Hero;
