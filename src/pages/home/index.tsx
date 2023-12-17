import SEO from "../../components/_coreComponent/seo";
import Carousel from "../../components/carousel";

const Home = () => {
  return (
    <div className="mt-28">
       <SEO
        title="Bileton"
        description="En son etkinliklerimizi keşfedin."
        url="http://localhost:5173"
      />
      <Carousel/>
    </div>
  );
};

export default Home;
