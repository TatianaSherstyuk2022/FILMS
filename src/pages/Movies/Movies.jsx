import React, { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

import SearchForm from 'components/SearchForm/SearchForm';
import { fetchSearchApi } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import noPhoto from '../../images/no_image.jpg';

import s from './Movies.module.css';

function Movies() {
  const location = useLocation();
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('query');

  useEffect(() => {
    if (searchQuery === null) return;

    async function fetchMovies(moviesId) {
      try {
        setIsLoading(true);
        const { results } = await fetchSearchApi(moviesId);
        setMovies(results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies(searchQuery);
  }, [searchQuery]);

  const onSubmit = searchValue => {
    console.log(searchValue);
    setSearchParams({ query: searchValue });
  };

  return (
    <section>
      <SearchForm onSubmit={onSubmit} defaultValue={searchQuery} />
      {isLoading && <Loader />}
      {movies && (
        <ul className={s.moviesList}>
          {movies.map(movie => (
            <li key={movie.id} className={s.moviesItem}>
              <Link
                key={movie.id}
                lassName={s.link}
                to={`${movie.id}`}
                state={{ from: location }}
              >
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                      : noPhoto
                  }
                  alt={movie.title}
                  className={s.poster}
                />
              </Link>
              <span className={s.movieTitle}>{movie.title}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Movies;
