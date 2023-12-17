import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/notFound";
import MainLayout from "../layouts/main";
import Home from "../pages/home";
import Category from "../pages/category";
import EventDetail from "../components/eventDetail";
import EventsByLocation from "../components/Detail/location/index";
import Calendar from "../pages/calendar";
import Events from "../pages/events";
import Venue from "../pages/venue";
import Artist from "../pages/artist";
import EventsBycategory from "../components/category/eventsByCategory";
import TicketBuy from "../components/Detail/ticketBuy";
import EventsByArtist from "../components/Detail/artist/eventsByArtist";
import EventsByVenue from "../components/Detail/venue";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/venue",
        element: <Venue />,
      },
      {
        path: "/artist",
        element: <Artist />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/calendar",
        element: <Calendar />,
      },
      {
        path: "event/:name",
        element: <EventDetail />,
      },
      {
        path: "/ticket/:name",
        element: <TicketBuy />,
      },
      {
        path: "location/:name",
        element: <EventsByLocation />,
      },
      {
        path: "category/:name",
        element: <EventsBycategory />,
      },
      {
        path: "artist/:name",
        element: <EventsByArtist />,
      },
      {
        path: "venue/:name",
        element: <EventsByVenue />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
