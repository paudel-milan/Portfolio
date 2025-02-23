import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(200, 200, 200, 0.9);
  padding: 10px 30px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  gap: 20px;
  z-index: 1000;
  transition: background 0.3s ease-in-out;
`;

export const NavContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const NavLink = styled.a`
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  color: #7a7a7a;
  padding: 10px 20px;
  border-radius: 25px;
  transition: all 0.4s ease-in-out;

  &.active {
    background: white;
    color: black;
    font-weight: 600;
    transform: scale(1.1);
  }

  &:hover {
    color: black;
    transform: scale(1.05);
  }
`;
