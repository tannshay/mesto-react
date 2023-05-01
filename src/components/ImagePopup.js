function ImagePopup({card,onClose,isOpen}){
    return(
        <section className={`popup popup_type_photo ${isOpen ? 'popup_opened' : ''}`}>
        <div className="popup__wrapper">
          <img className="popup__img" src={card.link} alt={card.name}/>
          <p className="popup__subtitle">{card.name}</p>
          <button
            type="button"
            className="popup__close-button popup__close-button_img"
            onClick={onClose}
          ></button>
        </div>
      </section>
    )
}

export default ImagePopup;