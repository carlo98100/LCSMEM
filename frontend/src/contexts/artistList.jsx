import { useEffect, useState, createContext } from "react";

const ArtistContext = createContext();

export const ArtistContextProvider = ({ children }) => {
  const [artist, setArtist] = useState([]);

  useEffect(() => {
    fetchArtist();
  }, []);

  const fetchArtist = async () => {
    const response = await fetch("/data/Artist");
    const data = await response.json();
    console.log(data);
    setArtist(data);
  };

  return (
    <ArtistContext.Provider
      value={{
        artist,
      }}
    >
      {children}
    </ArtistContext.Provider>
  );
};

export default ArtistContext;
