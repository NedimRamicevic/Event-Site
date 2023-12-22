import { Outlet } from "react-router-dom";
import Header from "../../components/navigation";
import Footer from "../../components/navigation/footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategories } from "../../redux/categorySlice";
import { fetchEvents } from "../../redux/eventsSlice";
import { fetchVenues } from "../../redux/venuesSlice";
import { fetchArtists } from "../../redux/artistsSlice";

const MainLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("MainLayout");
    dispatch(fetchCategories());
    dispatch(fetchEvents());
    dispatch(fetchVenues());
    dispatch(fetchArtists());
  }, [dispatch]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
