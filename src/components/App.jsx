import { NavLink, Route, Routes } from 'react-router-dom';
import { Movies } from 'pages/Movies/Movies';
import { HomePage } from 'pages/HomePage/HomePage';
import { MovieDetailsPage } from 'pages/MovieDetails/MovieDetails';
import { Cast } from './Cast/Cast';

export function App() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:movieId/*" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          {/* <Route path="reviews" element={<Reviews />} /> */}
        </Route>
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<div>Page not found </div>} />
      </Routes>
    </>
  );
}
