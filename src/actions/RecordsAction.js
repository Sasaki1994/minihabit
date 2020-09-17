export const registerRecord = (habitId, number) => {
  return {
    type: "REGISTER_RECORD",
    payload: { habitId, number },
  };
};

export const editRecord = (record) => {
  return {
    type: "REGISTER_RECORD",
    record,
  };
};
