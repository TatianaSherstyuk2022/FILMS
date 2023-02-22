import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { fetchTrendingApi } from 'services/api';
import { Loader } from 'components/Loader/Loader';

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
      <h1>Trending today</h1>
      {trendings &&
        trendings.map(trending => (
          <li key={trending.id} className={s.list}>
            <Link key={trending.id} to={`/movies/${trending.id}`}>
              {trending.title}
            </Link>
          </li>
        ))}
    </>
  );
}

export default HomePage;
