import contactLogo from "../../assets/images/contact/contact-logo.svg";

const Contact = () => {
  return (
    <>
      <section className="bg-[#2F2E41]">
        <div className="max-w-container mx-auto xl:py-16 p-5">
          <div className="md:grid grid-cols-12">
            <div className="col-span-6 md:col-span-4">
              <img src={contactLogo} alt="logo" />
              <p className="w-60 font-Raleway font-semibold text-base text-[#9291A1] xl:mt-3">
                The most trusted Courier company in your area.
              </p>
            </div>
            <div className="flex justify-between md:col-span-8 lg:col-span-6 mt-3">
              {/* ================lists 1 ============= */}
              <div className="col-span-2">
                <p className="font-Oxanium font-bold  sm:text-xl text-white xl:mb-5">
                  Other links
                </p>
                <ul>
                  <li className="font-Raleway font-semibold text-sm xm:text-base text-[#9291A1] mb-2">
                    Blogs
                  </li>
                  <li className="font-Raleway font-semibold text-sm sm:text-base text-[#9291A1] mb-2">
                    Movers website
                  </li>
                  <li className="font-Raleway font-semibold text-sm sm:text-base text-[#9291A1] mb-2">
                    Traffic Update
                  </li>
                </ul>
              </div>
              {/* ================lists 1 ============= */}

              {/* ================lists 2 ============= */}
              <div className="col-span-2 mx-2">
                <p className="font-Oxanium font-bold sm:text-xl text-white xl:mb-5">
                  Services
                </p>
                <ul>
                  <li className="font-Raleway font-semibold text-sm sm:text-base text-[#9291A1] mb-2">
                    Corporate goods
                  </li>
                  <li className="font-Raleway font-semibold text-sm sm:text-base text-[#9291A1] mb-2">
                    Artworks
                  </li>
                  <li className="font-Raleway font-semibold text-sm sm:text-base text-[#9291A1] mb-2">
                    Documents
                  </li>
                </ul>
              </div>
              {/* ================lists 2============= */}

              {/* ================lists 3============= */}
              <div className="col-span-2">
                <p className="font-Oxanium font-bold sm:text-xl text-white xl:mb-5">
                  Customer Care
                </p>
                <ul>
                  <li className="font-Raleway font-semibold text-sm sm:text-base text-[#9291A1] mb-2">
                    About Us
                  </li>
                  <li className="font-Raleway font-semibold text-sm sm:text-base text-[#9291A1] mb-2">
                    Contact US
                  </li>
                  <li className="font-Raleway font-semibold  sm:text-base text-[#9291A1] mb-2">
                    Get Update
                  </li>
                </ul>
              </div>
              {/* ================lists 3============= */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
