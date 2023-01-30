function CardButton(props) {


    return(
        <button className={props.classSet} onClick={props.Event}>{props.children}</button>
    )
}

export default CardButton