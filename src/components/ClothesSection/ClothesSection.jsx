import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ClothesSection({
  handleCardClick,
  clothingItems,
  onAddClick,
  onCardLike,
}) {
  const currentUser = useContext(CurrentUserContext);

  // Only render the profile clothing section when a user is logged in
  if (!currentUser) {
    return null;
  }

  // Filter clothing items to show only those owned by the current user
  const userItems = clothingItems.filter(
    (item) => item.owner === currentUser?._id
  );

  return (
    <div className="clothes-section">
      <div className="clothes-section__header">
        <p className="clothes-section__title">your items</p>
        <button onClick={onAddClick} className="clothes-section__add-btn">
          + Add New
        </button>
      </div>
      <ul className="clothes-section__items">
        {userItems.map((item) => (
          <ItemCard
            key={item._id}
            item={item}
            onCardClick={handleCardClick}
            onCardLike={onCardLike}
          />
        ))}
      </ul>
    </div>
  );
}

export default ClothesSection;
