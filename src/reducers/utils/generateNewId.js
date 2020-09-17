export const generateNewId = (entity) => {
  const ids = entity.allIds;
  if (ids.length === 0) {
    return 1;
  } else {
    return Math.max(...ids) + 1;
  }
};
