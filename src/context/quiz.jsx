import { createContext } from "react";
import { useReducer } from "react";
import questions from "../data/question.js"

const STAGES = ['start','playing','end']

const initialStage = {
    gameStage: STAGES[0],
    questions,
    currentQuestion: 0
}

const quizReducer = (state, action) => {

    switch(action.type){
        case 'start':
            return {
                ...state,
                gameStage: STAGES[0]
            };
        case 'playing':
            return {
                ...state,
                gameStage: STAGES[1]
            };
        case 'nextQuestion':
            const nextQuestion =  state.currentQuestion + 1
            return{
                ...state,
                currentQuestion: nextQuestion   
            };
        default:
            return state
    };

}

export const QuizContext = createContext()

export const QuizProvider = ({ children }) => {
    const value = useReducer(quizReducer,initialStage)

    return <QuizContext.Provider value={value}> {children} </QuizContext.Provider>;
}
