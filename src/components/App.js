import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
    
  function handleCardClick(card) {
    setSelectedCard(card);
    setImagePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }
  
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }
  
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setImagePopupOpen(false)
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick} />
      <Footer />
      <PopupWithForm 
        title="Редактировать профиль"
        name="editProfile"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        buttonName="Сохранить">
          <input type="text" className="popup__input popup__input_data_name" id="name-input" name="inputName" placeholder="Имя" required minLength="2" maxLength="40" />
          <span className="popup__input-error name-input-error"></span>
          <input type="text" className="popup__input popup__input_data_job" id="job-input" name="inputJob" placeholder="Вид деятельности" required minLength="2" maxLength="200" />
          <span className="popup__input-error job-input-error"></span>
      </PopupWithForm>
      <PopupWithForm 
        title="Новое место"
        name="addPlace"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonName="Сохранить">
          <input type="text" class="popup__input popup__input_data_place" id="place-input" name="inputPlace" placeholder="Название" required minLength="2" maxLength="20" /> 
          <span class="popup__input-error place-input-error"></span>
          <input type="url" class="popup__input popup__input_data_link" id="link-input" name="inputLink" placeholder="Ссылка на картинку" required />
          <span class="popup__input-error link-input-error"></span>
      </PopupWithForm>
      <PopupWithForm 
        title="Обновить аватар"
        name="editAvatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonName="Сохранить" 
        >
          <input type="url" className="popup__input popup__input_data_avatar-link" id="avatar-link-input" name="inputAvatarLink" placeholder="Ссылка на фото" required />
          <span className="popup__input-error avatar-link-input-error"></span>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} isOpen={isImagePopupOpen}/>
    </div>
  );
}

export default App;