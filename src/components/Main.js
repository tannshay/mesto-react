import { useCallback, useState } from "react"
import api from "../utils/Api";

function Main({onEditProfileClick, onEditAvatarClick, onAddPlaceClick}){
    let userName, userDescription, userAvatar
    return(
        <main className="content">
            <section className="profile">
                <div className="profile__shape">
                    <img url={userAvatar} alt="аватар" className="profile__avatar" onClick={onEditAvatarClick}/>
                    <div className="profile__change-icon"></div>
                    <div className="profile__info">
                        <div className="profile__author">
                            <h1 className="profile__name">{userName}</h1>
                            <button type="button" className="profile__edit" onClick={onEditProfileClick}></button>
                        </div>
                        <p className="profile__about">{userDescription}</p>
                    </div>
                </div>
                <button type="button" className="profile__addbutton" onClick={onAddPlaceClick}>
                </button>
            </section>
            <section className="mesto">

            </section>
        </main>
    )
}

export default Main;