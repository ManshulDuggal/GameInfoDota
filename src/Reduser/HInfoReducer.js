const initState = {
  HeroesInfo: [],
  GamesUpcoming: [],
  GamesOld: [],
   GamesType: [],
};

const HInfoReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_HEROES":
      return {
        ...state,

        HeroesInfo: action.payload.HeroesInfo,
        GamesUpcoming: action.payload.GamesUpcoming,
      };

    default:
      return { ...state };
  }
};

// //ACTION CREATOR is a funciton which reutrns us an action
// const fetchHeroes = () => {
//   return {
//     type: "FETCH_HEROES",
//   };
// };

export default HInfoReducer;
