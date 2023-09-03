import playIcon from "../../assets/images/delivery/play-Icon.svg";

const Delivery = () => {
  return (
    <>
      <section className="  max-w-container mx-auto xl:pb-44 pb-16 p-5 xl:p-0 ">
        <div className="bg-delivery-bg bg-no-repeat  bg-cover rounded-2xl">
          <div className="xl:pt-32 xl:pb-[168px] py-20 bg-[#0A090DCC] rounded-2xl p-5">
            <div className="text-center">
              <img
                className="mx-auto scale-75 xl:scale-100 "
                src={playIcon}
                alt="..."
              />
              <h2 className="font-Oxanium font-bold text-2xl sm:text-3xl text-primary xl:mt-5  md:mt-2 ">
                FASTEST DELIVERY
              </h2>
              <p className="font-Raleway font-normal md:w-80 xl:w-[500px] lg:text-xl text-[16px] xl:mt-[28px] mt-2 text-white mx-auto  ">
                You can get your valuable item in the fastest period of time
                with safety. Because your emergency is our first priority.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Delivery;
