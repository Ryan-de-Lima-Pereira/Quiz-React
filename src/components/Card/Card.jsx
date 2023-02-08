import { useContext, useEffect } from "react"
import { QuizContext } from "../../context/quiz"
import End from "./End";
import QuizCard from "./QuizCard"
import Welcome from "./Welcome";

function Card(){
    const [quizState, dispatch] = useContext(QuizContext);

    if(quizState.gameStage === 'start'){
        return (<Welcome/>)

    }else if(quizState.gameStage === 'playing'){
        return(<QuizCard/>) 

    }else if(quizState.gameStage === 'end')
        return(<End/>)
    return (
        <h1>Deu erro chefia</h1>
    )
    
    
}

export default Card