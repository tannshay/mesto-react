import PopupWithForm from "./PopupWithForm"
import { useRef } from "react";

function EditAvatarPopup({onUpdateAvatar,onClose, isOpen}){
    const inputRef = useRef()
    function handleSubmit(e) {
        e.preventDefault()
        onUpdateAvatar({
            avatar: inputRef.current.value
        })
    }
    return(
        <PopupWithForm onSubmit={handleSubmit} buttonText='Сохранить' name="change-avatar" title="Обновить аватар" isOpen={isOpen}>
          <fieldset className="popup__input-fieldset">
            <input
              className="popup__text popup__text_type_about"
              name="avaLink"
              placeholder="Ссылка на картинку"
              type="url"
              required
              ref={inputRef}
            />
            <span className="popup__input-error"></span>
          </fieldset>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;