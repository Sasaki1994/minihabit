export const registerHabit = (habit) => {
  return {
    type: "ADD_HABIT",
    habit,
  };
};

export const editHabit = (id, habit) => {
  return {
    type: "EDIT_HABIT",
    id,
    habit,
  };
};

export const deleteHabit = (habitId) => {
  return {
    type: "DELETE_HABIT",
    payload: habitId,
  };
};
