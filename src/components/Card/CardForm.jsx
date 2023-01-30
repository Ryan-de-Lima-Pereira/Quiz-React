import CardOptions from "./CardOptions"
import CardTitle from "./CardTitle"

function CardForm(){


    return(
        <>  
            <CardTitle>Questão 1</CardTitle>

            <form className="card__form">
                <CardOptions>Nunca</CardOptions>
                <CardOptions>Poucas vezes</CardOptions>
                <CardOptions>Neutro</CardOptions>
                <CardOptions>Com certa frequencia</CardOptions>
                <CardOptions>Sempre</CardOptions>
            </form>
        </>
    )
}

export default CardForm