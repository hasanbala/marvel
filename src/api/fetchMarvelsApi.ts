const hash = "97defabe234af625aa4e65ac0c8c43e2";
const publicKey = "aa034f9786c1e61afb18565547046c8f";
const baseUrl = "https://gateway.marvel.com:443/v1/public/characters";

export const fetchCharacters = async (limit = 30, offset = 0) => {
  const response = await fetch(
    `${baseUrl}?limit=${limit}&offset=${offset}&ts=1&apikey=${publicKey}&hash=${hash}`,
    // `${baseUrl}?limit=${limit}&ts=1&apikey=${publicKey}&hash=${hash}`,
  );
  const data = await response.json();
  return data;
};

export const fetchComicsList = async (id: number) => {
  const response = await fetch(
    `${baseUrl}/${id}/comics?orderBy=onsaleDate&limit=10&ts=1&apikey=${publicKey}&hash=${hash}`,
  );
  const data = await response.json();
  return data;
};
