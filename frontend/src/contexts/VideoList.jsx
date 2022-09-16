import { useEffect, useState, createContext } from "react";

const VideoContext = createContext();

export const VideoContextProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const response = await fetch("/data/videos");
    const data = await response.json();
    console.log(data);
    setVideos(data);
  };

  return (
    <VideoContext.Provider
      value={{
        videos
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export default VideoContext;