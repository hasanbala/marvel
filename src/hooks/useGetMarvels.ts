import useSWR from "swr";

const hash = "97defabe234af625aa4e65ac0c8c43e2";
const publicKey = "aa034f9786c1e61afb18565547046c8f";
const baseUrl = "https://gateway.marvel.com:443/v1/public/characters";
const endPointUrl = `&ts=1&apikey=${publicKey}&hash=${hash}`;

interface IProps {
  path: string;
}

// fetchCharacters = ${baseUrl}  ?limit=30&offset=${offset}  &ts=1&apikey=${publicKey}&hash=${hash}

// fetchCharacter = ${baseUrl}  /${id}  &ts=1&apikey=${publicKey}&hash=${hash}

// fetchComicsList = ${baseUrl}  /${id}/comics?orderBy=onsaleDate&limit=10  &ts=1&apikey=${publicKey}&hash=${hash}
export const useGetMarvels = (path: string) => {
  if (!path) {
    throw new Error("path is required");
  }
  const url = baseUrl + path + endPointUrl;
  const { data, error } = useSWR(url);

  return { data, error };
};
