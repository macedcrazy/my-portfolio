import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import { Header } from "./components/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Profile } from "./components/Profile";
import { Skills } from "./components/Skills";

export const App: React.FC = () => {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <div style={{ padding: '2rem' }}>
          <Routes>
            <Route path="/"  element={<Profile />}  /> 
            <Route path="/skills"  element={<Skills />}  />            

          </Routes>
        </div>
      </Router>

    </ThemeProvider>
  );
}


