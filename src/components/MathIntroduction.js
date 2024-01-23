// src/components/MathIntroduction.js
import React, { useState } from 'react';
import './MathIntroduction.css';

const MathIntroduction = () => {
  const [result, setResult] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [question, setQuestion] = useState(generateRandomQuestion());

  function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }

  function generateRandomQuestion() {
    const num1 = generateRandomNumber();
    const num2 = generateRandomNumber();
    const operation = Math.random() < 0.5 ? '+' : '-'; // 50% chance of addition, 50% subtraction

    return {
      num1,
      num2,
      operation,
    };
  }

  const handleInputChange = (event) => {
    setUserAnswer(event.target.value);
  };

  const checkAnswer = () => {
    const userNum = parseInt(userAnswer);
    if (!isNaN(userNum)) {
      const { num1, num2, operation } = question;
      let correctAnswer;

      switch (operation) {
        case '+':
          correctAnswer = num1 + num2;
          break;
        case '-':
          correctAnswer = num1 - num2;
          break;
        // Add more cases for other operations as needed
        default:
          correctAnswer = num1 + num2; // Default to addition if the operation is not recognized
          break;
      }

      if (userNum === correctAnswer) {
        setResult('Correct! Well done!');
      } else {
        setResult('Incorrect. Try again!');
      }

      setQuestion(generateRandomQuestion());
      setUserAnswer('');
    } else {
      setResult('Please enter a valid number.');
    }
  };

  return (
    <div className="container">
      <h1>Introduction to Mathematics</h1>
      <p>
        Mathematics is the study of numbers, quantity, space, patterns, and structures. It is an
        essential tool for understanding the world around us and solving complex problems.
      </p>
      <p>
        In this introductory course, we will cover fundamental concepts such as arithmetic,
        algebra, geometry, and more. Whether you are a beginner or looking to refresh your
        mathematical knowledge, join us on this journey of exploration and discovery.
      </p>

      <h2>Test Your Knowledge</h2>
      <p>
        What is the result of the {question.num1} {question.operation} {question.num2}?
      </p>
      <input
        type="text"
        value={userAnswer}
        onChange={handleInputChange}
        placeholder="Enter your answer"
      />
      <button onClick={checkAnswer}>Check Answer</button>
      {result && <p className={result.includes('Correct') ? 'result' : 'error'}>{result}</p>}
    </div>
  );
};

export default MathIntroduction;
