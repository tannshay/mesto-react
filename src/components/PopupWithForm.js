import { Children } from "react";

function PopupWithForm({name, title, children, isOpen, onClose, buttonText}){
    return (
      <section className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
        <div className="popup__container">
          <h2 className="popup__title">{title}</h2>
          <form
            name={name}
            action="#"
            className="popup__form"
            noValidate
          >
            {children}
            <button type="submit" className="popup__save">
            {buttonText}
            </button>
          </form>
          <button type="button" className="popup__close-button" onClick={onClose}></button>
        </div>
      </section>
    );
}

export default PopupWithForm;