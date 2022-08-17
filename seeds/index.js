const seedUsers = require('./user-seeds');
const seedHabits = require('./post-seeds');
const seedResults = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true});
    console.log('----------------');
    await seedUsers();
    console.log('----------------');
    await seedHabits();
    console.log('----------------');
    await seedResults();
    console.log('----------------');

    process.exit(0);
};

seedAll();