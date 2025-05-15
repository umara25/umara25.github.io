import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ContentContainer } from '../styles/SharedStyles';
import { FaPaperPlane } from 'react-icons/fa';

const FORM_ENDPOINT = "https://formsubmit.co/umarahmer1@gmail.com";

const ContactContainer = styled.section`
  padding: 3rem 0 5rem;
`;

const FormContainer = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.foreground};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  padding: 2.5rem;
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
`;

const FormHeading = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.heading};
  text-align: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 60px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.accent};
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.95rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.heading};
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 3px rgba(244, 128, 36, 0.2);
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem 1rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 3px rgba(244, 128, 36, 0.2);
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.accent};
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  box-shadow: ${({ theme }) => theme.shadows.small};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.accentHover};
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
  
  &:active {
    transform: translateY(-2px);
  }
  
  &:disabled {
    background-color: ${({ theme }) => theme.colors.borderColor};
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  
  return (
    <ContactContainer>
      <ContentContainer>
        <FormContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FormHeading>Get In Touch</FormHeading>
          <Form 
            ref={form} 
            onSubmit={handleSubmit} 
            id="contact-form"
            action={FORM_ENDPOINT}
            method="POST"
          >
            <input type="hidden" name="_next" value="https://umara25.github.io/#/contact" />
            <input type="hidden" name="_subject" value="New Contact Form Submission" />
            <input type="hidden" name="_captcha" value="false" />
            
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="subject">Subject</Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                name="message"
                required
              />
            </FormGroup>
            <SubmitButton
              type="submit"
              disabled={loading}
              whileTap={{ scale: 0.95 }}
            >
              {loading ? 'Sending...' : (
                <>
                  Send Message <FaPaperPlane />
                </>
              )}
            </SubmitButton>
          </Form>
        </FormContainer>
      </ContentContainer>
    </ContactContainer>
  );
};

export default ContactForm; 