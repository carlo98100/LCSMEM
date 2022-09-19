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
    console.log(data);
    setArtists(data);
  };

  return (
    <ArtistContext.Provider
      value={{
        artists,
      }}
    >
      {children}
    </ArtistContext.Provider>
  );
};

export default ArtistContextProvider;
