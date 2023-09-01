import bannerImg from '../../assets/images/Nav&Banner/banner image.png'
import couldShape from '../../assets/images/Nav&Banner/cloudShape.png'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Banner = () => {
  return (
    <>
      <section className="max-w-container mx-auto">
        
        <div className="flex py-6 px-5 md:p-0 relative">
            {/* shape  */}
        <img className='hidden xl:block absolute top-[496px] -right-16' src={couldShape} alt="..." />
        {/* shape  */}
          {/* left part start */}
          <div className=" w-2/5 xl:mt-52 md:py-16">
            <div className="md:ml-5 xl:m-0 md:mt-10">
            <h1 className="w-52 text-xl sm:text-2xl sm:w-60 md:w-80 md:text-3xl  xl:w-[500px] xl:text-[49px] font-Raleway font-extrabold xl:leading-[58px] text-[#261134] "><span className="font-normal ">A trusted provider of</span> courier services.</h1>
            <p className='text-secondary xl:text-xl font-Raleway font-normal xl:w-80 xl:mt-4 w-62 my-2 md:my-4 text-sm'  >We deliver your products safely to your home in a reasonable time.</p>
            <a className='inline-flex items-center xl:text-xl font-Oxanium font-semibold text-white bg-primary rounded-md xl:py-3 xl:px-5 xl:mt-10 p-2 hover:bg-[#FFE4D9] hover:text-primary duration-500' href="#">Get started <span className='ml-2'><AiOutlineArrowRight/></span> </a>
            </div>
          </div>
          {/* left part end */}

          {/* right part start */}
          <div className=" md:w-4/5 md:py-16  xl:mt-[170px] bg-banner-bg sm:bg-none bg-center bg-contain bg-no-repeat w-full h-vh">
            <img className=' hidden sm:block' src={bannerImg} alt="banner-image" />
            
          </div>
.          {/* right part start */}
        </div>
      </section>
    </>
  );
};

export default Banner;
