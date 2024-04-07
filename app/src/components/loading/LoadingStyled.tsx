import styled from "styled-components";
import loading from "../../assets/loading.svg";

export const Image = styled.image`

  background: url(${loading});
  background-repeat: no-repeat;
  height: 200px;
  width: 200px; 
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 10px;
height: 100vh;
`;
