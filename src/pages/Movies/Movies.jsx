import React, { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

import SearchForm from 'components/SearchForm/SearchForm';
import { fetchSearchApi } from 'services/api';
import { Loader } from 'components/Loader/Loader';

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
        <ul>
          {movies.map(movie => (
            <li key={movie.id} className={s.list}>
              <Link
                key={movie.id}
                to={`${movie.id}`}
                state={{ from: location }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Movies;
