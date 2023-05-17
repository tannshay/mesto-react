import {useContext } from "react"
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({cards, onCardDelete, onCardLike,onCardClick, onEditProfileClick, onEditAvatarClick, onAddPlaceClick}){
    const currentUser = useContext(CurrentUserContext)

    const cardElements = cards.map((card) => {
        return(<Card onCardDelete={onCardDelete} onCardLike={onCardLike} onCardClick={onCardClick} card={card} key={card._id}/>)
      })
    return (
      <main className="content">
        <section className="profile">
          <div className="profile__shape">
            <img
              src={currentUser.avatar}
              alt="аватар"
              className="profile__avatar"
            />
            <div className="profile__change-icon" onClick={onEditAvatarClick}></div>
            <div className="profile__info">
              <div className="profile__author">
                <h1 className="profile__name">{currentUser.name}</h1>
                <button
                  type="button"
                  className="profile__edit"
                  onClick={onEditProfileClick}
                ></button>
              </div>
              <p className="profile__about">{currentUser.about}</p>
            </div>
          </div>
          <button
            type="button"
            className="profile__addbutton"
            onClick={onAddPlaceClick}
          ></button>
        </section>
        <section className="mesto">
          {cardElements}
        </section>
      </main>
    );
}

export default Main;