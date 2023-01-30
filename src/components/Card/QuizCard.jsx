// Componente pai do Card
import CardForm from "./CardForm"
import CardNav from "./CardNav"

function QuizCard(){


    return (
        <div className="card__quiz">
            <CardForm/>
            <CardNav/>
        </div>
    )
}

export default QuizCard

