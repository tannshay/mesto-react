import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props){
  const currentUser = useContext(CurrentUserContext)
  const isOwn = currentUser._id === props.card.owner._id
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = ( 
    `mesto__like_type_heart ${isLiked && 'mesto__like_type_heart_active'}` 
  )
    function handleClick(){
        props.onCardClick(props.card)
    }
    function handleLikeClick(){
      props.onCardLike(props.card)
    }
    function handleDeleteClick(){
      props.onCardDelete(props.card)
    }
    return(
        <article className="mesto__element">
            <img className="mesto__img" src={props.link} alt={props.name} onClick={handleClick}/>
            {isOwn &&  <button
              onClick={handleDeleteClick}
              type="button"
              className="mesto__delete"
            ></button>}
            <div className="mesto__rectangle">
              <h2 className="mesto__name">{props.name}</h2>
              <div className="mesto__like">
                <button
                  onClick={handleLikeClick}
                  type="button"
                  className={cardLikeButtonClassName}
                ></button>
                <div className="mesto__like_type_counter">{props.likes.length}</div>
              </div>
            </div>
          </article>
    )
}

export default Card;