// Componente pai do Card
import CardForm from "./CardForm"
import { useContext } from "react"
import { QuizContext } from "../../context/quiz"

function QuizCard(){
    const [quizState, dispatch] = useContext(QuizContext)
    const currentQuestion = quizState.questions[quizState.currentQuestion]

    return (
        <div className="card__quiz">
            <h1 className="card__title">{currentQuestion.title}</h1>
            <CardForm options={currentQuestion.options} answer={currentQuestion.answer}/>
            <h3 className="question__index">Questão {quizState.currentQuestion + 1} de {quizState.questions.length}</h3>
        </div>
    )
}

export default QuizCard

