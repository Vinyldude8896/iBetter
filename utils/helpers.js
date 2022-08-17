module.exports = {
  isChecked: (habitId, date, results) => {
    // console.log(">>>>>", habitId, date, results);
    const result = results?.find(
      (result) => result.habit_id === habitId && result.date_id == date
    );
    if (result) {
      return result.is_completed ? "checked='checked'" : "";
    }
    return "";
  },
};
