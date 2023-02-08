import { createContext } from "react";
import { useReducer } from "react";
import questions from "../data/question.js"
import MusicEasy from "../sound/MusicEasy.mp3"
import MusicMedium from "../sound/MusicMedium.mp3"
import MusicHard from "../sound/MusicHard.mp3"

const STAGES = ['start','playing','end']
const difficultQuestions = ['none', 'easy', 'medium', 'hard']


const initialStage = {
    gameStage: STAGES[0],
    questions,
    currentQuestion: 0,
    difficult: difficultQuestions[0],
    currentMusic: MusicEasy,
    rightQuestions: 0
}

const verifyDifficult = (questionIndex) =>{
    if(questionIndex <= 5){
        return difficultQuestions[1]
    }else if (questionIndex <= 10){
        return difficultQuestions[2]
    }else if(questionIndex <= 15){
        return difficultQuestions[3]
    }else
        return difficultQuestions[0]
}

const verifyMusic = (difficult) => {
    switch(difficult){
        case 'easy':
            return MusicEasy
        case 'medium':
            return MusicMedium
        case 'hard':
            return MusicHard
    }
}

const quizReducer = (state, action) => {

    switch(action.type){
        case 'start':
            return {
                ...state,
                gameStage: STAGES[0],
                difficult: difficultQuestions[0]
            };
        case 'playing':
            return {
                ...state,
                gameStage: STAGES[1],
                difficult: difficultQuestions[1]
            };
        case 'end':
            return {
                ...state,
                gameStage: STAGES[2],
                currentQuestion: state.questions.length - 1,
                difficult: difficultQuestions[0]
            };
        case 'nextQuestion':
            const nextQuestion =  state.currentQuestion + 1
            const actualDifficult = verifyDifficult(nextQuestion+1)
            const actualMusic = verifyMusic(actualDifficult)
            return{
                ...state,
                currentQuestion: nextQuestion,
                difficult: actualDifficult,
                currentMusic: actualMusic
            };
        case 'counterRightQuestions':
            const right = state.rightQuestions + 1
            return{
                ...state,
                rightQuestions: right
            }
        default:
            return state
    };

}

export const QuizContext = createContext()

export const QuizProvider = ({ children }) => {
    const value = useReducer(quizReducer,initialStage)

    return <QuizContext.Provider value={value}> {children} </QuizContext.Provider>;
}
