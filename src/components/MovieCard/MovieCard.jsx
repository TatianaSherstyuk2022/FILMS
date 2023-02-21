import React from 'react';

export function MovieCard({ movie }) {
  const { overview, title, release_date, genres, vote_average, poster_path } =
    movie;

  return (
    <>
      <div>
        <img
          src={'https://image.tmdb.org/t/p/w500/' + poster_path}
          alt={title}
          width="300"
        />
        <h2>
          {title}({new Date(release_date).getFullYear()})
        </h2>
        <p>User Scope: {Math.round(vote_average * 10)}%</p>
        <p>Overview: {overview}</p>
        <p>Genres: {genres.map(genre => genre.name).join(', ')}</p>
      </div>
    </>
  );
}
