export default function ImagePopup(props) {
    return (
        <div className={`popup popup_type_${props.name} ${props.isOpen && "popup_opened"}`} id="popupImage">
            <div className="popup__container">
            <div className="popup__image-container">
                <img className="popup__image" alt={props.card.name} src={props.card.link} />
                <figcaption className="popup__image-caption">{props.card.name}</figcaption>
            </div>
            <button onClick={props.onClose} type="button" className="popup__close-button" id="closeImageButton"></button>
            </div>
        </div>
    )
}