import { useContext, useEffect } from "react";
import { AppContext } from "context/marvelContext";
import { MarvelState } from "types";
import { Hero } from "components/hero";
import "styles/hereos.scss";

export const Heroes = () => {
  const { superheroes, getHeroes } = useContext(AppContext) as MarvelState;

  const handleScroll = (e: any): void => {
    const { innerHeight } = window;
    const { scrollTop } = e.target.documentElement;
    const { scrollHeight } = e.target.documentElement;
    if (
      scrollHeight >= innerHeight + scrollTop + 900 &&
      scrollHeight <= innerHeight + scrollTop + 1000
    ) {
      console.log("girdi");
      getHeroes(10);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="products">
        <div className="products-sub">
          <div className="products-caption">
            {superheroes?.map((hero, index) => (
              <Hero key={index} id={hero.id} thumbnail={hero.thumbnail} name={hero.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
