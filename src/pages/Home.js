import React, { useEffect } from "react";

import { fetchHeroes } from "../Actions/heroesActions";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import { motion } from "framer-motion";

//importing components
import HeroCards from "../Components/Herocards";
import Roles from "../Components/Roles";
import GameCards from "../Components/GameCards";

const Home = () => {
  //FETCHING THE INFORAMATION
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHeroes());
  }, [dispatch]);
  //PULLING THE DATA OR EXTRACTING IT FROM THE STATE
  const { GamesName, GamesType, HeroesInfo, GamesUpcoming } = useSelector(
    (state) => state.Heroes
  );
  console.log(HeroesInfo);
  return (
    <div>
      <HeroList>
        <h2>upcoming games</h2>
        <div className="games">
          {GamesUpcoming.map((data) => (
            <GameCards img={data.background_image} />
          ))}
        </div>
        <Hero>
          {HeroesInfo.map((hero) => (
            <HeroCards
              name={hero.localized_name}
              type={hero.attack_type}
              key={hero.id}
              legs={hero.legs}
              img={hero.img}
              icon={hero.icon}
            />
          ))}
        </Hero>

        <div>
          {HeroesInfo.map((data) => (
            <div>
              <h3>Roles</h3>
            </div>
          ))}
        </div>
      </HeroList>
    </div>
  );
};

//styled componenets
const HeroList = styled.div`
  h1 {
    font-size: 1.2rem;
    padding: 2rem;
  }
`;
const Hero = styled.div`
  h1 {
    font-size: 1.2rem;
    padding: 2rem;
  }
`;

export default Home;
