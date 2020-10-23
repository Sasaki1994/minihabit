import { generateNewId } from "./utils/generateNewId";

const initialRecords = {
  byId: {},
  allIds: [],
};

export const records = (state = initialRecords, action) => {
  switch (action.type) {
    case "RECORDS_MAPPING_TO_STATE":
      return { ...action.records };

    case "REGISTER_RECORD":
      let newState = { ...state };
      const newId = generateNewId(state);
      newState.byId[newId] = {
        id: newId,
        habitId: action.payload.habitId,
        number: Number(action.payload.number),
        created_at: new Date(),
      };
      newState.allIds = [...newState.allIds, newId];
      return newState;

    case "EDIT_RECORD":
      let editedState = { ...state };
      editedState.byId[action.record.id] = action.record;
      return editedState;

    default:
      return state;
  }
};
