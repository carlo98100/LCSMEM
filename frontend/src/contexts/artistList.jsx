import { useEffect, useState, createContext } from "react";

const ArtistContext = createContext();

export const ArtistContextProvider = ({ children }) => {
  const [artists, setArtist] = useState([]);

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
        artists,
      }}
    >
      {children}
    </ArtistContext.Provider>
  );
};

export default ArtistContext;
