const dataMapper = require('../dataMapper.js');

const deckController = {


    // méthode pour initialiser le tableau de favoris en session
    deckInit: (request, response, next) => {
      if (!request.session.decks) {
        request.session.decks = [];
      }
      next();
    },
  
    // méthode pour afficher les favoris
    deckPage: (request, response) => {
      const decks = request.session.decks;
      response.render('deck', { decks });
    },
  
    // méthode pour ajouter un favoris
    deckAdd: async (request, response) => {

      const id = parseInt(request.params.id, 10);
  
      // est ce que cette figurine est deja dans les favoris de l'utilisateur ?
      const decks = request.session.decks.find(deck => deck.id === id);
      // dans alreadyBookmarked on aura soit 'undefined' soit une figurine
  
      if (decks) {
        return response.redirect('/deck');
      }
  
      // je vais cherche en bdd la carte avec cet id
      const card = await dataMapper.getOneCard(id);
  

      if (!card) {
        return response.status(404).send('Erreur 404 - Cette card n\'existe pas');
      }
      
      request.session.decks.push(card);
      response.redirect('/deck');
    },
  
    // méthode pour supprimer un favoris
    deckDelete: (request, response) => {
  
      const id = parseInt(request.params.id, 10);
      request.session.decks = request.session.decks.filter(deck => deck.id !== id);
      response.redirect('/deck');
  
    },
  
  };

module.exports = deckController;