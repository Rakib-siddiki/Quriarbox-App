import formImg from "../../assets/images/form/from-img.png";
import { FaRegPaperPlane } from "react-icons/fa";

const Form = () => {
  return (
    <>
      <section className="max-w-container mx-auto xl:pb-40 pb-6 sm:pb-16 md:pb-18">
        <div className="grid  sm:grid-cols-12 p-4 sm:p-0">
          <div className="sm:col-start-3 sm:col-span-8 sm:col-end-11">
            <div className="flex">
              {/* left start */}
              <div className="w-1/2 text-center sm:text-left">
                <img src={formImg} alt="..." />
                <h4 className="font-Oxanium font-bold text-sm sm:text-xl md:text-2xl text-primary">
                  REQUEST A CALLBACK
                </h4>
                <h2 className=" font-Raleway font-extrabold xl:text-4xl lg:text-3xl md:text-2xl text-sm sm:text-xl text-third lg:mt-4 lg:mb-2 my-1">
                  We will contact in the shortest time.
                </h2>
                <p className="font-Raleway font-semibold text-[12px] sm:text-base  text-[#9291A1]">
                  Monday to Friday, 9am-5pm.
                </p>
              </div>
              {/* left end */}

              {/* right start  */}
              <div className="w-1/2 ml-2 md:mt-4 lg:mt-6 ">
                <div className="flex flex-col gap-y-2 sm:gap-y-4 ">
                  <input
                    className="bg-transparent text-third border border-[#C5C5D2] rounded-lg xl:py-4 lg:py-3 lg:pl-5 py-2 pl-3 placeholder:font-Raleway text-sm md:text-base sm:placeholder:text-base placeholder:text-[#9291A1] focus:border-2 focus:outline-none "
                    type="text"
                    placeholder="Name"
                  />
                  <input
                    className="bg-transparent text-third border border-[#C5C5D2] rounded-lg xl:py-4 lg:py-3 lg:pl-5 py-2 pl-3 placeholder:font-Raleway text-sm md:text-base sm:placeholder:text-base placeholder:text-[#9291A1] focus:border-2 focus:outline-none "
                    type="text"
                    placeholder="Email"
                  />
                  <textarea
                    className="bg-transparent text-third border border-[#C5C5D2] rounded-lg xl:py-4 lg:py-3 lg:pl-5  py-2 pl-3 placeholder:font-Raleway text-sm md:text-base sm:placeholder:text-base placeholder:text-[#9291A1] focus:border-2 focus:outline-none h-16 sm:h-28 md:h-32 lg:h-[154px] "
                    placeholder="Message"
                    type="text"
                  ></textarea>
                  <a
                    href="#"
                    className="xl:py-3 justify-center border border-primary inline-flex items-center xl:mt-10 xl:mb-12 rounded-md hover:text-primary font-Oxanium font-bold text-center lg:text-xl bg-primary hover:bg-white text-white duration-500 p-2 text-sm mt-2 md:mt-8"
                  >
                    Send Message
                    <span className="xl:ml-4 ml-2 lg:ml-3">
                      <FaRegPaperPlane />
                    </span>
                  </a>
                </div>
              </div>
              {/* right end */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
