export const openModal = (habitId) => {
  return {
    type: "OPEN_MODAL",
    payload: habitId,
  };
};

export const openInputDataModal = (habitId) => {
  return {
    type: "OPEN_INPUT_DATA_MODAL",
    payload: habitId,
  };
};
export const openCreateHabitModal = () => {
  return {
    type: "OPEN_CREATE_HABIT_MODAL",
  };
};
export const openEditHabitModal = (habitId) => {
  return {
    type: "OPEN_EDIT_HABIT_MODAL",
    payload: habitId,
  };
};

export const closeModal = () => {
  return {
    type: "CLOSE_MODAL",
  };
};
