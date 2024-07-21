const dataMapper = require('../dataMapper.js');

const searchController = {
  searchPage: async (req, res) => {
    try {
      const element = req.query.element;
      const cards = await dataMapper.getElem(element);
      res.render('search',{cards})
    } catch (error) {
      console.log(error)
      res.status(500).send(`oupsi je suis trop nul`);
    }
   
  },
  elementPage: async (req,res) => {
    try {
      const element = req.query.element;
      let cards;
      if(element ==='null'){
       cards = await dataMapper.getElemNull();
    }else{
       cards = await dataMapper.getElem(element);
    }
      res.render('search',{cards})
    } catch (error) {
      console.log(error)
      res.status(500).send(`oupsi je suis trop nul`);
    }
  },
  levelPage:async (req,res) => {
    try {
      const level = parseInt(req.query.level);
      const cards = await dataMapper.getLevel(level);
      res.render('search',{cards})
    } catch (error) {
      console.log(error)
      res.status(500).send(`oupsi je suis trop nul`);
    }
  },
  valuePage:async (req,res) => {
    try {
      const direction = req.query.direction;
      const value = parseInt(req.query.value);
      let n = 0, e = 0, s = 0, o = 0;
      if (direction === 'north') n = value;
      else if (direction === 'east') e = value;
      else if (direction === 'south') s = value;
      else if (direction === 'west') o = value;
      const cards = await dataMapper.getValue(n, e, s, o);
      res.render('search',{cards})
    } catch (error) {
      console.log(error)
      res.status(500).send(`oupsi je suis trop nul`);
    }
  },
  namePage: async (req, res) => {
    try {
      const name = req.query.name;
      const card = await dataMapper.getName(name);
      res.render('name', {card});
    } catch (error) {
      console.log(error);
      res.status(500).send(`Erreur : ${error.message}`);
    }
  }

};

module.exports = searchController;