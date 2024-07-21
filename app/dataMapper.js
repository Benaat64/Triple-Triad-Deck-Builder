const client = require('./database');

const dataMapper = {
  async getAllCards() {
    const query = "SELECT * FROM card";
    const result = await client.query(query);
    return result.rows;
  },
  async getOneCard(id){
    const query ="SELECT * FROM card WHERE id = $1"
    const value = [id];
    const result = await client.query(query,value);
    return result.rows[0]
  },

  async getElem(element){
    const query ="SELECT * FROM card WHERE element = $1"
    const value = [element];
    const result = await client.query(query,value);
    return result.rows
  },

  async getElemNull(){
    const query ="SELECT * FROM card WHERE element IS NULL"
    const result = await client.query(query);
    return result.rows
  },
  

  async getLevel(level){
    const query ="SELECT * FROM card WHERE level = $1"
    const value = [level];
    const result = await client.query(query,value);
    return result.rows
  },
  async getValue(n,e,s,o){
    const query ="SELECT * FROM card WHERE value_north = $1 OR value_east = $2 OR value_south = $3 OR value_west = $4 ;"
    const value = [n,e,s,o];
    const result = await client.query(query,value);
    return result.rows
  },

};


module.exports = dataMapper;
