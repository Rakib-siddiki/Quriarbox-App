import Banner from "./components/banner/Banner";
import Client from "./components/client/Client";
import Navbar from "./components/navbar/Navbar";
import Service from "./components/service/Service";

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Service />
      <Client/>
    </>
  );
};

export default App;
