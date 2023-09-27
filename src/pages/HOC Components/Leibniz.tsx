import "../../App.css"
import Knob from "../../assets/Leb_Knob.svg"
import KnobArrow from "../../assets/Leb_KnobArrow.svg";
import Rotatable from "../../assets/Leb_Rotatable.svg";

type PropType = {
  nextFunc: React.MouseEventHandler<HTMLButtonElement> | undefined;
  prevFunc: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

function Leibniz({ nextFunc, prevFunc }:PropType) {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="p-24">
          <h1 className="text-4xl font-semibold">
            Leibniz’ (libe·nuhts )Machine - 1674
          </h1>
          <p className="text-xl mt-12 space-y-4">
            Step Reckoner, a calculating machine designed (1671) and built
            (1673) by the German mathematician- philosopher Gottfried Wilhelm
            von Leibniz. The Step Reckoner expanded on the French mathematician-
            philosopher Blaise Pascal's ideas and did multiplication by repeated
            addition and shifting. 4
          </p>
          <button
            onClick={prevFunc}
            className="bg-[#2B78E4] w-[200px] h-[65px] text-2xl text-white mt-12"
          >
            Previous Slide
          </button>
          <button
            onClick={nextFunc}
            className="bg-[#2B78E4] ml-12 w-[200px] h-[65px] text-2xl text-white mt-12"
          >
            Next Slide
          </button>
        </div>
        <div id="leibniz-machine" className="p-24">
          <h3 className="text-center text-2xl mb-4 w-[620px]">Top View</h3>
          <div className="w-[620px] h-[42px] bg-[#757575]">
            <div className="lebNums">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="flex items-center mt-12">
            <div className="w-[432px] h-[147px] bg-[#D9D9D9] flex justify-center gap-[42px] items-center">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  className="flex justify-center items-center"
                  key={"leb-" + i}
                >
                  <img src={Knob} width={86} alt="" />
                  <img src={KnobArrow} className="absolute" alt="" />
                </div>
              ))}
            </div>
            <div className="w-[183px] h-[183px] bg-[#D9D9D9]"></div>
          </div>
          <h3 className="text-center text-2xl w-[620px]">Front View</h3>
          <div className="w-[620px] mt-4 h-[180px] flex justify-center items-center bg-[#D9D9D9]">
            <div className="w-[144px] h-[144px] rounded-full bg-[#202020] flex justify-center items-center">
              <img src={Rotatable} className="origin-top mt-[60px]" alt="" />
              <div className="w-[18px] h-[18px] bg-[#575757] absolute"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Leibniz;
