import CardButton from "./CardButton"
import CardTitle from "./CardTitle"
import { useState } from "react"
import QuizCard from "./QuizCard"

function Card(){
    const [isStart, setStart] = useState(false)
    const clickEvent = () => {
        return setStart(true)
    }

    if(!isStart){
        return (
        
            <div className="card">
                <CardTitle>Quiz: Quem eu sou no CxM</CardTitle>
                <CardButton classSet="card__btn-start" Event={clickEvent}> 
                Iniciar
                </CardButton>
            </div>
        )
    }
    return(
        <QuizCard/>
    )
    
}

export default Card