import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "../../Theme";
import { goToDetailsPage } from "../../Router/Cordinator";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import GlobalStatesContext from "../../Global/GlobalStatesContext";

const ContainerPrincipal = styled.div `
display:grid;
justify-content: space-evenly;
grid-template-rows: 90% 10%;
align-items:center;
`

const CardPokemons = styled.div`

border: 1px solid black; 
box-shadow: 1px 0px 3px 0px black;
border-radius: 5px;
width: 350px;
height: 400px;
margin: 35px;
`
const ContainerImg = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
width: 300px;
height: 250px;
margin: 20px auto;
box-shadow: 1px 0px 3px 0px black;
` 
const ContainerButtons = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
text-align: center;
margin: 50px 50px;
cursor: pointer;
`
const Img = styled.img `
height: 300px
`

const PokeCard = ({pokemon, isPokedex}) => {

  const history = useHistory()
  const {pokemons, setPokemons, pokedex, setPokedex} = useContext(GlobalStatesContext)

  const addToPokedex =() => {
const pokeIndex = pokemons.findIndex ((item) => item.name === pokemon.name)
const newPokemonsList = [...pokemons]
newPokemonsList.splice ( pokeIndex, 1)
const newPokedexList= [...pokedex, pokemon]

setPokedex(newPokedexList)
setPokemons(newPokemonsList)
  }

  const removeFromPokedex = () => {
    const pokeIndex = pokemons.findIndex ((item) => item.name === pokemon.name)
    const newPokedexList = [...pokedex]
    newPokedexList.splice (pokeIndex, 1)
    const newPokemonsList = [...pokemons, pokemon]

setPokedex(newPokedexList)
setPokemons(newPokemonsList)
  }

 


  return (

   
    <ContainerPrincipal>

<CardPokemons>


              <ContainerImg >
                
                <Img src={pokemon.sprites&& pokemon.sprites.front_default} alt={pokemon.name} />
               
              </ContainerImg>


    <ThemeProvider theme={theme}>
      <ContainerButtons>
        <Button variant="contained" color="primary" onClick = {isPokedex ? removeFromPokedex : addToPokedex} >
        {isPokedex ? "Remover " : "Adicionar "}
        </Button>
        <Button variant="contained" color="primary" onClick={()=>goToDetailsPage(history, pokemon.name)}>
          Ver Detalhes
        </Button>
        </ContainerButtons>

      </ThemeProvider>
      </CardPokemons>
      </ContainerPrincipal>
      



  )
};

export default PokeCard;
