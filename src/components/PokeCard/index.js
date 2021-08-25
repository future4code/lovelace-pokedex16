import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "../../Theme";



const PokeCard = () => {

  const ContainerPrincipal = styled.div `
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
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
display: flex;
justify-content: space-between;
align-items: center;
text-align: center;
margin: 80px 50px;
cursor: pointer;
`


  return (
    <ContainerPrincipal>

<CardPokemons>


              <ContainerImg>
                <p>Foto</p>
              </ContainerImg>


    <ThemeProvider theme={theme}>
      <ContainerButtons>
        <Button variant="contained" color="primary">
          Remover
        </Button>
        <Button variant="contained" color="primary">
          Ver Detalhes
        </Button>
        </ContainerButtons>

      </ThemeProvider>
      </CardPokemons>
      </ContainerPrincipal>
  )
};

export default PokeCard;
