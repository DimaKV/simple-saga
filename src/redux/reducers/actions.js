export const setData = () => {
  return {
    type: "SET_DATA",
  };
};

export const savePeople = (data) => {
  return {
    type: "SAVE_PEOPLE",
    payload: data,
  };
};

export const savePlanets = (data) => {
  return {
    type: "SAVE_PLANETS",
    payload: data,
  };
};
