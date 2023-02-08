import { useContext } from "react"
import { QuizContext } from "../../context/quiz"
import AutoPlayer from "./CardAudio"

const End = () => {
    const [quizState, dispatch] = useContext(QuizContext)

    return(
        <div className="card">
                <h1 className="card__title">Fim do quiz</h1>

                <h3 className="question__index">Você acertou: {quizState.rightQuestions}</h3>
                <AutoPlayer/>
        </div>
    )
}

export default End