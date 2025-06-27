import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import "./Profile.css";

// In Profile.jsx
function Profile({ onCardClick, clothingItems }) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar />
        <img src="" alt="" />
      </section>
      <section className="profile__clothing-items">
        <ClothesSection
          handleCardClick={onCardClick}
          clothingItems={clothingItems} // <-- pass down
        />
      </section>
    </div>
  );
}

export default Profile;
