const dotenv = require('dotenv');
const express = require('express');
dotenv.config();
console.log(process.env.DB_PASSWORD);
const router = require('./app/router');

const app = express();
const session = require('express-session');
const deckController = require('./app/controllers/deckController');
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use(express.static('public'));

app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: "coucou",
  cookie: {
    secure: false,
    maxAge: (1000*60*60) // ça fait une heure
  }
}));
app.use(deckController.deckInit)
app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
