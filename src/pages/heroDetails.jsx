import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context";
import "../styles/hereos.css";

export const HeroDetails = () => {
  const { state, getComics } = useAppContext();
  const { id } = useParams();

  useEffect(() => {
    getComics(id);
  }, [id]);

  return (
    <div className='products'>
      <div>
        {state.superheroes?.map((hero) =>
          hero.id == id ? (
            <div key={hero.id}>
              <h2>{hero.name}</h2>
              <img
                src={`${hero.thumbnail.path}/portrait_uncanny.${hero.thumbnail.extension}`}
                alt='Character Details'
                height={280}
                width={380}
              />
              <p>
                {!hero.description
                  ? "This character has no definition feature."
                  : hero.description}
              </p>
            </div>
          ) : (
            ""
          )
        )}
      </div>
      <div className='products-sub'>
        <div className='products-caption'>
          {state.comics?.map((comic) => (
            <div className='column' key={comic.id}>
              <div className='column-heading'>{comic.title}</div>
              <div className='column-subheading'>{comic.pageCount}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
