import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import styled from "styled-components";

const EducationSection = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f3f4f6;
  padding: 2.5rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2.5rem;
  color: #1f2937;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
`;

const Card = styled.div`
  background: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  width: 350px;
  text-align: center;
  border: 1px solid #e5e7eb;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }
`;

const Icon = styled(FaGraduationCap)`
  color:rgb(12, 12, 12);
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
`;

const Institution = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
`;

const Degree = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #374151;
`;

const CGPA = styled.p`
  font-size: 1rem;
  color: #4b5563;

  span {
    font-weight: 600;
  }
`;

const Location = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
`;

const Duration = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  color: #6b7280;
  margin-top: 0.5rem;
`;

const Button = styled.a`
  display: inline-block;
  margin-top: 1rem;
  background-color:rgb(18, 18, 19);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.3s ease-in-out;

  &:hover {
    background-color:rgb(0, 0, 0);
  }
`;

const Education = () => {
  const educationData = [
    {
      institution: "BMS College of Engineering",
      degree: "Bachelor of Engineering in Computer Science",
      cgpa: "9.75/10",
      location: "Bangalore, Karnataka",
      duration: "2023 - Present",
      url: "https://www.bmsce.ac.in/",
    },
    {
      institution: "Everest English Boarding School",
      degree: "Higher Secondary (Grade 11-12)",
      cgpa: "3.62/4.0",
      location: "Butwal, Nepal",
      duration: "2021 - 2023",
      url: "https://everest.edu.np/", // Replace with actual URL
    },
    {
      institution: "Sagarmatha Secondary Boarding School",
      degree: "Secondary School (Grade 1-10)",
      cgpa: "4.0/4.0",
      location: "Rupandehi, Nepal",
      duration: "2011 - 2021",
      url: "https://sagarmathaacademy.edu.np/", // Replace with actual URL
    },
  ];

  return (
    <EducationSection>
      <Title>My Education</Title>
      <CardsContainer>
        {educationData.map((edu, index) => (
          <Card key={index}>
            <Icon />
            <Institution>{edu.institution}</Institution>
            <Degree>{edu.degree}</Degree>
            <CGPA>
              CGPA: <span>{edu.cgpa}</span>
            </CGPA>
            <Location>{edu.location}</Location>
            <Duration>{edu.duration}</Duration>
            <Button href={edu.url} target="_blank" rel="noopener noreferrer">
              Visit Website
            </Button>
          </Card>
        ))}
      </CardsContainer>
    </EducationSection>
  );
};

export default Education;
