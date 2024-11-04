import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, image, bookName, author, tags, category } = book;

  return (
    <Link to={`books/${bookId}`}>
      <div className="card bg-base-100 w-96 border-2 p-6">
        <figure className="bg-gray-100 py-8 rounded-2xl">
          <img src={image} alt="" className="h-[166px]" />
        </figure>
        <div className="card-body space-y-4">
          <div className="flex justify-center gap-6">
            {tags.map((tag, idx) => (
              <button
                key={idx}
                className="btn btn-xs bg-green-100 text-green-600 px-3 rounded-full"
              >
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title">{bookName}</h2>
          <p>By: {author}</p>
          <div className="border-t-2 border-dashed"></div>
          <div className="flex">
            <p>{category}</p>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
