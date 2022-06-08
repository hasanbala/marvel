import InfiniteScroll from "react-infinite-scroll-component";
import { useContext } from "react";
import { AppContext } from "context";
import { MarvelState } from "types";
import { Hero } from "components";
import "styles/hereos.scss";

export const Heroes = () => {
  const { superheroes, getHeroes } = useContext(AppContext) as MarvelState;

  return (
    <div>
      <div className="products">
        <div className="products-sub">
          <InfiniteScroll
            dataLength={superheroes.length}
            next={() => getHeroes(superheroes.length)}
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
