import { generateNewId } from "./utils/generateNewId";

const initialHabitList = {
  byId: {},
  allIds: [],
};

export const habits = (state = initialHabitList, action) => {
  switch (action.type) {
    case "ADD_HABIT":
      let newState = { ...state };
      const newId = generateNewId(state);
      newState.byId[newId] = {
        id: newId,
        ...action.habit,
        archived: false,
      };
      newState.allIds = [...newState.allIds, newId];
      return newState;

    case "EDIT_HABIT":
      let editedState = { ...state };
      editedState.byId[action.habit.id] = action.habit;
      return editedState;

    case "DELETE_HABIT":
      let deletedState = { ...state };
      deletedState.byId[action.payload].archived = true;
      return deletedState;

    default:
      return state;
  }
};
