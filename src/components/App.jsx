import React, { lazy, Suspense } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';

import s from './App.module.css';

const LazyHomePage = lazy(() => import('pages/HomePage/HomePage'));
const LazyMovieDetailsPage = lazy(() =>
  import('pages/MovieDetails/MovieDetails')
);
const LazyMovies = lazy(() => import('pages/Movies/Movies'));
const LazyCast = lazy(() => import('./Cast/Cast'));
const LazyReviews = lazy(() => import('./Reviews/Reviews'));

export function App() {
  return (
    <>
      <header className={s.header}>
        <nav>
          <NavLink to="/" className={s.link}>
            Home
          </NavLink>
          <NavLink to="/movies" className={s.link}>
            Movies
          </NavLink>
        </nav>
      </header>

      <Suspense>
        <Routes>
          <Route path="/" element={<LazyHomePage />} />
          <Route path="/movies/:movieId/*" element={<LazyMovieDetailsPage />}>
            <Route path="cast" element={<LazyCast />} />
            <Route path="reviews" element={<LazyReviews />} />
          </Route>
          <Route path="/movies" element={<LazyMovies />} />
          <Route path="*" element={<div>Page not found </div>} />
        </Routes>
      </Suspense>
    </>
  );
}
