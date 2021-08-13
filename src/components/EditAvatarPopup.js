import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  const avatarRef = React.useRef();
  const [avatar, setAvatar] = React.useState('');

  function handleSetAvatar(e) {
    setAvatar(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onEditAvatar(avatarRef.current.value);
  }

  React.useEffect(() => {
    setAvatar('');
  }, [props.isOpen]);

  return (
    <PopupWithForm
      name={'avatar'}
      title={'Обновить аватар'}
      buttonName={'Сохранить'}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        onChange={handleSetAvatar}
        ref={avatarRef}
        value={avatar || ''}
        type='url'
        name='inputAvatarLink'
        id='avatar-link-input'
        required
        placeholder='Ссылка на картинку'
        className='popup__input popup__input_data_avatar-link'
      />
      <span className='popup__input-error avatar-link-input-error'></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;