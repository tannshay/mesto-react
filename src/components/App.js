import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import PopupWithImage from "./PopupWithImage";
import { useState } from "react";

function App() {
    function closeAllPopups(){
        setIsEditProfilePopupOpen(false)
        setIsAddPlacePopupOpen(false)
        setIsEditAvatarPopupOpen(false)
    }
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    function handleEditProfileClick(){
        setIsEditProfilePopupOpen(true)
    }
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    function handleAddPlaceClick(){
        setIsAddPlacePopupOpen(true)
    }
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    function handleEditAvatarClick(){
        setIsEditAvatarPopupOpen(true)
    }
  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main onEditProfileClick={handleEditProfileClick} onEditAvatarClick={handleEditAvatarClick} onAddPlaceClick={handleAddPlaceClick}/>
        <Footer />
        <PopupWithForm onClose={closeAllPopups} name="edit_profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen}>
          <fieldset className="popup__input-fieldset">
            <input
              className="popup__text popup__text_type_name"
              name="name"
              value="Жак-Ив Кусто"
              minLength="2"
              maxLength="40"
              placeholder="Имя"
              required
            />
            <span className="popup__input-error"></span>
          </fieldset>
          <fieldset className="popup__input-fieldset">
            <input
              className="popup__text popup__text_type_about"
              name="about"
              value="Исследователь океана"
              minLength="2"
              maxLength="200"
              placeholder="О себе"
              required
            />
            <span className="popup__input-error"></span>
          </fieldset>
        </PopupWithForm>
        <PopupWithForm onClose={closeAllPopups} name="add-card" title="Новое место" isOpen={isAddPlacePopupOpen}>
          <fieldset className="popup__input-fieldset">
            <input
              className="popup__text popup__text_type_name"
              name="imgName"
              placeholder="Название"
              minLength="
                                    2"
              maxLength="30"
              required
            />
            <span className="popup__input-error"></span>
          </fieldset>
          <fieldset className="popup__input-fieldset">
            <input
              className="popup__text popup__text_type_about"
              name="imgLink"
              placeholder="Ссылка на картинку"
              type="url"
              required
            />
            <span className="popup__input-error"></span>
          </fieldset>
        </PopupWithForm>
        <PopupWithForm onClose={closeAllPopups} name="delete" title="Вы уверены?"></PopupWithForm>
        <PopupWithForm name="change-avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen}>
          <fieldset className="popup__input-fieldset">
            <input
              className="popup__text popup__text_type_about"
              name="avaLink"
              placeholder="Ссылка на картинку"
              type="url"
              required
            />
            <span className="popup__input-error"></span>
          </fieldset>
        </PopupWithForm>
        <PopupWithImage />
      </div>
      <template className="mesto__element-template">
        <article className="mesto__element">
          <img className="mesto__img" />
          <button type="button" className="mesto__delete"></button>
          <div className="mesto__rectangle">
            <h2 className="mesto__name"></h2>
            <div className="mesto__like">
              <button type="button" className="mesto__like_type_heart"></button>
              <div className="mesto__like_type_counter"></div>
            </div>
          </div>
        </article>
      </template>
    </div>
  );
}

export default App;
