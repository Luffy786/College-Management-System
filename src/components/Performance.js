import React from 'react';
import { motion } from 'framer-motion';
import './Performance.css';

const performanceData = [
  { subject: 'Math', grade: 85, status: 'Good' },
  { subject: 'Physics', grade: 90, status: 'Excellent' },
  { subject: 'Chemistry', grade: 78, status: 'Average' },
  { subject: 'Biology', grade: 82, status: 'Good' },
  { subject: 'History', grade: 88, status: 'Good' }
];

function Performance() {
  return (
    <div className="performance-container">
      <h1>Performance Overview</h1>
      <div className="performance-list">
        {performanceData.map((item, index) => (
          <motion.div
            key={index}
            className="performance-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h2 className="subject-title">{item.subject}</h2>
            <div className="grade-container">
              <span className="grade-label">Grade:</span>
              <span className={`grade-value ${item.status.toLowerCase()}`}>{item.grade}%</span>
            </div>
            <p className={`status ${item.status.toLowerCase()}`}>{item.status}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Performance;
