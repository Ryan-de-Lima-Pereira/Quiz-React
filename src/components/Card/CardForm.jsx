import { useContext, useEffect, useState } from "react"
import { QuizContext } from "../../context/quiz"
import nextArrow from "../../assets/nextArrow.svg"

function CardForm(props){
    const [quizState, dispatch] = useContext(QuizContext)
    const [disabledState, setDisabled] = useState(false)
    
    const options = props.options
    const answer = props.answer
    let optionClass = 'card__option'
    let nextBtnClass = disabledState ? 'card__nav-btn' : 'card__nav-btn btn-hidden'

    const optionHandle = (event) => {
        event.preventDefault()
        if(event.target.value === answer){
            event.target.className = optionClass + ' card__option-sucess'
            dispatch({type: 'counterRightQuestions'})
        }else{
            event.target.className = optionClass + ' card__option-error'
        }
        setDisabled(true)
    }

    const changeQuestionHandle = () => {

        if(quizState.currentQuestion + 1 < quizState.questions.length){
            dispatch({type: 'nextQuestion'})
            const sucess = document.querySelector('.card__option-sucess')
            const error = document.querySelector('.card__option-error')
            
            if (error == null){
                sucess.className = optionClass
            }else{
                error.className = optionClass
            }   
            setDisabled(false)
        }else{
            dispatch({type: 'end'})
        }
    }

    return(
        <>  
            <form className="card__form">
                <button className={optionClass} value={options[0]} onClick={optionHandle} disabled={disabledState}>{options[0]}</button>

                <button className={optionClass} value={options[1]} onClick={optionHandle} disabled={disabledState}>{options[1]}</button>

                <button className={optionClass} value={options[2]} onClick={optionHandle} disabled={disabledState}>{options[2]}</button>

                <button className={optionClass} value={options[3]} onClick={optionHandle} disabled={disabledState}>{options[3]}</button>

                <button className={optionClass} value={options[4]} onClick={optionHandle} disabled={disabledState}>{options[4]}</button>
            </form>

            <div className="card__nav-btns">               

                <button className={nextBtnClass} onClick={changeQuestionHandle}>

                    Proxima pergunta
                    <img src={nextArrow}></img>

                </button>
            </div>

        </>
    )
}


export default CardForm

/* <button onClick={() => dispatch({type: 'start'})}
                className="card__nav-btn">
                    <img src={backArrow}></img>
                    Voltar ao inicio
                </button> */