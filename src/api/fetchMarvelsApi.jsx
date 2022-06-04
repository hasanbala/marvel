const hash = "2dfe9434980568f42a5b1eb7f9eda2c3";
const publicKey = "25b070950d02e470cbe6ac03af42aebf";
const baseUrl = "https://gateway.marvel.com:443/v1/public/characters";

// modifiedSince=2000-01-01&

export const GetCharacters = async (limit = 30) => {
  const response = await fetch(
    `${baseUrl}?limit=${limit}&ts=1&apikey=${publicKey}&hash=${hash}`
  );
  const data = await response.json();
  return data;
};

export const showCharacterDetails = async (id) => {
  const response = await fetch(
    `${baseUrl}/${id}?ts=1&apikey=${publicKey}&hash=${hash}`
  );
  const data = await response.json();
  return data;
};
