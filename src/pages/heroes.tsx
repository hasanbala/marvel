import { useEffect } from "react";
import { Hero } from "../components/hero";
import { useAppContext } from "../context";
import "../styles/hereos.css";

export const Heroes = () => {
  const { state, getHeroes } = useAppContext();

  useEffect(() => {
    getHeroes(30);
  }, []);

  return (
    <div className='products'>
      <div className='products-sub'>
        <div className='products-caption'>
          {state.superheroes?.map((hero) => (
            <Hero
              key={hero.id}
              id={hero.id}
              thumbnail={hero.thumbnail}
              name={hero.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
