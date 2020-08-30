const initialModalIsOpen = false;

export const modal = (state = initialModalIsOpen, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return true;

    case "CLOSE_MODAL":
      return false;

    default:
      return state;
  }
};
