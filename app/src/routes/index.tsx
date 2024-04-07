import { Routes, Route } from "react-router-dom";
import Signin from "../screens/signIn/SignIn";
import { Home } from "../screens/home/Home";
import { PostController } from "../screens/post/PostController";
import { EletricaController } from "../screens/post/eletrica/EletricaController";
import { TIController } from "../screens/post/ti/TIController";
import { EletronicaControlle } from "../screens/post/eletronica/EletronicaControlle";
import { MembersController } from "../screens/memberController/MembersController";
import { CadastroDeMembro } from "../screens/memberController/CadastroDeMembro";
import { PrivateRoutes } from "./privateRoutes";
export function AdmRouter() {
  return (
    <Routes>
      <Route
        element={
          <PrivateRoutes>
            <Home />
          </PrivateRoutes>
        }
        path="/"
      />
      <Route element={<Signin />} path="/login" />
    </Routes>
  );
}
