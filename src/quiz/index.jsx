import { useState } from 'react';
import questionsData from './questions';
import './Quiz.css';

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [essayAnswer, setEssayAnswer] = useState('');
    const [isEssayAnswerValid, setIsEssayAnswerValid] = useState(true);

    const questions = questionsData;

    const handleAnswerClick = (selectedOptionIndex) => {
        if (selectedOptionIndex === questions[currentQuestion].correctAnswerIndex) {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setQuizCompleted(true);
        }
    };

    const handleEssayChange = (event) => {
        setEssayAnswer(event.target.value);
    };

    const handleEssaySubmit = () => {
        if (essayAnswer.trim() === '') {
            setIsEssayAnswerValid(false);
            return;
        }
        setIsEssayAnswerValid(true);
        const correctAnswer = questions[currentQuestion].correctAnswer;
        if (essayAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
            setEssayAnswer('');
        } else {
            setQuizCompleted(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setQuizCompleted(false);
        setEssayAnswer('');
        setIsEssayAnswerValid(true);
    };

    return (
        <div className="quiz-container">
            {quizCompleted ? (
                <div>
                    <h2 className="result">Quiz Completed!</h2>
                    <p className="result">Your score: {score} out of {questions.length}</p>
                    <button style={{ marginTop: "10px" }} className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-teal-500 text-white hover:bg-teal-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" onClick={restartQuiz}>Restart Quiz</button>
                </div>
            ) : (
                <div>
                    <h2 className="question">Question {currentQuestion + 1}</h2>
                    {questions[currentQuestion].type === 'essay' ? (
                        <div>
                            <p className="question">{questions[currentQuestion].question}</p>
                            <input
                                type="text"
                                value={essayAnswer}
                                onChange={handleEssayChange}
                                placeholder={questions[currentQuestion].placeholder}
                                className={`essay-input ${!isEssayAnswerValid ? 'invalid' : ''}`}
                            />
                            <div className="submit-container">
                                <button style={{ marginTop: "10px" }} className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-teal-500 text-white hover:bg-teal-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" onClick={handleEssaySubmit}>Submit</button>
                                {!isEssayAnswerValid && <p className="error-message">Please enter your answer</p>}
                            </div>
                        </div>
                    ) : (
                        <div>
                            <p className="question">{questions[currentQuestion].question}</p>
                            <ul className="options">
                                {questions[currentQuestion].options.map((option, index) => (
                                    <li
                                        key={index}
                                        className={`option ${index === questions[currentQuestion].correctAnswerIndex ? 'correct' : ''}`}
                                        onClick={() => handleAnswerClick(index)}
                                    >
                                        {option}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Quiz;
