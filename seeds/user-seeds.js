const { User } = require('../models');

const userData = [
  {
    username: 'JonesGrace',
    email: "GraceJones@music.com",
    password: "password123"
  },
  {
    username: 'BaduBadu',
    email: "BaduBadu@music.com",
    password: "password1234"
  },
  {
    username: 'TinaTurner',
    email: "tinaturner@music.com",
    password: "password1234"
  },
];
const seedUsers = () => Comment.bulkCreate(userData);

module.exports = seedUsers;