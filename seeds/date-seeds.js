const { DateModel } = require("../models");

const dateData = [
  {
    date: "1",
  },
  {
    date: "2",
  },
  {
    date: "3",
  },
  {
    date: "4",
  },
  {
    date: "5",
  },
  {
    date: "6",
  },
  {
    date: "7",
  },
  {
    date: "8",
  },
  {
    date: "9",
  },
  {
    date: "10",
  },
  {
    date: "11",
  },
  {
    date: "12",
  },
  {
    date: "13",
  },
  {
    date: "14",
  },
  {
    date: "15",
  },
  {
    date: "16",
  },
  {
    date: "17",
  },
  {
    date: "18",
  },
  {
    date: "19",
  },
  {
    date: "20",
  },
  {
    date: "21",
  },
  {
    date: "22",
  },
  {
    date: "23",
  },
  {
    date: "24",
  },
  {
    date: "25",
  },
  {
    date: "26",
  },
  {
    date: "27",
  },
  {
    date: "28",
  },
  {
    date: "29",
  },
  {
    date: "30",
  },
  {
    date: "31",
  },
];

const seedDates = () => DateModel.bulkCreate(dateData);

module.exports = seedDates;
