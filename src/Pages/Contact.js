import React, { useRef, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const ContactContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f3f4f6;
  padding: 3rem 1.5rem;
`;

const FormWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  background: #ffffff;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #1f2937;
`;

const SubText = styled.p`
  color: #6b7280;
  margin-top: 0.5rem;

  a {
    color: #2563eb;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Form = styled.form`
  margin-top: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border 0.2s ease-in-out;

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 5px rgba(37, 99, 235, 0.3);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border 0.2s ease-in-out;
  resize: none;

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 5px rgba(37, 99, 235, 0.3);
  }
`;

const Button = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #111827;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  padding: 12px;
  border-radius: 50px;
  margin-top: 1rem;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  &:hover {
    background-color: #1f2937;
  }

  svg {
    margin-left: 8px;
  }
`;

const Contact = () => {
  const formRef = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oe5f2ry", // Replace with your EmailJS Service ID
        "template_zphwhrg", // Replace with your EmailJS Template ID
        formRef.current,
        "mnRer1bqRLTT0Plil" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Message Sent!", result.text);
          setSuccess(true);
          e.target.reset(); // Clear the form after submission
        },
        (error) => {
          console.error("Failed to send message", error.text);
        }
      );
  };

  return (
    <ContactContainer>
      <FormWrapper>
        <Heading>Contact Me</Heading>
        <SubText>
          Please contact me directly at {" "}
          <a href="mailto:milanpaudel12kk@gmail.com">milanpaudel12kk@gmail.com</a> or through this form.
        </SubText>

        <Form ref={formRef} onSubmit={sendEmail}>
          <Input type="text" name="name" placeholder="Your Name" required />
          <Input type="email" name="email" placeholder="Your Email" required />
          <TextArea name="message" placeholder="Your Message" required />
          <Button type="submit">
            Submit <FaPaperPlane />
          </Button>
        </Form>
        {success && <p style={{ color: "green", marginTop: "10px" }}>Message sent successfully!</p>}
      </FormWrapper>
    </ContactContainer>
  );
};

export default Contact;
