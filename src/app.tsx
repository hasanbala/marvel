import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@layout/navbar";
import { Heroes } from "@pages/heroes";
import { HeroDetails } from "@pages/heroDetails";
import { NotFound } from "@pages/notfound";

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
