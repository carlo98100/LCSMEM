import "./css/App.css";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import { AppRoutes } from "./Routes";
import UserContextProvider from "./contexts/UserContext";
import { EventContextProvider } from "./contexts/EventList";
import { ArtistContextProvider } from "./contexts/ArtistList";
import { VideoContextProvider } from "./contexts/VideoList";

function App() {
  return (
    <UserContextProvider>
      <EventContextProvider>
        <ArtistContextProvider>
          <VideoContextProvider>
            <div className="container">
              <Nav />
              <Routes>
                {AppRoutes.map((item, index) => (
                  <Route key={index} path={item.path} element={item.component} />
                ))}
              </Routes>
            </div>
          </VideoContextProvider>
        </ArtistContextProvider>
      </EventContextProvider>
    </UserContextProvider>
  );
}

export default App;