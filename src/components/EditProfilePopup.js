import PopupWithForm from "./PopupWithForm";
import { useState } from "react";
import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({onUpdateUser, isOpen, onClose}){
    function handleSubmit(e) {
      e.preventDefault()
      onUpdateUser({
        name,
        about: description,
      })
    }
    const currentUser = React.useContext(CurrentUserContext)
    React.useEffect(() => {
        setName(currentUser.name)
        setDescription(currentUser.about)
      }, [currentUser, isOpen])
    const [name,setName] = useState('')
    const [description,setDescription] = useState('')
    function handleChangeName(e) {
      setName(e.target.value)
    }
    function handleChangeDescription(e) {
      setDescription(e.target.value);
    }
    return (
      <PopupWithForm
        onSubmit={handleSubmit}
        buttonText="Сохранить"
        onClose={onClose}
        name="edit_profile"
        title="Редактировать профиль"
        isOpen={isOpen}
      >
        <fieldset className="popup__input-fieldset">
          <input
            className="popup__text popup__text_type_name"
            name="name"
            minLength="2"
            maxLength="40"
            placeholder="Имя"
            required
            onChange={handleChangeName}
            value={name || ''}
          />
          <span className="popup__input-error"></span>
        </fieldset>
        <fieldset className="popup__input-fieldset">
          <input
            className="popup__text popup__text_type_about"
            name="about"
            minLength="2"
            maxLength="200"
            placeholder="О себе"
            required
            onChange={handleChangeDescription}
            value={description || ''}
          />
          <span className="popup__input-error"></span>
        </fieldset>
      </PopupWithForm>
    );
}

export default EditProfilePopup;