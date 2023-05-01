import { useEffect, useState } from "react"
import api from "../utils/Api";
import Card from "./Card";

function Main({onCardClick, onEditProfileClick, onEditAvatarClick, onAddPlaceClick}){
    const [userName, setUserName] = useState()
    const [userDescription, setUserDescription] = useState()
    const [userAvatar, setUserAvatar] = useState()
    const [cards, setCards] = useState([])

    function getInfo() {
      Promise.all([api.getUserInfo(), api.getInitialCards()])
        .then((res) => {
          setUserName(res[0].name);
          setUserDescription(res[0].about);
          setUserAvatar(res[0].avatar);
          setCards(res[1]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    useEffect(getInfo,[])
    const cardElements = cards.map((card) => {
        return(<Card onCardClick={onCardClick} link={card.link} card={card} key={card._id} name={card.name} likes={card.likes}/>)
      })
    function RenderCards(){
        return cardElements
    }
    return (
      <main className="content">
        <section className="profile">
          <div className="profile__shape">
            <img
              src={userAvatar}
              alt="аватар"
              className="profile__avatar"
              onClick={onEditAvatarClick}
            />
            <div className="profile__change-icon"></div>
            <div className="profile__info">
              <div className="profile__author">
                <h1 className="profile__name">{userName}</h1>
                <button
                  type="button"
                  className="profile__edit"
                  onClick={onEditProfileClick}
                ></button>
              </div>
              <p className="profile__about">{userDescription}</p>
            </div>
          </div>
          <button
            type="button"
            className="profile__addbutton"
            onClick={onAddPlaceClick}
          ></button>
        </section>
        <section className="mesto">
          <RenderCards/>
        </section>
      </main>
    );
}

export default Main;