const Quiz = () => {
    const [activeQuestion, setActiveQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState('')
  
    const onClickNext = () => {
        setActiveQuestion((prev) => prev + 1)
        setResult((prev) =>
          selectedAnswer
            ? {
                ...prev,
                score: prev.score + 5,
                correctAnswers: prev.correctAnswers + 1,
              }
            : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
        )
      }
  
    const { questions } = quiz
    const { question, choices } = questions[activeQuestion]
    const onAnswerSelected = (answer) => {
        if (answer === correctAnswer) {
          setSelectedAnswer(true)
          console.log('right')
        } else {
          setSelectedAnswer(false)
          console.log('wrong')
        }
      }
      
      return (
        <div className="quiz-container">
          <h1>Quiz</h1>
          <h2>{question}</h2>
          <ul>
            {choices.map((answer) => (
              <li onClick={() => onAnswerSelected(answer)} key={answer}>
                {answer}
              </li>
            ))}
          </ul>
          <button onClick={onClickNext}>Next</button>
        </div>
      )
  }