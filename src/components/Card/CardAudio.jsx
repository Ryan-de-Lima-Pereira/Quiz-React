import { useState, useEffect, useContext } from "react";
import { QuizContext } from "../../context/quiz";

const AutoPlayer = () =>{
    const [quizState, dispatch] = useContext(QuizContext)
    const [audio] = useState(new Audio(quizState.currentMusic))

    useEffect(() => {
        switch(quizState.difficult){
            case 'none':
                audio.pause()
                break;
            case 'easy':
                audio.src = quizState.currentMusic
                audio.play()
                audio.volume = 0.1
                break;
            case 'medium':
                audio.src = quizState.currentMusic
                audio.play()
                audio.volume = 0.1
                break;
            case 'hard':
                audio.src = quizState.currentMusic
                audio.volume = 0.1
                break;
            default:
                audio.pause()
                break;
        }
    }, [quizState.currentMusic])


    return(
        <>
        </>
    )
}

export default AutoPlayer