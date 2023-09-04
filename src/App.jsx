import Banner from "./components/banner/Banner";
import Client from "./components/client/Client";
import Delivery from "./components/delivery/Delivery";
import FindUs from "./components/find/FindUs";
import Form from "./components/form/Form";
import GetUpdate from "./components/getUpdate/GetUpdate";
import Navbar from "./components/navbar/Navbar";
import Service from "./components/service/Service";
import Testimonial from "./components/testimonial/Testimonial";

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Service />
      <Client />
      <Delivery />
      <Testimonial />
      <Form />
      <FindUs/>
      <GetUpdate/>
    </>
  );
};

export default App;
