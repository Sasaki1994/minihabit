const initialModalIsOpen = {
  isOpen: false,
  isInputDataOpen: false,
  isCreateHabitOpen: false,
  isEditHabitOpen: false,
  habitId: null,
};

export const modal = (state = initialModalIsOpen, action) => {
  switch (action.type) {
    case "OPEN_INPUT_DATA_MODAL":
      return { ...state, isOpen: true, isInputDataOpen: true, habitId: action.payload };

    case "OPEN_CREATE_HABIT_MODAL":
      return { ...state, isOpen: true, isCreateHabitOpen: true };

    case "OPEN_EDIT_HABIT_MODAL":
      return { ...state, isOpen: true, isEditHabitOpen: true, habitId: action.payload };

    case "OPEN_MODAL":
      return { ...state, isOpen: true, habitId: action.payload };

    case "CLOSE_MODAL":
      return initialModalIsOpen;

    default:
      return state;
  }
};
