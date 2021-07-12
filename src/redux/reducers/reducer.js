const initState = {};

export const reducer = (state = initState, action) => {
  if (state === "default") {
    return state;
  }

  switch (action.type) {
    case "SET_DATA":
      return {
        people: [],
        planets: [],
      };
    case "SAVE_PEOPLE": {
      return {
        ...state,
        people: action.payload,
      };
    }
    case "SAVE_PLANETS": {
      return {
        ...state,
        planets: action.payload,
      };
    }
    default:
      return state;
  }
};
