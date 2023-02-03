function CardButton(props) {


    return(
        <button className={props.classSet} onClick={props.event}>{props.children}</button>
    )
}

export default CardButton