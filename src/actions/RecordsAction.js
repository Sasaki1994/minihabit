export const registerRecord = (habitId, number) => {
  return {
    type: "REGISTER_RECORD",
    payload: { habitId, number },
  };
};
