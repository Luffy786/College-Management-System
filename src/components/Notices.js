import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const NoticeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f7f8fc;
  min-height: 100vh;
`;

const NoticeCard = styled(motion.div)`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  padding: 20px;
  width: 80%;
  max-width: 600px;
  text-align: left;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #333;
`;

const Date = styled.p`
  font-size: 0.9rem;
  color: #999;
  margin-bottom: 10px;
`;

const Content = styled.p`
  font-size: 1rem;
  color: #666;
`;

const NoticePage = () => {
  const notices = [
    {
      id: 1,
      title: "New Semester Start Date",
      date: "August 10, 2024",
      content: "The new semester will start on September 1, 2024. Please ensure you have completed your registrations by August 25, 2024.",
    },
    {
      id: 2,
      title: "Library Closure",
      date: "August 9, 2024",
      content: "The library will be closed for maintenance from August 15 to August 20, 2024.",
    },
    // Add more notices here
  ];

  return (
    <NoticeContainer>
      {notices.map((notice) => (
        <NoticeCard
          key={notice.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: notice.id * 0.2 }}
        >
          <Title>{notice.title}</Title>
          <Date>{notice.date}</Date>
          <Content>{notice.content}</Content>
        </NoticeCard>
      ))}
    </NoticeContainer>
  );
};

export default NoticePage;
