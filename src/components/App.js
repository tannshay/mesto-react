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
    function getInfo() {
      api.getInitialCards()
        .then((res) => {
          setCards(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    useEffect(getInfo,[])
    function handleCardLike(card) {
      const isLiked = card.likes.some(i => i._id === currentUser._id);
      api.changeLikeCardStatus(card._id, !isLiked, currentUser._id).then((newCard) => {
          setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      });
    }
    function handleCardDelete(card){
      api.deleteCard(card._id).then(()=>{
        setCards(cards.filter( c => c._id !== card._id))
      })
    }
    function closeAllPopups(){
        setIsEditProfilePopupOpen(false)
        setIsAddPlacePopupOpen(false)
        setIsEditAvatarPopupOpen(false)
        setIsImagePopupOpen(false)
        setSelectedCard({})
    }
    const [currentUser, setCurrentUser] = useState({})
    useEffect(()=>{
      api.getUserInfo().then((userInfo)=>{setCurrentUser(userInfo)})
    },[])
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
    function handleUpdateUser({name,about}){
      api.setUserInfo({newName: name,newAbout: about}).then((userInfo)=>{
        setCurrentUser(userInfo)
        closeAllPopups()
      })
    }
    function handleUpdateAvatar({avatar}){
      api.changeAvatar({avaLink: avatar}).then((userInfo)=>{
        setCurrentUser(userInfo)
        closeAllPopups()
      })
    }
    function handleAddPlace({newName,newLink}){
      api.postCard({newName,newLink}).then((newCard)=>{
        setCards([newCard, ...cards])
        closeAllPopups()
      })
    }
  return (
    <div className="App">
      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main cards={cards} onCardDelete={handleCardDelete} onCardLike={handleCardLike} onCardClick={handleCardClick} onEditProfileClick={handleEditProfileClick} onEditAvatarClick={handleEditAvatarClick} onAddPlaceClick={handleAddPlaceClick}/>
        <Footer />
        <EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
        <AddPlacePopup onAddPlace={handleAddPlace} isOpen={isAddPlacePopupOpen} onclose={closeAllPopups}/>
        <PopupWithForm buttonText='Да' onClose={closeAllPopups} name="delete" title="Вы уверены?"></PopupWithForm>
        <EditAvatarPopup onUpdateAvatar={handleUpdateAvatar} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
        <ImagePopup isOpen={isImagePopupOpen} onClose={closeAllPopups} card={selectedCard}/>
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
