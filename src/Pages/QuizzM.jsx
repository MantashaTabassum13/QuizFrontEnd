import React, { useState } from 'react'
import { QuizDataM } from '../Data/QuizDataM'
import QuizResult from './QuizResult';
import image from '../Assets/bbb.png'
function QuizzM() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [clickedOption, setClickedOption] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const changeQuestion = () => {
        updateScore();
        if (currentQuestion < QuizDataM.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setClickedOption(0);
        } else {
            setShowResult(true)
        }
    }
    const updateScore = () => {
        if (clickedOption === QuizDataM[currentQuestion].answer) {
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
            <div className="container-fluid" style={{ height: '30vh', backgroundImage: `url(${image})` }}></div>
            <div className='container mx-auto text-center  shadow-xl ' style={{marginTop:'-100px', backgroundColor:'white',borderRadius:'20px',backfaceVisibility:'0.2'}}>
                <p className="heading-txt text-center text-6xl py-5 my-5">Quiz APP</p>
                <div className="container">
                    {showResult ? (
                        <QuizResult score={score} totalScore={QuizDataM.length} tryAgain={resetAll} />
                    ) : (
                        <>
                            <div className="question  text-2xl pb-10 font-semibold">
                                <span id="question-number">{currentQuestion + 1}. </span>
                                <span id="question-txt">{QuizDataM[currentQuestion].question}</span>
                            </div>
                            <div className="container items-center  gap-x-20 grid gap-4 md:grid-cols-2 sm:grid-cols-1 sm:text-m md:text-xl font-medium px-10">
                                {QuizDataM[currentQuestion].options.map((option, i) => {
                                    return (
                                        <button style={{borderRadius:'10px',padding: '20px 0px 20px 0px'}} 
                                            // className="option-btn"
                                            className={`min-w-40  border  option-btn ${clickedOption == i + 1 ? "checked" : null
                                                }`}
                                            key={i}
                                            onClick={() => setClickedOption(i + 1)}
                                        >
                                            {option}
                                        </button>
                                    )
                                })}
                            </div>
                            <button className='text-xl py-2 px-10 bg-orange-400 text-white border-solid  rounded-xl shadow-xl sm:my-6 md:my-10 xsm:my-5' type="button" value="Next" id="next-button" onClick={changeQuestion} >Next</button>
                        </>)}
                </div>
            </div>
        </div>
    )
}

export default QuizzM