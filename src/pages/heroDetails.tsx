import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "context/marvelContext";
import "styles/herodetails.scss";

export const HeroDetails = () => {
  // const { state, getComics, loading } = useAppContext();
  // const { id } = useParams();

  // useEffect(() => {
  //   getComics(id);
  // }, [id]);

  // if (loading) {
  //   return (
  //     <div className="details-god">
  //       <div className="details">
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
    <div className="details-god">
      {/* <div className="details">
        <div className="det-top">
          {state.superheroes?.map((hero) =>
            hero.id == id ? (
              <div key={hero.id} className="det-data">
                <div>
                  <img
                    src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                    alt="Character Details"
                  />
                </div>
                <div className="det-header">
                  <h2>{hero.name}</h2>
                  <p>
                    {!hero.description
                      ? "This character has no definition feature."
                      : hero.description}
                  </p>
                </div>
              </div>
            ) : (
              ""
            ),
          )}
        </div>
        <div className="det-sub">
          <h2>Comics Lists</h2>
          <main>
            <ol className="gradient-list">
              {state.comics?.map((comic) => (
                <li key={comic.id}>
                  <h2>{comic.title}</h2>
                </li>
              ))}
            </ol>
          </main>
        </div>
      </div> */}
    </div>
  );
};

interface HProps {
  id: number | string;
  description: string;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

interface CProps {
  id: number;
  title: string;
  pageCount: number;
}
