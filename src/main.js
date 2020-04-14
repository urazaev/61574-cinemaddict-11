import {createFilmListTemplate} from "./components/filmListTemplate";
import {createFilmPopupTemplate} from "./components/filmPopupTemplate";
import {createMenuTemplate} from "./components/menuTemplate";
import {createShowMoreButtonTemplate} from "./components/showMoreButtonTemplate";
import {createUserProfileTemplate} from "./components/userProfileTemplate";
import {createFilmCardTemplate} from "./components/filmCardTemplate";

const CARDS_COUNT = 5;
const RATES_CARDS_COUNT = 2;

const render = (template, container, position = `beforeEnd`) => {
  return (
    container.insertAdjacentHTML(position, template)
  );å
};


const headerNode = document.querySelector(`.header`);
const mainNode = document.querySelector(`.main`);
const footerNode = document.querySelector(`.footer`);

const filmCardsLongListNodes = new Array(CARDS_COUNT)
  .fill(``)
  .map(() => {
    return createFilmCardTemplate();
  })
  .join(``);

const filmCardsShortListNodes = new Array(RATES_CARDS_COUNT)
  .fill(``)
  .map(() => {
    return createFilmCardTemplate();
  })
  .join(``);

render(createUserProfileTemplate(), headerNode);
render(createMenuTemplate(), mainNode);
render(createFilmListTemplate(filmCardsLongListNodes, filmCardsShortListNodes, createShowMoreButtonTemplate()), mainNode);
render(createFilmPopupTemplate(), footerNode, `afterEnd`);
