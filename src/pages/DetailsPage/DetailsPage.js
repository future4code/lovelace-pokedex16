import React from 'react'
import styled from 'styled-components'


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
`
const Colum2Container = styled.div`
border: 1px solid black;
width: 300px;
height: 500px;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 0 8px;
`
const Colum3Container = styled.div`
// border: 1px solid black;
width: 500px;
height: 500px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`
const ImgFrontContainer = styled.div`
border: 1px solid black;
width: 300px;
height: 200px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const ImgBackContainer = styled.div`
border: 1px solid black;
width: 300px;
height: 200px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const TitleContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const TypeContainer = styled.div`
border: 1px solid black;
display: flex;
align-items: center;
justify-content: space-evenly;
width: 500px;
`
const MovesContainer = styled.div`
border: 1px solid black;
display: flex;
flex-direction: column;
height: 425px;
justify-content: space-evenly;
align-items: center;
width: 500px;
`



export const DetailsPage = () => {

  return (
    <DetailsContainer>
      <Colum1Container>
        <ImgFrontContainer>
          <p> imagem frontal </p>
        </ImgFrontContainer>
        <ImgBackContainer>
          <p> imagem de costas </p>
        </ImgBackContainer>
      </Colum1Container>
      <Colum2Container>
        <TitleContainer>
          <p>Stats</p>
        </TitleContainer>
        <p>hp:</p>
        <p>attack:</p>
        <p>defense:</p>
        <p>Specia-attack:</p>
        <p>special-defense:</p>
        <p>Speed:</p>
      </Colum2Container>
      <Colum3Container>
        <TypeContainer>
          <p>type1</p>
          <p>type2</p>
        </TypeContainer>
        <MovesContainer>
          <p>Moves</p>
          <p>Move1</p>
          <p>Move2</p>
          <p>Move3</p>
        </MovesContainer>
      </Colum3Container>


    </DetailsContainer>
  )
};

export default DetailsPage;
