import { useContext } from "react"
import { QuizContext } from "../../context/quiz"

const Welcome = (props) => {
    const [quizState, dispatch] = useContext(QuizContext)

    return(
        <div className="card">
                <h1 className="card__title">Quiz: O quanto você sabe de CxM</h1>
                <button className="card__btn-start" onClick={() => dispatch({type: 'playing'})}> 
                Iniciar
                </button>
        </div>
    )
}

export default Welcome