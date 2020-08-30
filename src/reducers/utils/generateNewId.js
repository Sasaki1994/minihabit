const generateNewId = (entity) => {
  const ids = entity.allIds;
  return Math.max(...ids) + 1;
};

export default generateNewId;
