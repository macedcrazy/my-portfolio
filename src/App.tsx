import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Routes } from "react-router-dom";

export const App: React.FC = () => {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <div style={{ padding: '2rem' }}>
          <Routes>            

          </Routes>
        </div>
      </Router>

    </ThemeProvider>
  );
}


