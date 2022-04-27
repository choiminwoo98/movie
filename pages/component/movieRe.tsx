import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";

export default function MovieRe({ year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} />
      <div className="movie_data">
        <h3 className="movie_title">{title}</h3>
        <h5 className="moive_year">{year}</h5>
        <ul className="geners">
          {genres.map((genre, index) => (
            <li key={index} className="genres_genre">
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie_summary">{summary}</p>
      </div>
    </div>
  );
}

MovieRe.PropTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
