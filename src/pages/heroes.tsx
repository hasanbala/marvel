import InfiniteScroll from "react-infinite-scroll-component";
import { useContext } from "react";
import { MarvelState } from "types";
import "styles/hereos.scss";
import { AppContext } from "@context/marvelContext";
import { Hero } from "@components/hero";

export const Heroes = () => {
  const { superheroes, getHeroes } = useContext(AppContext) as MarvelState;

  return (
    <div>
      <div className="products">
        <div className="products-sub">
          <InfiniteScroll
            dataLength={superheroes.length}
            next={() => getHeroes()}
            style={{ display: "flex", flexDirection: "column-reverse" }}
            hasMore={true}
            loader={<h4>{""}</h4>}>
            <div className="products-caption">
              {superheroes?.map((hero, index) => (
                <Hero key={index} id={hero.id} thumbnail={hero.thumbnail} name={hero.name} />
              ))}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
};
