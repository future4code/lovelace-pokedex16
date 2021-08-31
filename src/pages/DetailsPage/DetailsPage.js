import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../../components/Header'
import GlobalStatesContext from '../../Global/GlobalStatesContext'


const DetailsContainer = styled.div`
display: flex;
margin: 100px;
align-items: center;
justify-content: space-between;
`
const Colum1Container = styled.div`
width: 300px;
height: 500px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
border-radius: 5px;

`
const Colum2Container = styled.div`
border: 1px solid black;
width: 300px;
height: 500px;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 0 8px;
border-radius: 5px;
box-shadow: 1px 0px 3px 0px black;
`
const Colum3Container = styled.div`
// border: 1px solid black;
width: 500px;
height: 500px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
border-radius: 5px;

`
const ImgFrontContainer = styled.div`
border: 1px solid black;
width: 300px;
height: 200px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 5px;
box-shadow: 1px 0px 3px 0px black;
`
const ImgBackContainer = styled.div`
border: 1px solid black;
width: 300px;
height: 200px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 5px;
box-shadow: 1px 0px 3px 0px black;
`
const TitleContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 5px;

`
const TypeContainer = styled.div`
border: 1px solid black;
display: flex;
align-items: center;
justify-content: space-evenly;
width: 500px;
border-radius: 5px;
box-shadow: 1px 0px 3px 0px black;
`
const MovesContainer = styled.div`
border: 1px solid black;
display: flex;
flex-direction: column;
height: 425px;
justify-content: space-evenly;
align-items: center;
width: 500px;
border-radius: 5px;
box-shadow: 1px 0px 3px 0px black;
`
const Img = styled.img `
height: 300px
`



export const DetailsPage = () => {

  const history = useHistory ()

  const [selectedPokemon, setSelectedPokemon] = useState ({})
  const {name} = useParams ()
  const {pokemons} = useContext(GlobalStatesContext)

  useEffect (() => {
    const currentPokemon = pokemons.find((item) => {return item.name === name})
    setSelectedPokemon(currentPokemon)
  }, [])
 
  return (

    <div>
    <Header
    title= {"Detalhes do Pokémon"}
    leftButton = {() => history.goBack()}
    showRightButton
    />
    <DetailsContainer>
      <Colum1Container>
        <ImgFrontContainer>
         <Img src={selectedPokemon && selectedPokemon.sprites && selectedPokemon.sprites.front_default}/>
        </ImgFrontContainer>
        <ImgBackContainer>
        <Img src={selectedPokemon&& selectedPokemon.sprites && selectedPokemon.sprites.back_default}/>
        </ImgBackContainer>
      </Colum1Container>
      <Colum2Container>
        <TitleContainer>
          <h2>Seus Poderes</h2>
        </TitleContainer>
        
       {selectedPokemon && selectedPokemon.stats && selectedPokemon.stats.map((stat)=>{
         return (
           <p Key={stat.stat.name}>
             <strong>{stat.stat.name}: </strong> {stat.base_stat}
           </p>
         )
       })}
      </Colum2Container>
      <Colum3Container>
        <TypeContainer>
        {selectedPokemon && selectedPokemon.types && selectedPokemon.types.map((type)=>{
         return (
           <p Key={type.type.name}>
             <strong>{type.type.name} </strong> 
           </p>
         )
       })}
        </TypeContainer>
        <MovesContainer>
        {selectedPokemon && selectedPokemon.moves && selectedPokemon.moves.map((move, index)=>{
         return (
          index < 5 && <p key={move.move.name}><strong>{move.move.name}</strong></p>
         )
       })}
        </MovesContainer>
      </Colum3Container>


    </DetailsContainer>
    </div>
  )
};

export default DetailsPage;
