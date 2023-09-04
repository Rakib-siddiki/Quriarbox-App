const GetUpdate = () => {
  return (
    <>
      <section className="bg-third xl:py-20 py-10 px-5">
        <div className="max-w-container mx-auto">
          <div className="lg:flex xl:justify-between ">
            {/* =========left===== */}
            <div>
              <h2 className="font-Raleway font-extrabold text-4xl text-white">
                Get an update every week
              </h2>
              <p className="font-Raleway text-base text-[#C5C5D2] max-w-lg font-normal mt-3">
                We ensure that your product is delivered in the safest possible
                manner, at the correct location, at the right time.
              </p>
            </div>
            {/* =========left===== */}
            {/* ==========right=========  */}
            <div className="xl:ml-16 ">
              <p className="font-Oxanium font-bold text-lg text-primary mt-2">
                SUBSCRIBE TO NEWSLETTER
              </p>
              <div>
                <input
                  className="bg-transparent text-white mr-4  border border-[#C5C5D2] focus:outline-none  py-3 px-5 xl:w-96 w-80 rounded-md  sm:mt-3 xl:mt-4 my-4 "
                  type="text"
                  placeholder="Enter your mail"
                />
                <a
                  className="hover:border-primary hover:border-2  border-2 border-primary inline-block items-center xl:text-xl font-Oxanium font-semibold text-white bg-primary rounded-md xl:py-3 xl:px-5 md:py-3 sm:px-5 py-2.5 px-7 hover:bg-[#FFE4D9] hover:text-primary duration-500"
                  href="#"
                >
                  Subscribe
                </a>
              </div>
            </div>
            {/* ==========right=========  */}
          </div>
        </div>
      </section>
    </>
  );
};

export default GetUpdate;
