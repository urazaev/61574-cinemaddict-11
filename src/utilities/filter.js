import {FilterNames} from '../mocks/constants.js';

const getWatchListFilms = (films) => {
  return films.filter((film) => film.isInWatchList);
};

const getWatchedFilms = (films) => {
  return films.filter((film) => film.isWatched);
};

const getAllFilms = (films) => {
  return films;
};

const getFavoritesFilms = (films) => {
  return films.filter((film) => film.isFavorite);
};

export const getFilmsByFilter = (films, filter) => {
  switch (filter) {
    case FilterNames.ALL:
      return getAllFilms(films);
    case FilterNames.WATCHLIST:
      return getWatchListFilms(films);
    case FilterNames.HISTORY:
      return getWatchedFilms(films);
    case FilterNames.FAVORITES:
      return getFavoritesFilms(films);
  }

  return films;
};
