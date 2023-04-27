function PopupWithImage(){
    return(
        <section className="popup popup_type_photo">
        <div className="popup__wrapper">
          <img className="popup__img" />
          <p className="popup__subtitle"></p>
          <button
            type="button"
            className="popup__close-button popup__close-button_img"
          ></button>
        </div>
      </section>
    )
}

export default PopupWithImage;