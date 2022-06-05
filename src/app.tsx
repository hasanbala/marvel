import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HeroDetails, Heroes, NotFound } from "pages/index";
import { Navbar } from "components/navbar";
import "styles/app.scss";

export const App = () => {
  const [theme, setTheme] = useState<string>("");

  return (
    <div className={`app ${theme}`}>
      <BrowserRouter>
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Heroes />} />
          <Route path="/details/:id" element={<HeroDetails />} />
          <Route path="*" element={<NotFound theme={theme} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
