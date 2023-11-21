import React from "react";
import { useAppContext } from "./context/appContext";

const Favourites = () => {
  const { favourites, addToFavourites, removeFromFavourites } = useAppContext();

  console.log("Favoritos son: ", favourites);

  const favouritesChecker = (id) => {
    const boolean = favourites.some((book) => book.id === id);
    return boolean;
  };

  return (
    <div className="favourites">
      {favourites.length > 0 ? (
        favourites.map((book) => (
          <div key={book.id} className="book">
            <div>
              <h4>{book.title}</h4>
            </div>
            <div>
              <img src={book.image_url} alt="#" />
            </div>
            <div>
              {favouritesChecker(book.id) ? (
                <button onClick={() => removeFromFavourites(book.id)}>
                  Quitar Fav
                </button>
              ) : (
                <button onClick={() => addToFavourites(book)}>
                  Añadir Fav
                </button>
              )}
            </div>
          </div>
        ))
      ) : (
        <h1>Aún no hay favoritos</h1>
      )}
    </div>
  );
};

export default Favourites;
