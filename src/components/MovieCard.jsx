import React from "react";

const MovieCard = ({ image, title, releaseDate }) => {
  return (
    <div className="movie-card   text-white">
      <img className="shadow-lg" src={`https://image.tmdb.org/t/p/w500${image}`} />
      <h1 className="mt-2 text-gray-400 ">{title}</h1>
      <p className="mt-2 text-gray-400 ">{releaseDate}</p>
    </div>
  );
};

export default MovieCard;
