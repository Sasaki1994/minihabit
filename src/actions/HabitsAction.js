export const registerHabit = (habit, userId) => {
  return {
    type: "ADD_HABIT",
    habit,
  };
};

export const editHabit = (habit) => {
  return {
    type: "EDIT_HABIT",
    habit,
  };
};

export const deleteHabit = (habitId) => {
  return {
    type: "DELETE_HABIT",
    payload: habitId,
  };
};
