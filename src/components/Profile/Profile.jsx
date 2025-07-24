import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import "./Profile.css";

// In Profile.jsx
function Profile({ onCardClick, clothingItems, onAddClick, onEditProfile, onSignOut, onCardLike }) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar onEditProfile={onEditProfile} onSignOut={onSignOut} />
        <img src="" alt="" />
      </section>
      <section className="profile__clothing-items">
        <ClothesSection
          handleCardClick={onCardClick}
          clothingItems={clothingItems}
          onAddClick={onAddClick}
          onCardLike={onCardLike}
        />
      </section>
    </div>
  );
}

export default Profile;
