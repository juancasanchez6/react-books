import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BOOK_DETAIL_URL } from "../API";

const BookDetails = () => {
  const [book, setBook] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${BOOK_DETAIL_URL}/${id}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="book-details">
      <div className="book-image">
        <h2>{book?.title}</h2>
        <img src={book?.image_url} alt="#" />
      </div>
      <div className="book-description">
        <h2>Description</h2>
        <p>{book?.description}</p>
        <h2>Autores</h2>
        <p>{book?.authors}</p>
        <h2>Géneros</h2>
        <p>{book?.genres}</p>
      </div>
    </div>
  );
};

export default BookDetails;
