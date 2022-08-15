module.exports = {
  isChecked(date, results) {
    console.log(">>>>>", date, results);
    const habitId = this.id;
    const result = results?.find(
      (result) => result.habit.id === habitId && result.date.date === date
    );
    if (result) {
      console.log(">>>>");
      return result.is_completed;
    }
    return false;
  },
};
