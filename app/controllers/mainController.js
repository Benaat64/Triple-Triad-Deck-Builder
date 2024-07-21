const dataMapper = require('../dataMapper.js');

const mainController = {
  homePage: async (req, res) => {
    try {
      const cards = await dataMapper.getAllCards();
      res.render('cardList', {
        cards,
        title: 'Liste des cartes'
      });
    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }
  },
  getCard: async(req,res)=>{
    try{
      const cardId = req.params.id;
      const card = await dataMapper.getOneCard(cardId);
      res.render('card',{card})
    }catch(error){
      console.log(error)
      res.status(500).send(`oupsi je suis trop nul`);
    }
  }
};

module.exports = mainController;
