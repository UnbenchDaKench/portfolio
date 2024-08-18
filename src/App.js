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
import Footer from "./components/footer/Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0A1828",
      light: "#132e4d",
    },
    secondary: {
      main: "#178582",
    },
    tertiary: {
      main: "#BFA181",
      dark: "#95714b",
    },
    text: {
      body: "#869ba9",
    },
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
function AppContent() {
  const [isHome, setIsHome] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsHome(location.pathname === "/");
  }, [location]);

  

  return (
    <>
      {!isHome && <Navbar  />}
      {isHome && <LoadingSquares />}
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
      {!isHome && <Footer />}
    </>
  );
}
function App() {

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <AppContent />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
