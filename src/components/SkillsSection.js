import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ContentContainer, Heading } from '../styles/SharedStyles';

const SkillsContainer = styled.section`
  padding: 5rem 0;
`;

const SectionHeading = styled(Heading)`
  text-align: center;
  margin-bottom: 3rem;
`;

const SkillCategoriesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const SkillCategory = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.foreground};
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.heading};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  padding-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.accent};
`;

const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const Skill = styled(motion.li)`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    color: white;
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

const SkillsSection = () => {
  const skills = {
    "Languages": [
      "JavaScript", "TypeScript", "Python", "Java", "C++", "C", "C#", "Haskell", "SQL", "HTML/CSS", "R", "PHP"
    ],
    "Frameworks": [
      "React", "Node.js", "Express", "Angular", "Django", "Vue.js", ".NET Core", "Spring Boot"
    ],
    "Developer Tools": [
      "Git", "GitHub", "VS Code", "Docker", "Kubernetes", "Terraform", "Jenkins", "PyCharm", "IntelliJ"
    ],
    "Databases": [
      "PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "NoSQL"
    ],
    "Libraries": [
      "pandas", "NumPy", "Matplotlib", "TensorFlow", "scikit-learn", "OpenCV"
    ]
  };

  return (
    <SkillsContainer>
      <ContentContainer>
        <SectionHeading>Skills & Technologies</SectionHeading>
        <SkillCategoriesWrapper>
          {Object.entries(skills).map(([category, skillList], categoryIndex) => (
            <SkillCategory 
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <CategoryTitle>{category}</CategoryTitle>
              <SkillsList
                as={motion.ul}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {skillList.map((skill, skillIndex) => (
                  <Skill 
                    key={skillIndex}
                    variants={itemVariants}
                  >
                    {skill}
                  </Skill>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillCategoriesWrapper>
      </ContentContainer>
    </SkillsContainer>
  );
};

export default SkillsSection; 