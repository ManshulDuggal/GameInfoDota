import axios from "axios";
import { popularGamesURL, upcomingPopularGamesURL,  } from "../api";

//ACTTION CREATOR
export const fetchHeroes = () => async (dispatch) => {
  //fetch axios
  const popularData = await axios.get(popularGamesURL());
const upcomingGamesData = await axios.get(upcomingPopularGamesURL());
  dispatch({
    type: "FETCH_HEROES",
    payload: {
      HeroesInfo: popularData.data,
      GamesUpcoming: upcomingGamesData.data.results,
    },
  });
};

// export default fetchHeroes;
