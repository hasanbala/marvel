import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HeroDetail, ComicDettail } from "components";
import { AppContext } from "context";
import { fetchCharacter } from "api";
import { MarvelState } from "types";
import "styles/heroDetails.scss";

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
            hero.id === Number(id) ? (
              <HeroDetail
                key={hero.id}
                id={hero.id}
                name={hero.name}
                description={hero.description}
                thumbnail={hero.thumbnail}
              />
            ) : (
              ""
            ),
          )}
        </div>
        <div className="det-sub">
          <h2>Comics Lists</h2>
          <main>
            <ol className="gradient-list">
              {comics.map((comic) => (
                <ComicDettail
                  key={comic.id}
                  description={comic.description}
                  thumbnail={comic.thumbnail}
                  id={Number(comic.id)}
                  pageCount={Number(comic.pageCount)}
                  title={comic.title}
                />
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
