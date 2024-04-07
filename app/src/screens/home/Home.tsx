import { HomeBodyDiv, TextTest, ViewDiv, ContentViewDiv } from "./HomeStyled";
import { DashBoard } from "../../components/dashboard/DashBoard";

//Tela inical da aplicação
export function Home() {
  return (
    <HomeBodyDiv>
      <ViewDiv>
        <DashBoard />
        <ContentViewDiv>
          <h1 style={{ color: "white" }}>Coloque o conteudo da pagina aqui</h1>
        </ContentViewDiv>
      </ViewDiv>
    </HomeBodyDiv>
  );
}
