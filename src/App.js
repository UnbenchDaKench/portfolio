import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.scss";
import { createTheme, ThemeProvider, Box } from "@mui/material";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Experience from "./pages/experience/Experience";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingSquares from "./components/loadingSquares/LoadingSquares";
import Navbar from "./components/navbar/Navbar";
import { useLocation } from "react-router-dom";

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
    text: {
      body: "#869ba9"
    }
  },
});

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/About",
    component: About,
  },
  {
    path: "/Experience",
    component: Experience,
  },
  {
    path: "/Projects",
    component: Projects,
  },
  {
    path: "/Contact",
    component: Contact,
  },
];
function App() {
const [isHome, setIsHome] = useState(false)
const [pageIsChanged, setPageIsChanged] = useState(false)
// const location = useLocation()

const handleHomePage = (value) => {
  setIsHome(value);
}
const handlePageTransition = (value) => {
  setPageIsChanged(value);
}

useEffect(() => {
  // if(location.pathname === "/"){
  //   setIsHome(true)
  // }
}, [])

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          {!isHome && <Navbar handlePageTransition={handlePageTransition}/>}
          <LoadingSquares />
          <Routes>
            {routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={<route.component handleHomePage={handleHomePage} isHome={isHome} pageIsChanged={pageIsChanged}/>}
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
