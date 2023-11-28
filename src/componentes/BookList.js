import React, { useEffect, useState } from "react";
import { API_URL } from "../API";
import axios from "axios";
import { useAppContext } from "./context/appContext";
import { useNavigate } from "react-router-dom";

const BookList = () => {
  const [books, setBooks] = useState([]);

  const { favourites, addToFavourites, removeFromFavourites } = useAppContext();

  const navigate = useNavigate()

  const favouritesChecker = (id) => {
    const boolean = favourites.some((book) => book.id === id);
    return boolean;
  };

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="book">
          <div>
            <h4>{book.title}</h4>
          </div>
          <div>
            <img src={book.image_url} alt="#" onClick={() => navigate(`/book/${book.id}`)} />
          </div>
          <div>
            {favouritesChecker(book.id) ? (
              <button onClick={() => removeFromFavourites(book.id)}>
                Quitar Fav
              </button>
            ) : (
              <button onClick={() => addToFavourites(book)}>Añadir Fav</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;