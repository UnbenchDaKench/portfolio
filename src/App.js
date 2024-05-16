import logo from "./logo.svg";
import "./App.scss";
import { createTheme, ThemeProvider, Box } from "@mui/material";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingSquares from "./components/loadingSquares/LoadingSquares";
import Navbar from "./components/navbar/Navbar";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0A1828",
    },
    secondary: {
      main: "#178582",
    },
    tertiary: {
      main: "#BFA181",
    },
  },
});

const routes = [
  {
    path: "/",
    component: Home,
  },
];
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Navbar />
          <LoadingSquares />
          <Routes>
            {routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={<route.component />}
                />
              );
            })}
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
