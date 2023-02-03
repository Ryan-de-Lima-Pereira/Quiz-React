import { createContext } from "react";
import { useReducer } from "react";
import questions from "../data/question.js"

const STAGES = ['start','playing','end']

const initialStage = {
    gameStage: STAGES[0],
    questions
}

const quizReducer = (state, action) => {

    switch(action.type){
        case 'start':
            return {
                ...initialStage,
                gameStage: STAGES[0]
            }
        case 'playing':
            return {
                ...initialStage,
                gameStage: STAGES[1]
            }
        default:
            return state
    }

}

export const QuizContext = createContext()

export const QuizProvider = ({ children }) => {
    const value = useReducer(quizReducer,initialStage)

    return <QuizContext.Provider value={value}> {children} </QuizContext.Provider>;
}
