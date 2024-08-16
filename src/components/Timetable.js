import React from 'react';
import { motion } from 'framer-motion';
import './Timetable.css';

const timetable = [
  { day: 'Monday', subjects: ['Math - 9:00 AM', 'Physics - 11:00 AM', 'Chemistry - 2:00 PM'] },
  { day: 'Tuesday', subjects: ['Biology - 9:00 AM', 'Math - 11:00 AM', 'History - 2:00 PM'] },
  { day: 'Wednesday', subjects: ['Chemistry - 9:00 AM', 'Physics - 11:00 AM', 'English - 2:00 PM'] },
  { day: 'Thursday', subjects: ['History - 9:00 AM', 'Biology - 11:00 AM', 'Math - 2:00 PM'] },
  { day: 'Friday', subjects: ['English - 9:00 AM', 'Physics - 11:00 AM', 'Chemistry - 2:00 PM'] },
];

function Timetable() {
  return (
    <div className="timetable-container">
      <h1>Weekly Timetable</h1>
      <div className="timetable-grid">
        {timetable.map((day, index) => (
          <motion.div
            key={index}
            className="timetable-day"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h2 className="day-title">{day.day}</h2>
            <ul className="subjects-list">
              {day.subjects.map((subject, i) => (
                <li key={i} className="subject-item">
                  {subject}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Timetable;
