import { DashBoardBody, TextButton, TextButtonText } from "./DashBoardStyled";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import { House, UserCirclePlus, Books, Note } from "@phosphor-icons/react";
=======
import { House, UserCirclePlus, Books } from "phosphor-react";
>>>>>>> b73758d7d8032553879d718c7682bf1d2aa61f2b
//Componente auxiliar de navegação
export function DashBoard() {
  const navigate = useNavigate();

  //funções de navegação
  function handleHome() {
    navigate("/");
  }
<<<<<<< HEAD
  function handleMembers() {
    navigate("/members");
  }
  function handlePost() {
    navigate("/post");
  }

=======
  function handleYourChanel() {
    navigate("/yourchanel");
  }
  function handleMotivation() {
    navigate("/motivation");
  }
>>>>>>> b73758d7d8032553879d718c7682bf1d2aa61f2b
  //retornando componente que representa o DashBoard
  return (
    <DashBoardBody>
      <TextButton onClick={handleHome}>
        <House size={32} color="#fffafa" />
        <TextButtonText>Inicio</TextButtonText>
      </TextButton>
<<<<<<< HEAD
      <TextButton onClick={handleMembers}>
        <UserCirclePlus size={32} color="#fffafa" />
        <TextButtonText>Membros</TextButtonText>
      </TextButton>
      <TextButton onClick={handlePost}>
        <Note size={32} color="#fffafa" />
        <TextButtonText>Post</TextButtonText>
=======
      <TextButton onClick={handleYourChanel}>
        <UserCirclePlus size={32} color="#fffafa" />
        <TextButtonText>Seu canal</TextButtonText>
      </TextButton>
      <TextButton onClick={handleMotivation}>
        <Books size={32} color="#fffafa" />
        <TextButtonText>Motivação</TextButtonText>
>>>>>>> b73758d7d8032553879d718c7682bf1d2aa61f2b
      </TextButton>
    </DashBoardBody>
  );
}
