// const Base_url = "https://api.opendota.com/api/";

const HeroesInfo = "https://api.opendota.com/api/heroStats/";

const Base_url = "https://api.rawg.io/api/games?key=";

const upcomingGames = new Date().getFullYear() + 1;
const previousGames = new Date().getFullYear() - 1;
const currentGames = new Date().getFullYear();

const getdateGames = () => {
  const date = new Date().getDate();

  if (date < 10) {
    return `0${date}`;
  } else {
    return date;
  }
};

getdateGames();

const getmonthGames = () => {
  const month = new Date().getMonth();

  if (month < 10) {
    return `0${month + 1}`;
  } else {
    return month;
  }
};
getmonthGames();

const monthGames = getmonthGames();

const dateGames = getdateGames();

//current Date
//d/m/y
const currentPopularGames = `&?games?dates=${dateGames},${monthGames},${previousGames}&ordering=-rating&page_size=10`;
const upcomingPopularGames = `&?games?dates=${dateGames},${monthGames},${upcomingGames}&ordering=-added&page_size=10`;
// const currentPopularGames = `&?games?dates=${dateGames},${monthGames},${previousGames}&ordering=-rating&page_size=10`;

export const popularGamesURL = () => `${HeroesInfo}`;

// `${Base_url}${process.env.REACT_APP_API_KEY}${currentPopularGames}`;
export const upcomingPopularGamesURL = () =>
  `${Base_url}${process.env.REACT_APP_API_KEY}${upcomingPopularGames}`;

export const currentPopularGamesURL = () =>
  `${Base_url}${process.env.REACT_APP_API_KEY}${upcomingPopularGames}`;
