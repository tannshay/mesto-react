import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ImagePopup from "./ImagePopup";
import { useState, useEffect } from "react";
import api from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
    const [cards, setCards] = useState([])
    const [currentUser, setCurrentUser] = useState({})
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
    const [isImagePopupOpen,setIsImagePopupOpen] = useState(false)
    const [selectedCard, setSelectedCard] = useState({})
    useEffect(()=>{Promise.all([api.getInitialCards(),api.getUserInfo()]).then((res)=>{
      setCards(res[0])
      setCurrentUser(res[1])
    }).catch((err) => {
      console.log(err)
    })},[])
    function handleCardLike(card) {
      const isLiked = card.likes.some(i => i._id === currentUser._id);
      api.changeLikeCardStatus(card._id, !isLiked, currentUser._id).then((newCard) => {
          setCards((state) => state.map((c) => c._id === card._id ? newCard : c))
      }).catch((err) => {
        console.log(err)
      })
    }
    function handleCardDelete(card){
      api.deleteCard(card._id).then(()=>{
        setCards((cards)=>{return cards.filter( c => c._id !== card._id)})
      }).catch((err) => {
        console.log(err)
      })
    }
    function closeAllPopups(){
        setIsEditProfilePopupOpen(false)
        setIsAddPlacePopupOpen(false)
        setIsEditAvatarPopupOpen(false)
        setIsImagePopupOpen(false)
        setSelectedCard({})
    }
    
    function handleEditProfileClick(){
        setIsEditProfilePopupOpen(true)
    }
    
    function handleAddPlaceClick(){
        setIsAddPlacePopupOpen(true)
    }
    
    function handleEditAvatarClick(){
        setIsEditAvatarPopupOpen(true)
    }
    
    function handleCardClick(card){
      setSelectedCard(card)
      setIsImagePopupOpen(true)
    }
    function handleUpdateUser({name,about}){
      api.setUserInfo({name, about}).then((userInfo)=>{
        setCurrentUser(userInfo)
        closeAllPopups()
      }).catch((err) => {
        console.log(err)
      })
    }
    function handleUpdateAvatar({avatar}){
      api.changeAvatar({avaLink: avatar}).then((userInfo)=>{
        setCurrentUser(userInfo)
        closeAllPopups()
      }).catch((err) => {
        console.log(err)
      })
    }
    function handleAddPlace({newName,newLink}){
      api.postCard({newName,newLink}).then((newCard)=>{
        setCards([newCard, ...cards])
        closeAllPopups()
      }).catch((err) => {
        console.log(err)
      })
    }
  return (
    <div className="App">
      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main cards={cards}
        onCardDelete={handleCardDelete}
        onCardLike={handleCardLike}
        onCardClick={handleCardClick}
        onEditProfileClick={handleEditProfileClick}
        onEditAvatarClick={handleEditAvatarClick}
        onAddPlaceClick={handleAddPlaceClick}/>
        <Footer />
        <EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
        <AddPlacePopup onAddPlace={handleAddPlace} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}/>
        <PopupWithForm buttonText='Да' onClose={closeAllPopups} name="delete" title="Вы уверены?"></PopupWithForm>
        <EditAvatarPopup onUpdateAvatar={handleUpdateAvatar} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
        <ImagePopup isOpen={isImagePopupOpen} onClose={closeAllPopups} card={selectedCard}/>
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
