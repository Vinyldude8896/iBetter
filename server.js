// using path and express, express-session
const path = require("path");
const express = require("express");
const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 3001;

// sequelize requires the connection file sequelize store for the session
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: "This is my super duper secret",
  cookie: {},
  // cookie: { expires: 600000 }, // session will expire in 60 minutes.
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// this is for using the login session
app.use(session(sess));

// defining helpers location and express handlebars
const helpers = require('./utils/helpers')
// const helpers = require('./utils/helpers');
const exphbs = require("express-handlebars");

// when we are using helpers
const hbs = exphbs.create({ helpers });

// handlebar engines
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// useing express JSON, url_encoded
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// using controllers(routes)
app.use(require("./controllers"));

// sequelize and PORT
sequelize.sync({ force: false }).then(async () => {
  app.listen(PORT, () => console.log("Now listening"));
});