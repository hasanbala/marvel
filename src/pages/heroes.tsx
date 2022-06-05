import { useEffect, useRef } from "react";
import { Hero } from "components/hero";
import { useAppContext } from "context/marvelContext";
import "styles/hereos.scss";

export const Heroes = () => {
  const { state, getHeroes, loading } = useAppContext();

  const myRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getHeroes(30, 0);
  }, []);

  useEffect(() => {
    const node = myRef?.current;
    if (node) {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          getHeroes(35, 10);
        }
      });
      observer.observe(node);
    }
  }, []);

  // if (loading) {
  //   return (
  //     <div className="products">
  //       <div className="products-sub">
  //         <div className="gotload">
  //           <div className="loading fa-8x">
  //             <i className="fas fa-spinner fa-spin"></i>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="products">
      <div className="products-sub">
        <div className="products-caption">
          {state.superheroes?.map((hero) => (
            <Hero key={hero.id} id={hero.id} thumbnail={hero.thumbnail} name={hero.name} />
          ))}
        </div>
      </div>
      <div ref={myRef}>asdgfdsafgeds</div>
    </div>
  );
};
