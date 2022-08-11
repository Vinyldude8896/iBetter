//not currently set up, seeds files will just store hardcoded template values to be tested out with routes in insomnia 



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