import "./ItemModal.css";
import closeIcon from "../../assets/Close-icon.png";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemModal({ activeModal, onClose, card, onDelete, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);

  // Checking if the current user is the owner of the current clothing item
  const isOwn = card.owner === currentUser?._id;

  // Check if the item was liked by the current user
  const isLiked = card.likes?.some((id) => id === currentUser?._id);

  // Creating a variable which you'll then set in `className` for the delete button
  const itemDeleteButtonClassName = `modal__delete ${
    isOwn ? "" : "modal__delete_hidden"
  }`;

  // Create a variable which you then set in `className` for the like button
  const itemLikeButtonClassName = `modal__like-button ${
    isLiked ? "modal__like-button_active" : ""
  }`;

  // Handle like button click
  const handleLike = () => {
    onCardLike({ id: card._id, isLiked });
  };

  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__content modal__content_type_image">
        <button onClick={onClose} type="button" className="modal__close">
          <img src={closeIcon} alt="Close modal" />
        </button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <div className="modal__header">
            <h2 className="modal__caption">{card.name}</h2>
            {currentUser && (
              <button
                className={itemLikeButtonClassName}
                onClick={handleLike}
                type="button"
              />
            )}
          </div>
          <p className="modal__weather">Weather: {card.weather}</p>
          <button
            className={itemDeleteButtonClassName}
            onClick={() => onDelete(card._id)}
          >
            Delete Item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
