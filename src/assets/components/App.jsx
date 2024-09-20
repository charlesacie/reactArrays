import React, { useState } from 'react';
import Learner from './Learner';
import './App.css';
const App = () => {
  const [learnerData, setLearnerData] = useState({
    learners: [
      {
        name: 'Jordan',
        bio: 'Perscholas instructor...',
        scores: [
          { date: '2018-02-08', score: 77 },
          { date: '2018-04-22', score: 92 },
          { date: '2018-09-15', score: 68 }
        ]
      },
      {
        name: 'Madam President Javay',
        bio: 'Class President...',
        scores: [
          { date: '2018-12-14', score: 88 },
          { date: '2019-01-09', score: 79 },
          { date: '2019-02-23', score: 91 },
          { date: '2019-03-01', score: 95 }
        ]
      },
      {
        name: 'Frantzy',
        bio: 'Class mate...',
        scores: [
          { date: '2018-10-11', score: 62 },
          { date: '2018-11-24', score: 74 },
          { date: '2018-12-19', score: 85 }
        ]
      }
    ]
  });

  return (
    <div className="App">
      <h1>React Array's from tha kid</h1>
      {learnerData.learners.map((learner, index) => (
        <Learner key={index} learner={learner} />
      ))}
    </div>
  );
};

export default App;
