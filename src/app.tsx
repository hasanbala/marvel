import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { HeroDetails, Heroes, NotFound } from "./pages";
import "./styles/app.css";

export const App = () => {
  const [theme, setTheme] = useState("");

  return (
    <div className={`app ${theme}`}>
      <BrowserRouter>
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route exact path='/' element={<Heroes />} />
          <Route path='/details/:id' element={<HeroDetails />} />
          <Route element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
