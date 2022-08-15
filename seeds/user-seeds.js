const { User } = require("../models");
const bcrypt = require("bcrypt");

const userData = [
  {
    username: "Sal",
    email: "sal@hotmail.com",
    password: bcrypt.hashSync("password1234", 10)
  },
  {
    username: "Lernantino",
    email: "lernantino@gmail.com",
    password: bcrypt.hashSync("coolPw2020", 10)
  },
  {
    username: "Amiko",
    email: "amiko2k20@aol.com",
    password: bcrypt.hashSync("amiko2k20!", 10)
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
