import {RenderPosition} from '../mocks/constants';

const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);

  return array[randomIndex];
};

const getRandomIntegerNumber = (min, max) => {
  const rand = min + Math.random() * (max - min);
  return Math.floor(rand);
};

const getRandomBoolean = () => {
  return Math.random() > 0.5;
};

const getPlural = (count, one, more) => {
  return count > 1 || count === 0 ? more : one;
};

const generateRandomArrayPiece = (maxValue, array) => {
  const pieceLength = getRandomIntegerNumber(1, maxValue);
  const startPiece = getRandomIntegerNumber(1, array.length - pieceLength);
  return array.slice(startPiece, startPiece + pieceLength);
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstElementChild;
};

const render = (container, template, place) => {
  switch (place) {
    case RenderPosition.AFTER_BEGIN:
      container.prepend(template);
      break;
    case RenderPosition.BEFORE_END:
      container.append(template);
      break;
  }
};

const toggleEventListeners = (clickableItems, card, handle) => {
  clickableItems.forEach((item) => {
    const clickableItem = card.getElement().querySelector(item);
    clickableItem.addEventListener(`click`, handle);
  });
};

export {render, createElement, toggleEventListeners, generateRandomArrayPiece, getRandomArrayItem, getRandomIntegerNumber, getRandomBoolean, getPlural};
