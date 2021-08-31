import Header from "../../components/Header";
import PokeCard from "../../components/PokeCard";
import React, { useContext } from "react";
import GlobalStatesContext from "../../Global/GlobalStatesContext";
import { goToPokedexPage } from "../../Router/Cordinator";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const PokeListContainer = styled.main`
  width: 90vw;
  height: 50vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top:50px;
  margin-left:50px;
  
`

const HomePage = () => {
  
  const history = useHistory()
  const {pokemons} = useContext (GlobalStatesContext)

  return (

 
<div>
<Header
title= {"Lista de Pokémons"}
leftButton = {() => goToPokedexPage(history)}
/>
  <PokeListContainer>
  {
    pokemons.map ((poke) => {
      return <PokeCard key={poke.name} pokemon={poke} />
    })
  }
  </PokeListContainer>
  
  
</div>
   
  );
};

export default HomePage;
