import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Common/Navbar';
import QuizResult from './QuizResult';
import image from '../Assets/bbb.png';
import { QuizDataChem } from '../Data/QuizDataChem';

function QuizzChem() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [clickedOption, setClickedOption] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [shuffledQuestions, setShuffledQuestions] = useState([]);

    // Shuffle and select 5 random questions from QuizDataChem
    useEffect(() => {
        const shuffledData = shuffleArray(QuizDataChem).slice(0, 5);
        setShuffledQuestions(shuffledData);
    }, []);

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const changeQuestion = () => {
        if (currentQuestionIndex < 4) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setClickedOption(0);
        } else {
            setShowResult(true);
        }
    };

    const updateScore = () => {
        if (clickedOption === QuizDataChem.findIndex((question) => question === shuffledQuestions[currentQuestionIndex])) {
            setScore(score + 1);
        }
    };

    const resetAll = () => {
        setShowResult(false);
        setCurrentQuestionIndex(0);
        setClickedOption(0);
        setScore(0);
        const shuffledData = shuffleArray(QuizDataChem).slice(0, 5);
        setShuffledQuestions(shuffledData);
    };

    const currentQuestion = shuffledQuestions[currentQuestionIndex];

    return (
        <div>
            <Navbar />
            <div className="container-fluid" style={{ height: '30vh', backgroundImage: `url(${image})` }}></div>
            <div className='container mx-auto text-center shadow-xl' style={{ marginTop: '-100px', backgroundColor: 'white', borderRadius: '20px', backfaceVisibility: '0.2' }}>
                <p className="heading-txt text-center text-6xl py-5 my-5">Quiz APP</p>
                <div className="container">
                    {showResult ? (
                        <QuizResult score={score} totalScore={5} tryAgain={resetAll} />
                    ) : (
                        <>
                            <div className="question text-2xl pb-10 font-semibold">
                                <span id="question-number">{currentQuestionIndex + 1}. </span>
                                <span id="question-txt">{currentQuestion && currentQuestion.question}</span>
                            </div>
                            <div className="container items-center gap-x-20 grid gap-4 md:grid-cols-2 sm:grid-cols-1 sm:text-m md:text-xl font-medium px-10">
                                {currentQuestion && currentQuestion.options.map((option, i) => (
                                    <button
                                        style={{ borderRadius: '10px', padding: '20px 0px 20px 0px' }}
                                        className={`min-w-40 border option-btn ${clickedOption === i + 1 ? "checked" : null}`}
                                        key={i}
                                        onClick={() => {
                                            setClickedOption(i + 1);
                                            updateScore();
                                        }}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                            <button className='text-xl py-2 px-10 bg-orange-400 text-white border-solid rounded-xl shadow-xl sm:my-6 md:my-10 xsm:my-5' type="button" value="Next" id="next-button" onClick={changeQuestion} >Next</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default QuizzChem;
