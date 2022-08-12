const { Result} = require('../models');

const resultData= [
    {
      is_completed: true,
      habit_id: 1,
      date_id: 1
    },
    {
        is_completed: false,
        habit_id: 1,
        date_id: 2
    },
    {
        is_completed: true,
        habit_id: 2,
        date_id: 1
    },
    {
      is_completed: true,
      habit_id: 4,
      date_id: 5
    },
    {
        is_completed: false,
        habit_id: 3,
        date_id: 17
    },
    {
        is_completed: true,
        habit_id: 5,
        date_id: 10
    }
  ]

  const seedResults = () => Result.bulkCreate(resultData);

  module.exports = seedResults;