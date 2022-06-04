import { Link } from "react-router-dom";
import "../styles/marvelCharacters.css";

export const MarvelCharacters = () => {
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
          <div className='column'>
            <div className='column-images'>
              {/* <img
                  src={}
                  alt='Character Details'
                  height={280}
                  width={380}
                /> */}
            </div>
            <div className='column-heading'>{}</div>
            <div className='column-subheading'></div>
          </div>
        </div>
      </div>
    </div>
  );
};
