import Union from "../img/Union.png";
import banana from "../img/banana.png";
import tomato from "../img/tomato.png";
import img1 from "../img/img1.png";
import img2 from "../img/img2.png";

const Hero = () => {
  return (
    <main>
      <div className="flex flex-col lg:flex-row mt-12 sm:mt-20 lg:mt-25 items-center gap-8 lg:gap-10">
        <div className="shrink-0 self-start lg:self-center">
          <img className="w-20 max-sm:hidden lg:w-25" src={Union} alt="" />
        </div>

        <div className="w-full max-w-150 px-4 sm:px-8 lg:px-0 text-center lg:text-left">
          <p className="text-3xl sm:text-4xl lg:text-5xl">Premium <span className="text-[#FC8019]">quality</span></p>

          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-2 text-3xl sm:text-4xl lg:text-5xl py-4 sm:py-5">
            <span>Food for your</span>

            <img className="w-14 sm:w-16 lg:w-20" src={banana} alt="" />

            <span className="text-[#FC8019]">healthy</span>
          </div>

          <div className="flex justify-center lg:justify-start items-center gap-2 text-3xl sm:text-4xl lg:text-5xl">
            <img className="w-14 sm:w-16 lg:w-20" src={tomato} alt="" />
            <span className="text-[#FC8019]">& Daily Life</span>
          </div>

          <p className="w-full max-w-130 text-[12px] text-[#404040] py-6 sm:py-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <input
              type="text"
              placeholder="Enter your delivery location"
              className="text-[12px] min-w-full lg:min-w-100 h-9 border border-[#808080] rounded px-2 outline-none"
            />

            <button className="bg-black text-white w-full sm:w-25 h-9 rounded text-sm shrink-0">
              Get Started
            </button>
          </div>

          <p className="text-[12px] py-5">Popular cities in India</p>

          <ul className="flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-2 text-[12px]">
            <li>Hyderabad</li>
            <li>Chennai</li>
            <li>Mumbai</li>
            <li>Bangalore</li>
            <li>Delhi</li>
            <li>Kolkata</li>
          </ul>
        </div>

        {/* Hero images */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 w-full lg:w-auto px-4">
          <img className="w-40 sm:w-55 lg:w-65 xl:w-75" src={img1} alt="" />

          <img className="w-32 sm:w-44 lg:w-52 xl:w-60" src={img2} alt="" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
