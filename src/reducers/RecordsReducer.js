import generateNewId from "./utils/generateNewId";

const initialRecords = {
  byId: {
    1: {
      id: 1,
      habitId: 1,
      number: 1,
      created_at: "2020-08-30 12:00:00",
    },
    2: {
      id: 2,
      habitId: 2,
      number: 4,
      created_at: "2020-08-30 12:10:00",
    },
  },
  allIds: [1, 2],
};

export const records = (state = initialRecords, action) => {
  switch (action.type) {
    case "REGISTER_RECORD":
      const id = generateNewId(state);
      const newRecord = {
        id: {
          id,
          habitId: action.payload.habitId,
          number: Number(action.payload.number),
          created_at: "2020-08-30 12:00",
        },
      };

      return {
        byId: { ...state.byId, ...newRecord },
        allIds: [...state.allIds, id],
      };

    default:
      return state;
  }
};
