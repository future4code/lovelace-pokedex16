import React from "react";
// import styled from "styled-components";

// const TopBarContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0 8px;
//   border: 1px solid black;
// `;

export const DetailsPage = () => {
  return (
    <div>
      {/* REMOVER A TOPBARCONTAINER, POIS ESSE É O COMPONENTE HEADER E SERÁ FEITA SEPARADAMENTE E COLOCADO DIRETO NO APP. */}
      {/* <TopBarContainer>
        <button>Voltar</button>
        <p>Nome do Pokemon</p>
        <button>Adicionar/ Remover da Pokedex</button>
      </TopBarContainer> */}
      <div>
        <p>coluna 1</p>
        <div>
          <p> imagem frontal </p>
        </div>
        <div>
          <p> imagem de costas </p>
        </div>
      </div>
      <div>
        <p>coluna 2</p>
        <p>Stats</p>
      </div>
      <div>
        <p>coluna 3</p>
        <div>
          <p>type</p>
        </div>
        <div>
          <p>moves</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
