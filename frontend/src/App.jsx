import "./css/App.css";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "./Routes";
import { UserContextProvider } from "./contexts/UserContext";
import { EventContextProvider } from "./contexts/EventList";
import { ArtistContextProvider } from "./contexts/ArtistList";
import { VideoContextProvider } from "./contexts/VideoList";
import { TicketContextProvider } from "./contexts/TicketsList";
import RequireAuth from "./components/AuthCheck";
import RequiredTicket from "./components/RequiredTicket";

function App() {
  return (
    <UserContextProvider>
      <EventContextProvider>
        <ArtistContextProvider>
          <VideoContextProvider>
            <TicketContextProvider>
              <div className="container">
                <Nav />
                <Routes>
                  {AppRoutes.filter((route) => !route.requiredAuth).map((item, index) => (
                    <Route key={index} path={item.path} element={item.component} />
                  ))}
                  <Route element={<RequireAuth />}>
                    {AppRoutes.filter((route) => route.requiredAuth).map((item, index) => (
                      item.requiredTicket ?
                        <Route key={index} element={<RequiredTicket />}>
                          <Route path={item.path} element={item.component} />
                        </Route>
                        :
                        <Route key={index} path={item.path} element={item.component} />

                    ))}
                  </Route>
                </Routes>
              </div>
            </TicketContextProvider>
          </VideoContextProvider>
        </ArtistContextProvider>
      </EventContextProvider>
    </UserContextProvider>
  );
}

export default App;