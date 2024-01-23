// src/components/HistoryPage.js
import React, { useState } from 'react';
import './HistoryPage.css';

const passages = [
  {
    id: 1,
    content: `The Indus Valley Civilization, one of the oldest in the world, existed around 3300–1300 BCE. It was known for its advanced urban planning, architecture, and sophisticated drainage systems. The cities of Mohenjo-Daro and Harappa were major centers of this civilization.`,
    questions: [
      {
        id: 1,
        question: 'What is one of the distinctive features of the Indus Valley Civilization?',
        options: ['Advanced urban planning', 'Nomadic lifestyle', 'Primitive tools', 'No written language'],
        correctAnswer: 'Advanced urban planning',
      },
    
    ],
  },
  {
    id: 2,
    content: `The Maurya Dynasty, founded by Chandragupta Maurya, was one of the largest empires in ancient India. Ashoka, the grandson of Chandragupta, is particularly known for spreading Buddhism and his commitment to non-violence.`,
    questions: [
      {
        id: 1,
        question: 'Who was the founder of the Maurya Dynasty?',
        options: ['Bindusara', 'Ashoka', 'Chandragupta Maurya', 'Chanakya'],
        correctAnswer: 'Chandragupta Maurya',
      },
     
    ],
  },
  {
    id: 3,
    content: `The Mughal Empire, established in the early 16th century, played a crucial role in shaping India's cultural and architectural heritage. The Taj Mahal, built by Emperor Shah Jahan, is a symbol of Mughal architecture.`,
    questions: [
      {
        id: 1,
        question: 'Which Mughal emperor built the Taj Mahal?',
        options: ['Aurangzeb', 'Akbar', 'Shah Jahan', 'Babur'],
        correctAnswer: 'Shah Jahan',
      },
      
    ],
  },
  {
    id: 4,
    content: `The Indian independence movement, led by Mahatma Gandhi, aimed to end British colonial rule. Gandhi's philosophy of non-violent resistance, or satyagraha, played a significant role in the movement.`,
    questions: [
      {
        id: 1,
        question: 'What was Mahatma Gandhi\'s philosophy of resistance?',
        options: ['Jihad', 'Satyagraha', 'Revolution', 'Protest'],
        correctAnswer: 'Satyagraha',
      },
   
    ],
  },
  {
    id: 5,
    content: `The Harappan script, found in the Indus Valley Civilization, remains undeciphered, posing a challenge to historians. The script is written from right to left and contains various symbols.`,
    questions: [
      {
        id: 1,
        question: 'What is a challenge historians face regarding the Indus Valley Civilization?',
        options: ['Lack of archaeological evidence', 'Undeciphered script', 'Unknown rulers', 'No trade routes'],
        correctAnswer: 'Undeciphered script',
      },
   
    ],
  },

];

const HistoryPage = () => {
  const [currentPassage, setCurrentPassage] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleOptionClick = (option) => {
    setUserAnswer(option);
  };

  const handleNextQuestion = () => {
    if (userAnswer === passages[currentPassage].questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setUserAnswer('');
    setCurrentQuestion(currentQuestion + 1);

    if (currentQuestion === passages[currentPassage].questions.length - 1) {
      if (currentPassage === passages.length - 1) {
        setQuizCompleted(true);
      } else {
        setCurrentPassage(currentPassage + 1);
        setCurrentQuestion(0);
      }
    }
  };

  return (
    <div className="history-container">
      <div className="history-content">
        <h1>Main History of India</h1>
        {passages.map((passage, index) => (
          <div key={index} className={`passage ${currentPassage === index ? 'visible' : 'hidden'}`}>
            <p>{passage.content}</p>
          </div>
        ))}
      </div>

      {!quizCompleted ? (
        <div className="quiz-container">
          <h2>History Quiz</h2>
          <p>{passages[currentPassage].questions[currentQuestion].question}</p>
          <div className="options-container">
            {passages[currentPassage].questions[currentQuestion].options.map((option, index) => (
              <div
                key={index}
                className={`option ${userAnswer === option ? 'selected' : ''}`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
          {userAnswer && (
            <button className="next-button" onClick={handleNextQuestion}>
              Next Question
            </button>
          )}
        </div>
      ) : (
        <div className="quiz-results">
          <h2>Quiz Results</h2>
          <p>Your Score: {score}/{passages.reduce((total, passage) => total + passage.questions.length, 0)}</p>
        </div>
      )}
    </div>
  );
};

export default HistoryPage;
