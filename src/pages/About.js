import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pageVariants, ContentContainer, Heading, Paragraph } from '../styles/SharedStyles';
import { FaGraduationCap, FaLaptopCode } from 'react-icons/fa';

const AboutPage = styled(motion.div)`
  padding: 5rem 0;
`;

const AboutSection = styled.section`
  margin-bottom: 4rem;
`;

const AboutHeader = styled.div`
  margin-bottom: 3rem;
  text-align: center;
`;

const SubHeading = styled.h3`
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.heading};
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  
  svg {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const TimelineContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const TimelineItem = styled.div`
  position: relative;
  padding-left: 2rem;
  padding-bottom: 2.5rem;
  border-left: 2px solid ${({ theme }) => theme.colors.borderColor};
  
  &:last-child {
    border-left: none;
    padding-bottom: 0;
  }
  
  &::before {
    content: '';
    position: absolute;
    left: -8px;
    top: 0;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

const TimelineDates = styled.div`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 0.75rem;
`;

const TimelineTitle = styled.h4`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.heading};
`;

const TimelineSubtitle = styled.h5`
  font-size: 1rem;
  font-weight: 500;
  font-style: italic;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const TimelineDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.75rem;
  line-height: 1.6;
`;

const AboutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.foreground};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;

const EducationItem = styled(TimelineItem)`
  display: flex;
  flex-direction: column;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    align-items: flex-start;
    gap: 1.5rem;
  }
`;

const EducationContent = styled.div`
  flex: 1;
`;

const SchoolLogo = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin-bottom: 1rem;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: 0;
    margin-top: 0.5rem;
  }
`;

const About = () => {
  const education = [
    {
      degree: "Bachelor of Applied Science in Computer Science",
      school: "McMaster University",
      location: "Hamilton, ON",
      period: "2024 - 2028",
      description: "Currently pursuing a Computer Science degree with a focus on software engineering and machine learning.",
      logo: process.env.PUBLIC_URL + "/images/mcmaster.png"
    }
  ];
  
  const experience = [
    {
      title: "Team Member",
      company: "Google Developer Student Clubs",
      location: "Hamilton, ON",
      period: "2024 - present",
      description: [
        "Collaborating with the GDSC team to organize conferences and workshops such as Google DevFest, hosting sessions for 100+ attendees, focusing on Google technologies and other emerging technologies.",
        "Assisting in the planning and execution of the GDSC Hackathon, guiding 250+ participants in project development and pitching.",
        "Engaging with external experts and industry professionals to deliver impactful sessions for students."
      ]
    },
    {
      title: "Programming Instructor",
      company: "Code Club Canada",
      location: "Toronto, ON",
      period: "2023 - 2024",
      description: [
        "Taught Python programming to 50+ students, focusing on basic syntax, data structures, and algorithmic thinking.",
        "Designed and delivered interactive coding exercises, leading to 90% of students successfully completing hands-on projects.",
        "Provided mentorship and guidance, helping students troubleshoot and debug their code in real-time."
      ]
    },
    {
      title: "Team Lead",
      company: "3571 Mustang Robotics",
      location: "Milton, ON",
      period: "2022 - 2024",
      description: [
        "Led the Milton District High School FRC Robotics team, teaching new members core robotics and programming skills.",
        "Designed and delivered hands-on coding exercises, enabling students to build interactive projects.",
        "Mentored students by providing real-time guidance for troubleshooting and debugging code."
      ]
    }
  ];

  return (
    <AboutPage
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <ContentContainer>
        <AboutHeader>
          <Heading>About Me</Heading>
          <AboutContent>
            <Paragraph>
              I am a Computer Science student at McMaster University with a deep passion for building impactful solutions. My experience spans full-stack web development, cloud infrastructure, and CI/CD automation, and I enjoy exploring cutting-edge frameworks to continuously sharpen my skills.
            </Paragraph>
            <Paragraph>
              Proficient in Python, JavaScript, and C++, I thrive on solving complex problems and bringing innovative ideas to life. Whether it's architecting scalable cloud solutions or optimizing deployment pipelines, I embrace every opportunity to learn and grow in the ever-evolving tech landscape.
            </Paragraph>
          </AboutContent>
        </AboutHeader>

        <AboutSection>
          <SubHeading>
            <FaGraduationCap /> Education
          </SubHeading>
          <TimelineContainer>
            {education.map((item, index) => (
              <EducationItem key={index}>
                <SchoolLogo src={item.logo} alt={`${item.school} logo`} />
                <EducationContent>
                  <TimelineDates>{item.period}</TimelineDates>
                  <TimelineTitle>{item.degree}</TimelineTitle>
                  <TimelineSubtitle>{item.school}, {item.location}</TimelineSubtitle>
                  <TimelineDescription>{item.description}</TimelineDescription>
                </EducationContent>
              </EducationItem>
            ))}
          </TimelineContainer>
        </AboutSection>

        <AboutSection>
          <SubHeading>
            <FaLaptopCode /> Work Experience
          </SubHeading>
          <TimelineContainer>
            {experience.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineDates>{item.period}</TimelineDates>
                <TimelineTitle>{item.title}</TimelineTitle>
                <TimelineSubtitle>{item.company}, {item.location}</TimelineSubtitle>
                {Array.isArray(item.description) ? (
                  item.description.map((desc, descIndex) => (
                    <TimelineDescription key={descIndex}>{desc}</TimelineDescription>
                  ))
                ) : (
                  <TimelineDescription>{item.description}</TimelineDescription>
                )}
              </TimelineItem>
            ))}
          </TimelineContainer>
        </AboutSection>
      </ContentContainer>
    </AboutPage>
  );
};

export default About;