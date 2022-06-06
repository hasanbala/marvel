import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "context/marvelContext";
import { fetchCharacter } from "api/fetchMarvelsApi";
import { MarvelState } from "types";
import "styles/herodetails.scss";

export const HeroDetails = () => {
  const { comics, loading, getComics, setLoading } = useContext(AppContext) as MarvelState;
  const [character, setCharacter] = useState<ICharacter[]>([]);
  const { id } = useParams();

  const getCharacter = (id: number) => {
    setLoading(true);
    fetchCharacter(id)
      .then((res) => setCharacter(res.data.results))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getComics(Number(id));
    getCharacter(Number(id));
  }, [id]);

  if (loading) {
    return (
      <div className="details-god">
        <div className="details">
          <div className="gotload">
            <div className="loading fa-8x">
              <i className="fas fa-spinner fa-spin"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="details-god">
      <div className="details">
        <div className="det-top">
          {character?.map((hero) =>
            hero.id == id ? (
              <div key={hero.id} className="det-data">
                <div>
                  <img
                    src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                    alt="Character Details"
                  />
                </div>
                <div className="det-header-god">
                  <div className="det-header">
                    <h2>{hero.name}</h2>
                    <p>
                      {!hero.description
                        ? "This character has no definition feature."
                        : hero.description}
                    </p>
                  </div>
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
              {comics.map((comic, index) => (
                <li key={index} className="gradientlist">
                  <div>
                    <img
                      src={`${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}`}
                      alt="Character Details"
                    />
                  </div>
                  <div className="grad-sub">
                    <h2>{comic.title}</h2>
                    <p>
                      <b>Description : </b> {comic.description ?? "NONE"}
                    </p>
                    <p>
                      <b>Page Count : </b> {comic.pageCount ?? "NONE"}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </main>
        </div>
      </div>
    </div>
  );
};

interface ICharacter {
  id: number | string;
  description: string;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}
