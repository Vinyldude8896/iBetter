const seedDates = require('./date-seeds');
const seedHabits = require('./habit-seeds');
const seedUsers = require('./user-seeds');
const seedResults = require('./results-seeds')
const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true});
    console.log('----------------');
    await seedUsers();
    console.log('----------------');
    await seedDates();
    console.log('----------------');
    await seedHabits();
    console.log('----------------');
    await seedResults();
    console.log('----------------');



    process.exit(0);
};

// seedAll();
module.exports = seedAll;






















// const sequelize = require('../config/connection');
// const { Date, Habit, Result, User } = require('../models');

// const userSeeds = require('./userSeeds.json');

// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });

//   const users = await User.bulkCreate(userSeeds, {
//     individualHooks: true,
//     returning: true,
//   });

//   for (const { id } of users) {
//     const newCard = await LibraryCard.create({
//       reader_id: id,
//     });
//   }

//   for (const book of bookSeedData) {
//     const newBook = await Book.create({
//       ...book,
//       // Attach a random reader ID to each book
//       reader_id: readers[Math.floor(Math.random() * readers.length)].id,
//     });
//   }

//   process.exit(0);
// };

// seedDatabase();