const express = require('express');
const router = express.Router();

const mainController = require('./controllers/mainController');
const searchController = require('./controllers/searchController');
const deckController = require('./controllers/deckController');


router.get('/', mainController.homePage);
router.get('/search', searchController.searchPage);
router.get('/search/element', searchController.elementPage);
router.get('/search/level', searchController.levelPage);
router.get('/search/values', searchController.valuePage);
router.get('/search/name', searchController.namePage);
router.get('/card/:id', mainController.getCard);

router.get('/deck', deckController.deckPage);
router.get('/deck/add/:id', deckController.deckAdd);
router.get('/deck/delete/:id', deckController.deckDelete);

module.exports = router;