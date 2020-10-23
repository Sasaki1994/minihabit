import { generateNewId } from "./utils/generateNewId";

const initialHabits = {
  byId: {},
  allIds: [],
};

export const habits = (state = initialHabits, action) => {
  switch (action.type) {
    case "HABITS_MAPPING_TO_STATE":
      return { ...action.habits };

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
      editedState.byId[action.id] = action.habit;
      return editedState;

    case "DELETE_HABIT":
      let deletedState = { ...state };
      deletedState.byId[action.payload].archived = true;
      return deletedState;

    default:
      return { ...state };
  }
};
