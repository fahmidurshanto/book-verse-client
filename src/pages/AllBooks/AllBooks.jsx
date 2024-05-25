import axios from "axios";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import RatingIcon from "../../components/RatingIcon/RatingIcon";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [bookCategory, setBookCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [rating, setRating] = useState(0);
  const [state, setState] = useState({
    review: "",
    rating: 0,
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/books")
      .then((res) => {
        setBooks(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <h3 className="text-3xl">All Books: {books.length}</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
        {books.map((book) => {
          return (
            <div key={book._id} className="card w-full glass">
              <figure className="h-60">
                <img src={book.image} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{book.bookName}</h2>
                <p>
                  <span className="font-bold">Category: </span>
                  {book.category}
                </p>
                <RatingIcon></RatingIcon>

                <p>
                  <span className="font-bold">Author: </span>
                  {book.author}
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-info text-white">Update</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllBooks;
