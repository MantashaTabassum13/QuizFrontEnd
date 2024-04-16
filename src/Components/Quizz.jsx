import React, { useState } from 'react'
import { QuizData } from '../Data/QuizData'
import QuizResult from './QuizResult';
function Quizz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [clickedOption, setClickedOption] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const changeQuestion = () => {
        updateScore();
        if (currentQuestion < QuizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setClickedOption(0);
        } else {
            setShowResult(true)
        }
    }
    const updateScore = () => {
        if (clickedOption === QuizData[currentQuestion].answer) {
            setScore(score + 1);
        }
    }
    const resetAll = () => {
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    }
    return (
        <div>
            <div className="container-fluid" style={{ height: '30vh', backgroundImage: `url(${new URL('https://img.freepik.com/free-vector/hand-drawn-question-mark-pattern_23-2149416651.jpg?w=740&t=st=1713277473~exp=1713278073~hmac=c47e02ec4d4a00ef996d8b8761da74eb44cd00835006293e2d12d2dd44443529')})` }}></div>
            <div className='container mx-auto text-center ' style={{marginTop:'-100px', backgroundColor:'white',borderRadius:'20px',backfaceVisibility:'0.2'}}>
                <p className="heading-txt text-center text-6xl py-5 my-5">Quiz APP</p>
                <div className="container">
                    {showResult ? (
                        <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll} />
                    ) : (
                        <>
                            <div className="question  text-2xl pb-10 font-semibold">
                                <span id="question-number">{currentQuestion + 1}. </span>
                                <span id="question-txt">{QuizData[currentQuestion].question}</span>
                            </div>
                            <div className="container items-center  gap-x-20 grid gap-4 grid-cols-2 sm:text-m md:text-xl font-medium">
                                {QuizData[currentQuestion].options.map((option, i) => {
                                    return (
                                        <button style={{borderRadius:'10px',padding: '20px 0px 20px 0px'}} 
                                            // className="option-btn"
                                            className={`min-w-40  border border-gray-950 option-btn ${clickedOption == i + 1 ? "checked" : null
                                                }`}
                                            key={i}
                                            onClick={() => setClickedOption(i + 1)}
                                        >
                                            {option}
                                        </button>
                                    )
                                })}
                            </div>
                            <input className='text-xl my-10' type="button" value="Next" id="next-button" onClick={changeQuestion} />
                        </>)}
                </div>
            </div>
        </div>
    )
}

export default Quizz