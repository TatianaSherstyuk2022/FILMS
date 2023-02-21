import { Cast } from 'components/Cast/Cast.jsx';
import { Loader } from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/api';
import { MovieCard } from '../../components/MovieCard/MovieCard.jsx';

export function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setIsLoading(true);
        const movie = await fetchMovieById(movieId);
        setMovie(movie);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovie();
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <MovieCard movie={movie} />
          <div>
            <h2>Additional information</h2>
            <NavLink to={'cast'}> Cast</NavLink>
            {/* <NavLink to={'reviews'}> Reviews</NavLink> */}
          </div>
        </>
      )}
      {/* <Outlet /> */}
    </>
  );
}
