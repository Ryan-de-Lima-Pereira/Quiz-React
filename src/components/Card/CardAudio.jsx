import { useState, useEffect, useContext } from "react";
import { QuizContext } from "../../context/quiz";

const AutoPlayer = () =>{
    const [quizState, dispatch] = useContext(QuizContext)
    const [audio] = useState(new Audio(quizState.currentMusic))

    useEffect(() => {
        switch(quizState.difficult){
            case 'none':
                audio.pause()
                console.log('none no effect')
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
                audio.play()
                audio.volume = 0.2
                break;
            default:
                audio.pause()
                console.log('default no effect')
                break;
        }
    }, [quizState.currentMusic])

    useEffect(() => {
        audio.addEventListener('ended', () =>{
            audio.play()
        })
        return function cleaup(){
            audio.removeEventListener('ended', () =>{
                audio.play()
            })
        }
    })



    return(
        <>
        </>
    )
}

export default AutoPlayer