import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("AppContext must be within appContextProvider");
  }

  return context;
};

const AppContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const addToFavourites = (book) => {
    const oldFavourites = [...favourites];

    const newFavourites = oldFavourites.concat(book);
    setFavourites(newFavourites);
  };

  const removeFromFavourites = (id) => {
    const oldFavourites = [...favourites];
    const newFavourites = oldFavourites.filter((book) => book.id !== id);

    setFavourites(newFavourites);
  };

  return (
    <AppContext.Provider
      value={{ favourites, addToFavourites, removeFromFavourites }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
