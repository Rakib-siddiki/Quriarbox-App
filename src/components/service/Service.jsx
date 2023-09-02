import bussiness from "../../assets/images/service/bussiness-icon.svg";
import statewide from "../../assets/images/service/Statewide-icon.svg";
import personalService from "../../assets/images/service/personalService-icon.svg";

const Service = () => {
  return (
    <>
      <section className="xl:pt-40 xl:pb-0 py-10 px-2 xl:px-0">
        {/* title  */}
        <div className="text-center">
          <h3 className="font-Oxanium font-bold xl:text-3xl text-primary">
            SERVICES
          </h3>
          <p className="font-Raleway font-extrabold xl:text-[40px] text-[#11111D]">
            Our services for you
          </p>
        </div>
        {/* title  */}

        {/* card start */}
        <div className="max-w-container mx-auto xl:pt-20  pt-5">
          <div className="grid md:grid-cols-3  gap-x-6 gap-y-6 ">
            {/* card ==> 1 */}
            <div className="rounded-2xl bg-white py-10">
              <img
                className="xl:pt-16 mx-auto xl:pb-5"
                src={bussiness}
                alt="icon"
              />
              <h3 className="text-center text-secondary font-extrabold font-Raleway">
                Business Services
              </h3>
              <div className="xl:px-[60px] px-6 sm:pl-44 md:pl-5">
                <p className="w-72 md:w-auto text-card-p text-base leading-[23px] xl:pt-8 xl:pb-10 py-5">
                  We give you complete reliable delivery for your company. We
                  will take full responsibility of the deliveries.
                </p>
                {/* list */}
                <div className="relative text-card-p text-base ">
                  <div className="after:content[*] w-2 h-2 rounded-full bg-primary absolute top-2 left-0"></div>
                  <p className="ml-4">Corporate goods</p>
                </div>
                <div className="relative text-card-p text-base xl:my-3 font-Raleway">
                  <div className="after:content[*] w-2 h-2 rounded-full bg-primary absolute top-2 left-0"></div>
                  <p className="ml-4">Shipment</p>
                </div>
                <div className="relative text-card-p text-base font-Raleway">
                  <div className="after:content[*] w-2 h-2 rounded-full bg-primary absolute top-2 left-0"></div>
                  <p className="ml-4">Accesories</p>
                </div>
                {/* list */}
                <a
                  href="#"
                  className="xl:py-3 xl:px-24 border border-primary inline-block xl:mt-[72px] xl:mb-12 rounded-md text-primary font-Oxanium font-bold lg:text-xl hover:bg-primary hover:text-white duration-500 p-2 text-sm mt-6"
                >
                  Learn more
                </a>
              </div>
            </div>
            {/* card ==> 1*/}

            {/* card ==> 2 */}
            <div className="rounded-2xl bg-white py-10">
              <img
                className="xl:pt-16 mx-auto xl:pb-5"
                src={statewide}
                alt="icon"
              />
              <h3 className="text-center text-secondary font-extrabold font-Raleway">
                Statewide Services
              </h3>
              <div className="xl:px-[60px] px-6 sm:pl-44 md:pl-5">
                <p className="w-72 md:w-auto text-card-p text-base leading-[23px] xl:pt-8 xl:pb-10 py-5">
                  Offering home delivery around the city, where your products
                  will be at your doorstep within 48-72 hours.
                </p>
                {/* list */}
                <div className="relative text-card-p text-base ">
                  <div className="after:content[*] w-2 h-2 rounded-full bg-primary absolute top-2 left-0"></div>
                  <p className="ml-4">Personal items</p>
                </div>
                <div className="relative text-card-p text-base xl:my-3 font-Raleway">
                  <div className="after:content[*] w-2 h-2 rounded-full bg-primary absolute top-2 left-0"></div>
                  <p className="ml-4">Percels</p>
                </div>
                <div className="relative text-card-p text-base font-Raleway">
                  <div className="after:content[*] w-2 h-2 rounded-full bg-primary absolute top-2 left-0"></div>
                  <p className="ml-4">Documents</p>
                </div>
                {/* list */}
                <a
                  href="#"
                  className="xl:py-3 xl:px-24 border border-primary inline-block xl:mt-[72px] xl:mb-12 rounded-md text-primary font-Oxanium font-bold lg:text-xl hover:bg-primary hover:text-white duration-500 p-2 text-sm mt-6"
                >
                  Learn more
                </a>
              </div>
            </div>
            {/* card ==> 2*/}

            {/* card ==> 3 */}
            <div className="rounded-2xl bg-white py-10">
              <img
                className="xl:pt-16 mx-auto xl:pb-5"
                src={personalService}
                alt="icon"
              />
              <h3 className="text-center text-secondary font-extrabold font-Raleway">
                Personal Services
              </h3>
              <div className="xl:px-[60px] px-6 sm:pl-44 md:pl-5">
                <p className="w-72 md:w-44 lg:w-auto text-card-p text-base leading-[23px] xl:pt-8 xl:pb-10 py-5">
                  You can trust us to safely deliver your most sensitive
                  documents to the specific area in a short time.
                </p>
                {/* list */}
                <div className="relative text-card-p text-base ">
                  <div className="after:content[*] w-2 h-2 rounded-full bg-primary absolute top-2 left-0"></div>
                  <p className="ml-4"> Gifts</p>
                </div>
                <div className="relative text-card-p text-base xl:my-3 font-Raleway">
                  <div className="after:content[*] w-2 h-2 rounded-full bg-primary absolute top-2 left-0"></div>
                  <p className="ml-4">Package</p>
                </div>
                <div className="relative text-card-p text-base font-Raleway">
                  <div className="after:content[*] w-2 h-2 rounded-full bg-primary absolute top-2 left-0"></div>
                  <p className="ml-4">Documents</p>
                </div>
                {/* list */}
                <a
                  href="#"
                  className="xl:py-3 xl:px-24 border border-primary inline-block xl:mt-[72px] xl:mb-12 rounded-md text-primary font-Oxanium font-bold lg:text-xl hover:bg-primary hover:text-white duration-500 p-2 text-sm mt-6"
                >
                  Learn more
                </a>
              </div>
            </div>
            {/* card ==> 3*/}
          </div>
        </div>
        {/* card end */}
      </section>
    </>
  );
};

export default Service;
