import CardOptions from "./CardOptions"

function CardForm(props){


    return(
        <>  
            <form className="card__form">
                <CardOptions event={props.event}>Nunca</CardOptions>
                <CardOptions event={props.event}>Poucas vezes</CardOptions>
                <CardOptions event={props.event}>Neutro</CardOptions>
                <CardOptions event={props.event}>Com certa frequencia</CardOptions>
                <CardOptions event={props.event}>Sempre</CardOptions>
            </form>
        </>
    )
}

export default CardForm