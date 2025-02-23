import React from "react";
import { motion } from "framer-motion";
import { 
  Section, Container, Title, ProjectCard, ProjectDetails, 
  ProjectName, TechStack, Description, Buttons, DemoButton, 
  GithubButton, ProjectImage 
} from "../Styles/ProjectStyles";

import { SiGnubash, SiShell, SiSqlite, SiHtml5, SiCss3 } from "react-icons/si";

import * as FaIcons from "react-icons/fa";

const Projects = () => {
  return (
    <Section id="projects">
      <Container>
        <Title>My Projects</Title>

        {/* BookByte Project */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <ProjectCard>
            <ProjectDetails>
              <ProjectName>BookByte - Your Digital Library </ProjectName>
              <TechStack>
                Made with:
                <FaIcons.FaReact color="#61DAFB" size={30} />
                <FaIcons.FaNodeJs color="#68A063" size={30} />
                <FaIcons.FaDatabase color="#FFD700" size={30} />
              </TechStack>
              <Description>
                BookByte is a full-stack e-book platform that allows users to explore, search, and read books online. Built with React, Node.js, Supabase, and Firebase authentication, it offers a seamless experience for book lovers.
              </Description>
              <Buttons>
                <DemoButton onClick={() => window.open("http://bookbyte.csproject.org", "_blank")}>🎥 Demo</DemoButton>
                <GithubButton onClick={() => window.open("https://github.com/paudel-milan/E_book_Project.git", "_blank")}>
                  <FaIcons.FaGithub size={20} style={{ marginRight: "8px" }} /> GitHub
                </GithubButton>
              </Buttons>
            </ProjectDetails>
            <ProjectImage src="\assets\image.png" alt="BookByte Preview" />
          </ProjectCard>
        </motion.div>

        {/* Unix Inventory Management System Project */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <ProjectCard>
            <ProjectDetails>
              <ProjectName>Inventory Management System</ProjectName>
              <TechStack>
                Made with:
                <FaIcons.FaLinux color="#FCC624" size={30} />   
                <SiGnubash color="#4EAA25" size={30} />      
                <SiSqlite color="#003B57" size={30} />  
                <SiHtml5 color="#E34F26" size={30} />  
                <SiCss3 color="#1572B6" size={30} />   
              </TechStack>
              <Description>
              This project is a GUI-based Inventory Management System built using Unix Shell Scripting with Zenity for UI dialogs. It allows users to efficiently manage inventory items through an interactive graphical interface.
              </Description>
              <Buttons>
                <DemoButton>🎥 Demo</DemoButton>
                <GithubButton onClick={() => window.open("https://github.com/paudel-milan/Unix_inventory_management_system.git", "_blank")}><FaIcons.FaGithub size={20} style={{ marginRight: "8px" }} /> GitHub</GithubButton>
              </Buttons>
            </ProjectDetails>
            <ProjectImage src="\assets\image copy.png" alt="Unix Inventory Preview" />
          </ProjectCard>
        </motion.div>

      </Container>
    </Section>
  );
};

export default Projects;
