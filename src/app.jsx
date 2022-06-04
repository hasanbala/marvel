import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MarvelCharacters, Navbar, NotFound } from "./pages";
import { CharacterDetails } from "./pages/characterDetails";
import "./styles/app.css";

export const App = () => {
  const [theme, setTheme] = useState("");

  return (
    <div className={`app ${theme}`}>
      <BrowserRouter>
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route exact path='/' element={<MarvelCharacters />} />
          <Route path='/details/' element={<CharacterDetails />} />
          <Route element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
