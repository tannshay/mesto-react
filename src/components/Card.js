function Card(props){
    function handleClick(){
        props.onCardClick(props.card)
    }
    return(
        <article className="mesto__element">
            <img className="mesto__img" src={props.link} alt={props.name} onClick={handleClick}/>
            <button
              type="button"
              className="mesto__delete"
            ></button>
            <div className="mesto__rectangle">
              <h2 className="mesto__name">{props.name}</h2>
              <div className="mesto__like">
                <button
                  type="button"
                  className="mesto__like_type_heart"
                ></button>
                <div className="mesto__like_type_counter">{props.likes.length}</div>
              </div>
            </div>
          </article>
    )
}

export default Card;