export const openModal = (habitId) => {
  return {
    type: "OPEN_MODAL",
    payload: habitId,
  };
};

export const closeModal = () => {
  return {
    type: "CLOSE_MODAL",
  };
};
