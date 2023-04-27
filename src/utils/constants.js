const selectors = {
  formSelector: ".popup__form",
  inputSelector: ".popup__text",
  submitButtonSelector: ".popup__save",
  errorSelector: ".popup__input-error",
  buttonDisableSelector: "popup__save_disabled",
  fieldsetSelector: ".popup__input-fieldset",
}

const cardTemplate = document.querySelector(".mesto__element-template").content
const openingEditProfileButton = document.querySelector(".profile__edit")
const openingPopupAddCardButton = document.querySelector(".profile__addbutton")
const cardsContainer = document.querySelector(".mesto")
const avatarChangeButton = document.querySelector('.profile__change-icon')
const formValidators = {}

export {selectors, cardTemplate, openingEditProfileButton , openingPopupAddCardButton, cardsContainer, avatarChangeButton,formValidators}
