import React from "react";
import styled from "styled-components";
import { FaBriefcase } from "react-icons/fa";

const ExperienceSection = () => {
  const experiences = [
  {
    title: "App & Website Designer",
    company: "Everest English Boarding School",
    duration: "September 2021 - April 2022",
    description:
      "Helped design and develop the school's mobile app and website. Focused on making it easy to use for students, teachers, and staff.",
  },
  {
    title: "Community Leader/Representative",
    company: "Coding For Social Good",
    duration: "May 2022 - August 2022",
    description:
      "Visited schools to teach kids basic coding, programming concepts, and how to use Git and GitHub.",
  },
  {
    title: "Web Developer Intern",
    company: "Local Startup",
    duration: "November 2022 - April 2023",
    description:
      "Worked on a small website project using HTML, CSS, and JavaScript. Helped fix bugs and improve layout design.",
  },
];


  return (
    <Section id="experience">
      <Title>My Experience</Title>
      <Timeline>
        {experiences.map((exp, index) => (
          <TimelineItem key={index} isLeft={index % 2 === 0}>
            {index % 2 === 0 ? (
              <>
                <Content>{expContent(exp)}</Content>
                <Circle>
                  <FaBriefcase />
                </Circle>
                <Date isLeft>{exp.duration}</Date>
              </>
            ) : (
              <>
                <Date>{exp.duration}</Date>
                <Circle>
                  <FaBriefcase />
                </Circle>
                <Content>{expContent(exp)}</Content>
              </>
            )}
          </TimelineItem>
        ))}
      </Timeline>
    </Section>
  );
};

// Function to generate content
const expContent = (exp) => (
  <>
    <h3>{exp.title}</h3>
    <h4>{exp.company}</h4>
    <p>{exp.description}</p>
  </>
);

// Styled Components
const Section = styled.section`
  text-align: center;
  padding: 50px 20px;
  background-color: #f8f9fa;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;

  &::after {
    content: "";
    position: absolute;
    width: 3px;
    background: #333;
    top: 25px; /* Starts from the first icon */
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const TimelineItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 30px 0;
  position: relative;
`;

const Circle = styled.div`
  background: white; /* Changed to white */
  color: #333;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  border: 3px solid #333; /* Ensuring the middle line is initiated from here */
  z-index: 2; /* Ensures it stays on top */
`;

const Date = styled.div`
  font-size: 1rem;
  color: #555;
  width: 18%; /* Slightly reduced width */
  text-align: ${({ isLeft }) => (isLeft ? "left" : "right")};
  position: relative;
  top: 5px;
`;

const Content = styled.div`
  background: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 35%;
  max-width: 350px;
  transition: all 0.3s ease;

  &:hover {
    background: #e3e3e3;
  }

  h3 {
    margin: 0;
    font-size: 1.2rem;
    color: #333;
  }
  h4 {
    margin: 5px 0;
    font-size: 1rem;
    color: #777;
  }
  p {
    font-size: 0.9rem;
    color: #666;
  }
`;

export default ExperienceSection;
