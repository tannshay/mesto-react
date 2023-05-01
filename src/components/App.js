import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { useState } from "react";

function App() {
    function closeAllPopups(){
        setIsEditProfilePopupOpen(false)
        setIsAddPlacePopupOpen(false)
        setIsEditAvatarPopupOpen(false)
        setIsImagePopupOpen(false)
        setSelectedCard({})
    }
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
    function handleEditProfileClick(){
        setIsEditProfilePopupOpen(true)
    }
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
    function handleAddPlaceClick(){
        setIsAddPlacePopupOpen(true)
    }
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
    function handleEditAvatarClick(){
        setIsEditAvatarPopupOpen(true)
    }
    const [isImagePopupOpen,setIsImagePopupOpen] = useState(false)
    const [selectedCard, setSelectedCard] = useState({})
    function handleCardClick(card){
      setSelectedCard(card)
      setIsImagePopupOpen(true)
    }
  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main onCardClick={handleCardClick} onEditProfileClick={handleEditProfileClick} onEditAvatarClick={handleEditAvatarClick} onAddPlaceClick={handleAddPlaceClick}/>
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
        <ImagePopup isOpen={isImagePopupOpen} onClose={closeAllPopups} card={selectedCard}/>
      </div>
    </div>
  );
}

export default App;
