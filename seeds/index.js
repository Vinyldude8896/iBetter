const seedDates = require('./date-seeds');
const seedHabits = require('./habit-seeds');
const seedUsers = require('./user-seeds');
const seedResults = require('./results-seeds')
const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: false});
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

seedAll();
module.exports = seedAll;
