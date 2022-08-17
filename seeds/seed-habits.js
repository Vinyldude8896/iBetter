const { Habit } = require('../models');

const habitData = [
  {
    habit_title: 'Read',
    habit_info: "Read for 1 hour",
    user_id: "1"
  },
  {
    habit_title: 'Exercise',
    habit_info: "Exercise for 1 hour",
    user_id: "1"
  },
  {
    habit_title: 'Read',
    habit_info: "Read for 1 hour",
    user_id: "1"
  },
  {
    habit_title: 'Eat Healthy',
    habit_info: "Eat a healthy meal",
    user_id: "2"
  },
  {
    habit_title: 'Call Family',
    habit_info: "Call 1 family member",
    user_id: "2"
  },
  {
    habit_title: 'Walk the dog',
    habit_info: "Take the dog for a good long walk",
    user_id: "3"
  },
  {
    habit_title: 'Eat a Banana',
    habit_info: "Have 1 Banana per day",
    user_id: "3"
  },
];
const seedHabits = () => Comment.bulkCreate(habitData);

module.exports = seedHabits;