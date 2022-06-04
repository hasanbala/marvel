import { Link } from "react-router-dom";
import { AppUseContext } from "../context";
import "../styles/marvelCharacters.css";

export const MarvelCharacters = () => {
  const { state } = AppUseContext();

  const Loader = () => {
    return (
      <div className='pokemon-spinner-column'>
        <div className='pokemon-spinner'>
          <i className='fa-solid fa-spinner'></i>
        </div>
      </div>
    );
  };

  return (
    <div className='products'>
      <div className='products-sub'>
        <div className='products-caption'>
          {state.superheroes.map((character) => (
            <div className='column' key={character.id}>
              <div className='column-images'>
                <img
                  src={
                    character.thumbnail.extension === "jpg"
                      ? `${character.thumbnail.path}/portrait_uncanny.jpg`
                      : `${character.thumbnail.path}/portrait_uncanny.gif`
                  }
                  alt='Character Details'
                  height={280}
                  width={380}
                />
              </div>
              <div className='column-heading'>{character.name}</div>
              <div className='column-subheading'></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
