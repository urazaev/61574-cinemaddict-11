import {
  MAX_AGE_RATING,
  Year,
  MAX_VALUE,
  Duration,
  Rating,
  FILM_NAMES,
  COUTRIES,
  POSTERS,
  GENRES,
  DIRECTORS,
  ACTORS,
  WRITERS,
  INITIAL_DESCRIPTION_TEXT,
  COMMENTS_COUNT
} from "./constants";

import {getRandomArrayItem, generateRandomArrayPiece, getRandomIntegerNumber, getRandomBoolean} from './utils';
import {generateComments} from "./comment";

const getRatingInteger = (min, max) => {
  const rand = min + Math.random() * (max - min);
  return parseFloat(rand.toFixed(1));
};

const getRating = () => getRatingInteger(Rating.MIN, Rating.MAX);

const generateDescription = () => {
  const descriptionPieces = INITIAL_DESCRIPTION_TEXT.split(` .`);
  return generateRandomArrayPiece(MAX_VALUE, descriptionPieces.join(``));
};

const generateGenres = () => {
  return generateRandomArrayPiece(MAX_VALUE, GENRES)
};

const generateActors = () => {
  const pieceLength = getRandomIntegerNumber(2, MAX_VALUE);
  const startPiece = getRandomIntegerNumber(1, ACTORS.length - pieceLength);
  return ACTORS.slice(startPiece, startPiece + pieceLength);
};

const generateWriters = () => {
  const genresLenght = getRandomIntegerNumber(1, MAX_VALUE);
  const genresStartPiece = getRandomIntegerNumber(1, WRITERS.length - genresLenght);
  return WRITERS.slice(genresStartPiece, genresStartPiece + genresLenght).join(` ,`);
};

// const generateFilm = () => {
//   return {
//     "id": "0",
//     "film_info": {
//       "title": "A Shark Who Bought The Carpet",
//       "alternative_title": "A Lion Who Sold The Void",
//       "total_rating": 5.4,
//       "poster": "images/posters/made-for-each-other.png",
//       "age_rating": 6,
//       "director": "Quentin Tarantino",
//       "writers": [],
//       "actors": [
//         "Robert De Niro",
//         "Matt Damon",
//         "Tom Hanks",
//         "Takeshi Kitano",
//         "Christian Bale",
//         "Gary Oldman",
//         "Harrison Ford",
//         "Ralph Fiennes"
//       ],
//       "release": {
//         "date": "2014-03-11T10:55:50.535Z",
//         "release_country": "Italy"
//       },
//       "runtime": 186,
//       "genre": [
//         "Action",
//         "Sci-Fi"
//       ],
//       "description": "Oscar-winning film, from the creators of timeless classic \"Nu, Pogodi!\" and \"Alice in Wonderland\", with the best fight scenes since Bruce Lee."
//     },
//     "user_details": {
//       "personal_rating": 5,
//       "watchlist": false,
//       "already_watched": getRandomBoolean(),
//       "watching_date": "2020-04-08T08:28:00.929Z",
//       "favorite": false
//     },
//     "comments": [
//       "0",
//       "1",
//       "2",
//       "3",
//       "4"
//     ]
//   }
// };

const generateFilm = () => {
  return {
    filmName: getRandomArrayItem(FILM_NAMES),
    rating: getRating(),
    posterUrl: getRandomArrayItem(POSTERS),
    releaseYear: getRandomIntegerNumber(Year.MIN, Year.MAX),
    movieDuration: getRandomIntegerNumber(Duration.MIN, Duration.MAX),
    genres: generateGenres(),
    comments: generateComments(COMMENTS_COUNT),
    description: generateDescription(),
    isFavorite: getRandomBoolean(),
    isWatched: getRandomBoolean(),
    isInWatchList: getRandomBoolean(),
    ageRating: getRandomIntegerNumber(1, MAX_AGE_RATING),
    actors: generateActors(),
    writers: generateWriters(),
    director: getRandomArrayItem(DIRECTORS),
    country: getRandomArrayItem(COUTRIES)
  };
};

const generateFilms = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateFilm);
};

export {generateFilm, generateFilms};
