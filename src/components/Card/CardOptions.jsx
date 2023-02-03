function CardOptions(props) {
    return(
        <button className="card__option" onClick={props.event}>
            {props.children}
        </button>
    )
}

export default CardOptions