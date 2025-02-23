import styled from "styled-components";
import { motion } from "framer-motion";

// Section Wrapper
export const Section = styled.section`
  padding: 80px 0;
  background: #f9f9f9;
`;

// Container
export const Container = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

// Title
export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  color: #333;
  margin-bottom: 30px;
`;

// Project Card
export const ProjectCard = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 15px 40px rgba(0, 0, 0, 0.15);
  }

  &:nth-child(even) {
    flex-direction: row-reverse;
  }
`;

// Project Details
export const ProjectDetails = styled.div`
  flex: 1;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

// Project Name
export const ProjectName = styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
  color: #222;
`;

// Tech Stack
export const TechStack = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1rem;
  color: #666;
`;

// Description
export const Description = styled.p`
  font-size: 1rem;
  color: #444;
  line-height: 1.6;
`;

// Buttons Container
export const Buttons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
`;



// Demo Button (Black background with white text)
export const DemoButton = styled.button`
  padding: 10px 18px;
  border: none;
  background: #0d0f17; /* Dark navy/black */
  color: white;
  font-size: 1rem;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: #161b22; /* Slightly lighter black */
  }
`;

// GitHub Button (Light background with dark text & border)
export const GithubButton = styled.button`
  padding: 10px 18px;
  background: transparent;
  color: #161b22; /* Dark text */
  font-size: 1rem;
  border-radius: 50px;
  border: 2px solid #161b22;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background: #161b22;
    color: white;
  }
`;


// Project Image
export const ProjectImage = styled.img`
  width: 50%;
  height: 300px;
  object-fit: cover;
  border-radius: 0 15px 15px 0;

  ${ProjectCard}:nth-child(even) & {
    border-radius: 15px 0 0 15px;
  }
`;
