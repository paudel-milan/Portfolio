import React from "react";
import styled from "styled-components";
import { 
  FaJs, FaReact, FaNodeJs, FaPython, FaJava, 
  FaHtml5, FaCss3, FaGit, FaDatabase, FaLinux 
} from "react-icons/fa";

const SkillsSection = () => {
  const skills = [
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },      // Yellow
    { name: "React", icon: <FaReact />, color: "#61DAFB" },        // Blue
    { name: "Node.js", icon: <FaNodeJs />, color: "#68A063" },     // Green
    { name: "Python", icon: <FaPython />, color: "#3776AB" },      // Blue
    { name: "Java", icon: <FaJava />, color: "#007396" },          // Blue
    { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },        // Orange
    { name: "CSS", icon: <FaCss3 />, color: "#1572B6" },          // Blue
    { name: "Git", icon: <FaGit />, color: "#F05032" },           // Red
    { name: "MySQL", icon: <FaDatabase />, color: "#4479A1" },    // Blue
    { name: "Linux", icon: <FaLinux />, color: "#FCC624" },       // Yellow
  ];

  return (
    <Section>
      <Title>My Skills</Title>
      <SkillsGrid>
        {skills.map((skill, index) => (
          <SkillCard key={index}>
            <SkillIcon style={{ color: skill.color }}>{skill.icon}</SkillIcon>
            <SkillName>{skill.name}</SkillName>
          </SkillCard>
        ))}
      </SkillsGrid>
    </Section>
  );
};

// Styled Components
const Section = styled.section`
  text-align: center;
  padding: 50px 20px;
  background-color: #f8f9fa;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 30px;
  color: #333;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
  max-width: 800px;
  margin: 0 auto;
  justify-content: center;

  @media (max-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const SkillIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 10px;
  transition: transform 0.3s ease-in-out;

  ${SkillCard}:hover & {
    transform: rotate(10deg);
  }
`;

const SkillName = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #555;
`;

export default SkillsSection;
