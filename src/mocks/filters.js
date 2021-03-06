import {InitialFilterState} from './constants';

const generateFilters = (filmsData) => {
  return filmsData.reduce((prev, film) => {
    return {
      'all movies': null,
      'watchlist': film.isInWatchList ? prev.watchlist + 1 : prev.watchlist,
      'history': film.isWatched ? prev.history + 1 : prev.history,
      'favorites': film.isFavorite ? prev.favorites + 1 : prev.favorites,
    };
  }, InitialFilterState);
};

export {generateFilters};
