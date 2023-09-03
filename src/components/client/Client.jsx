import trophy from "../../assets/images/client/trophy.svg";
import map from "../../assets/images/client/map.svg";
import man from "../../assets/images/client/man.svg";
import truck from "../../assets/images/client/truck.svg";
import businessBag from "../../assets/images/client/BusinessBag.svg";
const Client = () => {
  return (
    <>
      <section className="xl:pt-[184px] xl:pb-40 py-10 md:py-16">
        <div className="max-w-container mx-auto">
          <div className=" grid xl:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-y-6">
            {/* ==========================   */}
            <div className="text-center">
              <img className="mx-auto" src={trophy} alt="trophy" />
              <h2 className="font-Raleway lg:text-[39px] text-3xl font-extrabold text-primary">
                26+
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
                65+
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
                689K+
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
                130M+
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
                130M+
              </h2>
              <p className="font-Raleway text-xl font-bold text-secondary">
                Business hours
              </p>
            </div>
            {/* ========================== */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Client;
