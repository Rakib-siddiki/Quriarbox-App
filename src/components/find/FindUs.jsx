import {
  HiOutlineLocationMarker,
  HiMail,
  HiOutlineClock,
  HiPhone,
} from "react-icons/hi";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";

const FindUs = () => {
  return (
    <>
      <section className="xl:pt-[169] xl:pb-28 pb-24 md:pb-20">
        <div className="p-5 xl:p-0">
          <div className="text-center">
            <h2 className="font-Oxanium font-bold text-xl  sm:text-3xl text-primary">
              FIND US
            </h2>
            <p className="font-Raleway font-extrabold xl:text-[39px] text-2xl sm:text-3xl text-third xl:mb-20 mb-6 sm:mb-10">
              Access us easily
            </p>
          </div>

          <div className="max-w-container mx-auto">
            <div className="sm:grid grid-cols-12 gap-x-4 md:gap-x-6">
              <div className="xl:col-span-8 col-span-6 mb-3 sm:mb-0">
                <iframe
                  className="rounded-md focus:border-0 focus:outline-none"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d466854.1502760993!2d89.949940179627!3d23.914497766934538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a55cd36f%3A0xfcc5b021faff43ea!2sCreative%20IT%20Institute!5e0!3m2!1sen!2sbd!4v1693803562348!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                ></iframe>
              </div>
              {/* right part start */}
              <div className=" col-span-6 xl:col-span-4 text-left xl:pl-20 xl:py-20 px-10 py-14  bg-[#FEFCFA] [backdrop-filter:blur(4px)] rounded-md">
                <p className="font-Raleway font-bold text-base md:tex-xl text-secondary md:mb-10 mb-5 sm:mb-7">
                  Contact with us
                </p>
                {/* ======================================  */}
                <div className="flex items-center ">
                  <HiOutlineLocationMarker className="text-[#FFAF0F] text-[27px]"></HiOutlineLocationMarker>
                  <p className="font-Raleway text-base text-[#5C5B6C] ml-3">
                    2277 Lorem Ave, San Diego, CA 22553
                  </p>
                </div>
                {/* ======================================  */}
                <div className="flex items-center my-[18px]">
                  <HiOutlineClock className="text-[#FFAF0F] text-4xl"></HiOutlineClock>
                  <p className="font-Raleway text-base text-[#5C5B6C] ml-3">
                    Monday - Friday: 10 am - 10pm Sunday: 11 am - 9pm
                  </p>
                </div>
                {/* ======================================  */}
                <div className="flex items-center">
                  <HiMail className="text-[#FFAF0F] text-[27px]"></HiMail>
                  <p className="font-Raleway text-base text-[#5C5B6C] ml-3">
                    info@quriarbox.com
                  </p>
                </div>
                {/* ======================================  */}
                <div className="flex gap-x-3 mt-10 md:mt-[51px]">
                  <AiFillFacebook className="text-2xl hover:text-[#F95C19] text-[#77777e] rounded-sm"></AiFillFacebook>
                  <AiFillTwitterSquare className="text-2xl hover:text-[#F95C19] text-[#77777e] rounded-sm"></AiFillTwitterSquare>
                  <AiFillInstagram className="text-2xl hover:text-[#F95C19] text-[#77777e] rounded-sm"></AiFillInstagram>
                </div>
              </div>
              {/* right part end  */}
            </div>
            <div className="text-center mt-2 xl:mt-0">
              <a
                href="#"
                className="xl:py-5 xl:px-28 py-4 px-10 sm:px-16 justify-center border border-primary inline-flex items-center xl:mt-10 xl:mb-12 rounded-md hover:text-primary font-Oxanium font-bold text-center lg:text-xl bg-primary hover:bg-white text-white duration-500 p-2 text-sm mt-2 md:mt-8"
              >
                <span className="mr-2 text-2xl lg:text-3xl ">
                  <HiPhone></HiPhone>
                </span>
                Call us to delivery 123-456789
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FindUs;
