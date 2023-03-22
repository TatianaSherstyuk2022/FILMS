import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { fetchTrendingApi } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import noPhoto from '../../images/no_image.jpg';

import s from '../HomePage/HomePage.module.css';

function HomePage() {
  const [trendings, setTrending] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function moviesFetch() {
      try {
        setIsLoading(true);
        const { results } = await fetchTrendingApi();
        setTrending(results);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    moviesFetch();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <h1 className={s.title}>Trending today</h1>
      <ul className={s.moviesList}>
        {trendings &&
          trendings?.map(trending => (
            <li key={trending.id} className={s.moviesItem}>
              <Link
                key={trending.id}
                className={s.link}
                to={`/movies/${trending.id}`}
              >
                <img
                  src={
                    trending.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${trending.poster_path}`
                      : noPhoto
                  }
                  alt={trending.title}
                  className={s.poster}
                />
              </Link>
              <span className={s.movieTitle}>{trending.title}</span>
            </li>
          ))}
      </ul>
    </>
  );
}

export default HomePage;
