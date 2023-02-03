// Componente pai do Card
import { useState } from "react"
import CardForm from "./CardForm"
import CardNav from "./CardNav"
import { useContext } from "react"
import { QuizContext } from "../../context/quiz"

function QuizCard(){
    const [quizState, dispatch] = useContext(QuizContext)

    return (
        <div className="card__quiz">
            <h1 className="card__title">{quizState.questions[0].title}</h1>
            <CardForm/>
            <h3 className="question__index">Questão 1 de {quizState.questions.length}</h3>
            <CardNav/>
        </div>
    )
}

export default QuizCard

