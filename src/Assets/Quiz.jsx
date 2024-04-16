const Quiz = () => {
    const [activeQuestion, setActiveQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [result, setResult] = useState({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
    })
    return <div>
        <h1>Quiz</h1>
        <h2>{questions[activeQuestion].question}</h2>
    </div>
}

export default Quiz