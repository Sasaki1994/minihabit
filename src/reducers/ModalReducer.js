const initialModalIsOpen = { isOpen: false, habitId: null };

export const modal = (state = initialModalIsOpen, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return { isOpen: true, habitId: action.payload };

    case "CLOSE_MODAL":
      return initialModalIsOpen;

    default:
      return state;
  }
};
