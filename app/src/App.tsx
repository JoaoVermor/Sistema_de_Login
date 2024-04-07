import { AdmRouter } from "./routes";
import React, { useContext } from "react";
import AuthContext from "./context/auth";
import { AuthProvider } from "./context/auth";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
function App() {
  const { signed } = useContext(AuthContext);
  return (
    <AuthProvider>
      <AdmRouter />
    </AuthProvider>
  );
}

export default App;
