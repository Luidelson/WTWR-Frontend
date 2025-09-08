import WeatherCard from "../WeatherCard/WeatherCard";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./Main.css";

function Main({
  weatherData,
  handleCardClick,
  clothingItems,
  onCardLike,
  isLoggedIn,
}) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const currentUser = useContext(CurrentUserContext);

  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      {isLoggedIn && (
        <section className="cards">
          <p className="cards__text">
            Today is {weatherData.temp[currentTemperatureUnit]} &deg; / You may
            want to wear:
          </p>

          <ul className="cards__list">
            {weatherData.type &&
              currentUser &&
              clothingItems
                .filter((item) => {
                  return (
                    item.weather === weatherData.type &&
                    item.owner === currentUser?._id
                  );
                })
                .map((item) => {
                  return (
                    <ItemCard
                      key={item._id}
                      item={item}
                      onCardClick={handleCardClick}
                      onCardLike={onCardLike}
                    />
                  );
                })}
          </ul>
        </section>
      )}
    </main>
  );
}

export default Main;
