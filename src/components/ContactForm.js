import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ContentContainer } from '../styles/SharedStyles';
import { FaPaperPlane } from 'react-icons/fa';

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

const MessageStatus = styled(motion.div)`
  padding: 1rem;
  border-radius: 6px;
  text-align: center;
  margin-top: 1rem;
  background-color: ${({ theme, status }) => 
    status === 'success' ? 'rgba(72, 187, 120, 0.1)' : 
    status === 'error' ? 'rgba(229, 62, 62, 0.1)' : 'transparent'
  };
  color: ${({ theme, status }) => 
    status === 'success' ? theme.colors.success : 
    status === 'error' ? theme.colors.danger : 'transparent'
  };
  border: 1px solid ${({ theme, status }) => 
    status === 'success' ? theme.colors.success : 
    status === 'error' ? theme.colors.danger : 'transparent'
  };
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setStatus(null);
      }, 5000);
    } catch (error) {
      setStatus('error');
      
      setTimeout(() => {
        setStatus(null);
      }, 5000);
    } finally {
      setLoading(false);
    }
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
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="subject">Subject</Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
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
          
          {status && (
            <MessageStatus
              status={status}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              {status === 'success' ? 'Your message has been sent! I will get back to you soon.' : 
               status === 'error' ? 'There was an error sending your message. Please try again.' : ''}
            </MessageStatus>
          )}
        </FormContainer>
      </ContentContainer>
    </ContactContainer>
  );
};

export default ContactForm; 