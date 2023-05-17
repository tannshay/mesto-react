import PopupWithForm from "./PopupWithForm";
import { useRef } from "react";

function AddPlacePopup({onAddPlace, isOpen, onClose}){
    const inputPlaceNameRef = useRef()
    const inputPlaceLinkRef = useRef()
    function handleSubmit(e){
        e.preventDefault()
        onAddPlace({
            newName: inputPlaceNameRef.current.value,
            newLink: inputPlaceLinkRef.current.value
        })
    }
    return (
      <PopupWithForm
        onSubmit={handleSubmit}
        buttonText="Добавить"
        onClose={onClose}
        name="add-card"
        title="Новое место"
        isOpen={isOpen}
      >
        <fieldset className="popup__input-fieldset">
          <input
            className="popup__text popup__text_type_name"
            name="imgName"
            placeholder="Название"
            minLength="2"
            maxLength="30"
            required
            ref={inputPlaceNameRef}
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
            ref={inputPlaceLinkRef}
          />
          <span className="popup__input-error"></span>
        </fieldset>
      </PopupWithForm>
    );
}

export default AddPlacePopup;