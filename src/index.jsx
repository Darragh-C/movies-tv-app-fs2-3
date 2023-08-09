import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes, Link } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'

import MoviesPage from "./pages/moviesPage";
import MovieDetailsPage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import TvSeriesPage from "./pages/tvSeriesPage";
import TvDetailsPage from "./pages/tvDetailsPage";
import SeasonDetailsPage from "./pages/seasonDetailsPage";
import CastDetailsPage from "./pages/castDetailsPage";
import FantasyMoviePage from "./pages/fantasyMoviePage";
import FavouriteTvPage from "./pages/favouriteTvPage";
import FavouriteCastPage from "./pages/favouriteCastPage";
import MovieSearch from "./pages/movieSearch";
import LogInPage from "./pages/logInPage";
import AuthContextProvider from "./contexts/authContext";
import PrivateRoute from "./components/privateRoute";
import MoviePlaylistsPage from "./pages/moviePlaylists";
import DragAndDropPage from "./pages/dragAndDrop";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = (props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthContextProvider>
          <SiteHeader />
          <MoviesContextProvider>
            <Routes>
              <Route path="/login" element={<LogInPage />} />
              <Route
                path="/fantasymovie"
                element={
                  <PrivateRoute>
                    <FantasyMoviePage/>
                  </PrivateRoute>
                }
              />
              <Route
                path="/movies/playlists"
                element={
                  <PrivateRoute>
                    <MoviePlaylistsPage/>
                  </PrivateRoute>
                }
              />
              <Route
                path="/movies/favourites"
                element={
                  <PrivateRoute>
                    <FavouriteMoviesPage/>
                  </PrivateRoute>
                }
              />
              <Route
                path="/tvshows/favourites"
                element={
                  <PrivateRoute>
                    <FavouriteTvPage/>
                  </PrivateRoute>
                }
              />
              <Route
                path="/cast/favourites"
                element={
                  <PrivateRoute>
                    <FavouriteCastPage/>
                  </PrivateRoute>
                }
              />
              <Route path="/tvshows/:seriesId/season/:seasonNum" element={<SeasonDetailsPage />} />
              <Route path="/tvshows/:id" element={<TvDetailsPage />} />
              <Route path="/tvshows" element={<TvSeriesPage />} />
              <Route path="/reviews/form" element={<AddMovieReviewPage />} />
              <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
              <Route path="/reviews/:id" element={<MovieReviewPage />} />
              <Route path="/movies/:id" element={<MovieDetailsPage />} />
              <Route path="/movies/search" element={<MovieSearch />} />
              <Route path="/" element={<MoviesPage />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </MoviesContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>

  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
