import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "../../Theme";
import { useHistory } from "react-router-dom";
import { goToPokedexPage } from "../../Router/Cordinator";



const HeaderContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 0 3px;
border: 2px solid black;
background-color: red;
`
const LeftHeaderButton = styled.div`
  position: absolute;
  left: 10px;
  `
  const RightHeaderButton = styled.div`
  position: absolute;
  right: 10px;
  `
const Header = ({title, leftButton, showRightButton}) => {

  const history = useHistory()

  const leftButtonTitle = () => {
    switch (title) {
    case "Lista de Pokémons":
      return "Ir para Pokédex";
      case "Pokédex":
        return "Voltar para lista de pokemons";
        default: 
        return "Voltar"
    }
  }



  return (
 <HeaderContainer>
      <ThemeProvider theme={theme}>
        <LeftHeaderButton>
        <Button variant="contained" color="primary" onClick={leftButton}>
          {leftButtonTitle()}
        </Button>
        </LeftHeaderButton>
       
        <h1>{title}</h1>
      <RightHeaderButton>
      {showRightButton &&
        <Button variant="contained" color="primary" onClick={()=> goToPokedexPage(history)}>
        Ir para Pokédex
        </Button>
       }
      </RightHeaderButton>
      </ThemeProvider>
    </HeaderContainer>
  );
};

export default Header;
