import React, { useEffect, useState, Suspense } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';

import { fetchMovieById } from 'services/api';
import { MovieCard } from '../../components/MovieCard/MovieCard.jsx';
import { Loader } from 'components/Loader/Loader';

import s from './MovieDetails.module.css';

function MovieDetailsPage() {
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setIsLoading(true);
        const movie = await fetchMovieById(movieId);
        setMovie(movie);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovie();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      <div>
        {' '}
        <Link to={backLinkHref} className={s.btn}>
          Back
        </Link>
      </div>
      {movie && (
        <>
          <MovieCard movie={movie} />
          <div>
            <h2 className={s.title}>Additional information</h2>
            <Link to={'cast'} state={location.state} className={s.link}>
              Cast
            </Link>
            <Link to={'reviews'} state={location.state} className={s.link}>
              Reviews
            </Link>
          </div>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
}

export default MovieDetailsPage;
