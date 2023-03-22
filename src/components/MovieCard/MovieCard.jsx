import React from 'react';
import PropTypes from 'prop-types';

import s from './MovieCard.module.css';

export function MovieCard({ movie }) {
  const { overview, title, release_date, genres, vote_average, poster_path } =
    movie;

  return (
    <>
      <div className={s.movies}>
        <img
          src={'https://image.tmdb.org/t/p/w500/' + poster_path}
          alt={title}
          width="250"
        />
        <div className={s.about}>
          <h2 className={s.mainTitle}>
            {title}({new Date(release_date).getFullYear()})
          </h2>
          <p className={s.score}>
            <b className={s.title}>User Scope:</b>{' '}
            {Math.round(vote_average * 10)}%
          </p>
          <p className={s.score}>
            <b className={s.title}>Overview:</b> {overview}
          </p>
          <p className={s.score}>
            <b className={s.title}>Genres:</b>{' '}
            {genres.map(genre => genre.name).join(', ')}
          </p>
        </div>
      </div>
    </>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
  }),
};
