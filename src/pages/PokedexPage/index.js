import { useContext } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import GlobalStatesContext from "../../Global/GlobalStatesContext";
import { goToHomePage } from "../../Router/Cordinator";
import styled from "styled-components";
import PokeCard from "../../components/PokeCard";

const PokeListContainer = styled.main`
  width: 90vw;
  height: 92vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-left:50px;
`

const PokedexPage = () => {

  const history = useHistory()
  const {pokedex} = useContext(GlobalStatesContext)
 
 
 
  return(
<div>
  
<Header
    title={"Pokédex"}
    leftButton={() => goToHomePage(history)}
    />

    <PokeListContainer>
      {
        pokedex && pokedex.map((poke) => {
          return <PokeCard key={poke.name} isPokedex pokemon={poke} />
        })
      }
      
    </PokeListContainer>
</div>
  )
};

export default PokedexPage;
