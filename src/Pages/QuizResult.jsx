import React from 'react'

function QuizResult(props) {
  return (
    <>
    <div className='show-score text-3xl'>
        Your Score:{props.score}<br/>
        Total Score:{props.totalScore}
    </div>
    <button id="next-button" className='text-2xl py-5' onClick={props.tryAgain}>Try Again</button>
    </>
  )
}

export default QuizResult