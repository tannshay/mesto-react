import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({card, onCardClick, onCardLike, onCardDelete}){
  const currentUser = useContext(CurrentUserContext)
  const isOwn = currentUser._id === card.owner._id
  const isLiked = card.likes.some((i) => i._id === currentUser._id)
  const cardLikeButtonClassName = `mesto__like_type_heart ${
    isLiked && "mesto__like_type_heart_active"
  }`
  function handleClick() {
    onCardClick(card)
  }
  function handleLikeClick() {
    onCardLike(card)
  }
  function handleDeleteClick() {
    onCardDelete(card)
  }
  return (
    <article className="mesto__element">
      <img className="mesto__img" src={card.link} alt={card.name} onClick={handleClick} />
      {isOwn && (
        <button
          onClick={handleDeleteClick}
          type="button"
          className="mesto__delete"
        ></button>
      )}
      <div className="mesto__rectangle">
        <h2 className="mesto__name">{card.name}</h2>
        <div className="mesto__like">
          <button
            onClick={handleLikeClick}
            type="button"
            className={cardLikeButtonClassName}
          ></button>
          <div className="mesto__like_type_counter">{card.likes.length}</div>
        </div>
      </div>
    </article>
  )
}

export default Card;