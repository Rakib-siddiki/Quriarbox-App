import trophy from "../../assets/images/client/trophy.svg";
import map from "../../assets/images/client/map.svg";
import man from "../../assets/images/client/man.svg";
import truck from "../../assets/images/client/truck.svg";
import businessBag from "../../assets/images/client/BusinessBag.svg";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
const Client = () => {
  const [countStart, setCountStart] = useState(false);
  return (
    <>
      <ScrollTrigger
        onEnter={() => setCountStart(true)}
        onExit={() => setCountStart(false)}
      >
        <section className="xl:pt-[184px] xl:pb-40 py-10 md:py-16">
          <div className="max-w-container mx-auto">
            <div className=" grid xl:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-y-6">
              {/* ==========================   */}
              <div className="text-center">
                <img className="mx-auto" src={trophy} alt="trophy" />
                <h2 className="font-Raleway lg:text-[39px] text-3xl font-extrabold text-primary">
                  {countStart && <CountUp suffix="+" duration={2} end={26} />}
                </h2>
                <p className="font-Raleway text-xl font-bold text-secondary">
                  Awards won
                </p>
              </div>
              {/* ========================== */}
              {/* ==========================   */}
              <div className="text-center">
                <img className="mx-auto" src={map} alt="trophy" />
                <h2 className="font-Raleway lg:text-[39px] text-3xl font-extrabold text-primary">
                  {countStart && <CountUp suffix="+" duration={2} end={65} />}
                </h2>
                <p className="font-Raleway text-xl font-bold text-secondary">
                  States covered
                </p>
              </div>
              {/* ========================== */}
              {/* ==========================   */}
              <div className="text-center">
                <img className="mx-auto" src={man} alt="trophy" />
                <h2 className="font-Raleway lg:text-[39px] text-3xl  font-extrabold text-primary">
                  {countStart && <CountUp suffix="K+" duration={2} end={689} />}
                </h2>
                <p className="font-Raleway text-xl font-bold text-secondary">
                  Happy clients
                </p>
              </div>
              {/* ========================== */}
              {/* ==========================   */}
              <div className="text-center">
                <img className="mx-auto" src={truck} alt="trophy" />
                <h2 className="font-Raleway lg:text-[39px] text-3xl font-extrabold text-primary">
                  {countStart && <CountUp suffix="M+" duration={2} end={130} />}
                </h2>
                <p className="font-Raleway text-xl font-bold text-secondary">
                  Goods delivered
                </p>
              </div>
              {/* ========================== */}
              {/* ==========================   */}
              <div className="text-center col-span-2 sm:col-span-1">
                <img className="mx-auto" src={businessBag} alt="trophy" />
                <h2 className="font-Raleway lg:text-[39px] text-3xl font-extrabold text-primary">
                  {countStart && <CountUp suffix="M+" duration={2} end={130} />}
                </h2>
                <p className="font-Raleway text-xl font-bold text-secondary">
                  Business hours
                </p>
              </div>
              {/* ========================== */}
            </div>
          </div>
        </section>
      </ScrollTrigger>
    </>
  );
};

export default Client;
