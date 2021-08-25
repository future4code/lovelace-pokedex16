import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "../../Theme";



const Header = () => {

  const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3px;
    border: 2px solid black;
    background-color: red;
  `



  return (
 <Header>
      <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary">
          Voltar
        </Button>
        <h1> Pokédex</h1>
        <Button variant="contained" color="primary">
          Adicionar/Remover da Pokédex
        </Button>
      </ThemeProvider>
    </Header>
  );
};

export default Header;
