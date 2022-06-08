import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HeroDetails, Heroes, NotFound } from "pages";
import { Navbar } from "layout";

export const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Heroes />} />
          <Route path="/details/:id" element={<HeroDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
