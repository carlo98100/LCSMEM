import { useEffect, useState, createContext } from "react";

 export const ArtistContext = createContext();

export const ArtistContextProvider = ({ children }) => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    fetchArtists();
  }, []);

  const fetchArtists = async () => {
    const response = await fetch("/data/Artist");
    const data = await response.json();
    setArtists(data);
  };

    console.log(artists);
  return (
    <ArtistContext.Provider
      value={{
        artists
      }}
    >
      {children}
    </ArtistContext.Provider>
  );
};
