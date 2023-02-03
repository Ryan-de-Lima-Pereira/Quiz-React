import CardButton from "./CardButton"
import { useContext } from "react"
import { QuizContext } from "../../context/quiz"

function CardNav() {
    const [quizState, dispatch] = useContext(QuizContext)

    return(
        <div className="card__nav-btns">
            <button onClick={() => dispatch({type: 'start'})}>Voltar ao inicio</button>
            <button>Direita</button>
        </div>
    )
}

export default CardNav







