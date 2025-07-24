import "./ItemCard.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemCard({ item, onCardClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);
  
  // Check if the item is liked by the current user
  const isLiked = item.likes?.some((id) => id === currentUser?._id);
  
  // Handle like button click
  const handleLike = () => {
    onCardLike({ id: item._id, isLiked });
  };

  // Like button class name for styling
  const itemLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_active" : ""
  }`;

  return (
    <li className="card">
      <div className="card__header">
        <h2 className="card__name">{item.name}</h2>
        {currentUser && (
          <button
            className={itemLikeButtonClassName}
            onClick={handleLike}
            type="button"
          />
        )}
      </div>
      <img
        onClick={() => onCardClick(item)}
        className="card__image"
        src={item.link}
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;
