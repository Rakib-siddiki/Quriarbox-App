import { useState } from "react";
import qoute from "../../assets/images/testimonial/Quote-icon.svg";
import { FaStar } from "react-icons/fa";
import tImg from "../../assets/images/testimonial/testimonial_Img.png";

const Testimonial = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <>
      <section className="xl:pb-44 pb-16">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-start-3 col-end-11">
              <div className="flex items-center">
                <div>
                  <img src={qoute} alt="" />
                </div>
                <div className="xl:ml-[38px] ml-4 sm:ml-8 text-center">
                  <h2 className="font-Raleway xl:text-3xl text-2xl font-bold text-primary">
                    TESTIMONIAL
                  </h2>
                  <p className="font-Raleway font-bold sm:font-extrabold  text-sm  sm:text-2xl lg:text-[40px] text-[#11111D]">
                    Our Awesome Clients
                  </p>
                </div>
              </div>
              {/* =============================== */}
              <div className="bg-white rounded-2xl lg:px-10 lg:py-8 p-6 mt-2 sm:m-0 ">
                <h2 className="font-Raleway font-bold text-2xl text-primary">
                  Fantastic service!
                </h2>
                <p
                  onClick={handleClick}
                  className={`font-Raleway text-secondary text-base leading-6 ${
                    show == true ? "line-clamp-none" : "line-clamp-4"
                  } md:my-2 my-1`}
                >
                  I purchased a phone from an e-commerce site, and this courier
                  service provider assisted me in getting it delivered to my
                  home. I received my phone within one day, and I was really
                  satisfied with their service when I received it. They are
                  really quick and dependable. They give me with the option of
                  real-time delivery status, which allows me to track the
                  progress of my goods delivery. I get a lot of questions from
                  call center support and key account managers. They come highly
                  recommended. Confidently say that they are really reliable.
                </p>
                <div className="sm:flex justify-between sm:mt-6">
                  <div className="flex text-primary gap-x-2 my-2 sm:m-0">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <div className="sm:flex gap-x-3 items-center">
                    <div>
                      <h6 className="font-Raleway text-base font-semibold text-[#222132] sm:text-right">
                        Yves Tanguy
                      </h6>
                      <p className="font-Raleway font-normal text-base text-[#464558]">
                        Chief Executive, DLF
                      </p>
                    </div>
                    <div>
                      <img className="w-10 rounded-full" src={tImg} alt="..." />
                    </div>
                  </div>
                </div>
              </div>
              {/* =============================== */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
