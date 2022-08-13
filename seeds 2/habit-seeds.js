const { Habit } = require('../models');

const habitData= [
    {
      habit_title: "Read for 1 hr",
      habit_info: "Read for an hour",
      user_id: 1
    },
    {
      habit_title: "code 2hrs",
      habit_info: "Code for 2hrs",
      user_id: 1
    },
    {
      habit_title: "exercise 30 min",
      habit_info: "Excercise for 30 minutes",
      user_id: 1
    },
    {
      habit_title: "Turn off phone",
      habit_info: "Turn off my phone for at least 1 hour",
      user_id: 1
    },
    {
      habit_title: "healthy meal",
      habit_info: "Eat at least 1 healthy Meal",
      user_id: 1
    },
    {
      habit_title: "Work on Hobby",
      habit_info: "Work on my hobby for at least 1 hr",
      user_id: 1
    },
    {
      habit_title: "Chores",
      habit_info: "Do at least 2 chores today",
      user_id: 1
    },
    {
      habit_title: "Call family",
      habit_info: "Call my immediate family members",
      user_id: 1
    },

];

    const seedHabits = () => Habit.bulkCreate(habitData);

    module.exports = seedHabits;