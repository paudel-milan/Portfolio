// src/styles/HeroStyles.js
import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

export const HeroContent = styled.div`
  position: absolute;
  text-align: center;
  color: #fff;

  h1 {
    font-size: 2.5rem;
    font-weight: 600;
    margin: 10px 0;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 15px;

    span {
      font-weight: 600;
      color: #ffffff;
    }
  }

  p {
    font-size: 1.2rem;
    max-width: 600px;
    margin: auto;
  }
`;

export const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid #fff;
  margin-bottom: 15px;
`;


export const GithubButton = styled.a`
  padding: 10px 18px;
  background: white; /* White background */
  color: #161b22; /* Dark text */
  font-size: 1rem;
  border-radius: 50px;
  border: 2px solid #161b22;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background: #161b22;
    color: white;
  }
`;

// LinkedIn Button (Dark blue background with white text)
export const LinkedinButton = styled.a`
  padding: 10px 18px;
  background: #0077b5; /* LinkedIn blue */
  color: white;
  font-size: 1rem;
  border-radius: 50px;
  border: 2px solid #0077b5;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  transition: background 0.3s ease-in-out, border 0.3s ease-in-out;

  &:hover {
    background: white;
    color: #0077b5;
    border: 2px solid #0077b5;
  }
`;