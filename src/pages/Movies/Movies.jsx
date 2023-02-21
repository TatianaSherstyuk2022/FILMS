import { MovieCard } from 'components/MovieCard/MovieCard';
import SearchForm from 'components/SearchForm/SearchForm';
import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { fetchSearchApi } from 'services/api';

export function Movies() {
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
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link key={movie.id} to={`/movies/${movie.id}`}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
