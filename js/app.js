import data from './data.js';
import dom from './dom.js';

const stays = await data.getData();
dom.showCards(stays)
