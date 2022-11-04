import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCharacter } from "api";
import { MarvelState } from "types";
import "styles/heroDetails.scss";
import useSWR from "swr";
import { HeroDetail } from "@components/heroDetail";
import { useGetMarvels } from "@hooks/useGetMarvels";

export const HeroDetails = () => {
  const [character, setCharacter] = useState<ICharacter[]>([]);
  const { id } = useParams();

  const endPointCharacterDetails = `/${id}`;
  const endPointComicsList = `/${id}/comics?orderBy=onsaleDate&limit=10`;
  const { data, error } = useGetMarvels(endPointCharacterDetails);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const { results } = data.data;
  console.log(results);
  return (
    <div className="details-god">
      <div className="details">
        <div className="det-top">
          {results?.map(
            (hero: any) =>
              hero.id === Number(id) && (
                <HeroDetail
                  key={hero.id}
                  id={hero.id}
                  name={hero.name}
                  description={hero.description}
                  thumbnail={hero.thumbnail}
                />
              ),
          )}
        </div>
        {/* <div className="det-sub">
          <h2>Comics Lists</h2>
          <main>
            <ol className="gradient-list">
              {comics.map((comic) => (
                <ComicDetail
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
        </div> */}
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
