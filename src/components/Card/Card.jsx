import { useContext } from "react"
import { QuizContext } from "../../context/quiz"
import QuizCard from "./QuizCard"
import Welcome from "./Welcome";

function Card(){
    const [quizState, dispatch] = useContext(QuizContext);

    if(quizState.gameStage === 'start'){
        return (<Welcome/>)

    }else if(quizState.gameStage === 'playing'){
        return(<QuizCard/>)
    }
    return (
        <h1>Deu erro chefia</h1>
    )
    
    
}

export default Card