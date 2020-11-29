const TEAM1_STATE = 0;
console.log("hit action");
export const reducer1 = (state = TEAM1_STATE, action) => {
  console.log("hit action");
  switch (action.type) {
    case "team1":
      state = state + action.payload;
      return state;
    case "allTeam":
      return state;
    default:
      return state;
  }
};
