import Knob from "../../assets/KnobNoRotatable.svg";
import Rotatable from "../../assets/KnobRotatable.svg";
import { useState } from "react";

type PropType = {
  nextFunc: React.MouseEventHandler<HTMLButtonElement> | undefined;
  prevFunc: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

function Pascaline({ nextFunc, prevFunc }: PropType) {
  const [pascalineArray, setPascalineArray] = useState([0, 0, 0, 0]);
  const [knobRotation, setKnobRotation] = useState([0, 0, 0, 0]);

  const handlePlus = (index: number) => {
    if (pascalineArray[index] <= 9) {
      setKnobRotation((prev) => {
        const arr = [...prev];
        arr[index] += 72;
        return arr;
      });
      setPascalineArray((prev) => {
        const arr = [...prev];
        if (pascalineArray[index] == 9 && index != 0) {
          arr[index] = 0;
          arr[index-1]++;
        } else {
          arr[index]++;
        }
        return arr;
      });
    }
  };

  const handleMinus = (index: number) => {
    if (pascalineArray[index] > 0) {
      setKnobRotation((prev) => {
        const arr = [...prev];
        arr[index] -= 72;
        return arr;
      });
      setPascalineArray((prev) => {
        const arr = [...prev];
        arr[index]--;
        return arr;
      });
    }
  };

  return (
    <div className="grid grid-cols-2">
      <div className="p-24">
        <h1 className="text-4xl font-semibold">Pas-ca-line - 1643</h1>
        <p className="text-xl mt-12 space-y-4">
          Pascaline, or Arithmetic Machine, was a French monetary (nondecimal)
          calculator designed by Blaise Pascal about 1642. Numbers could be
          added by turning the wheels (located along the bottom of the machine)
          clockwise and subtracted by turning the wheels counter clockwise.
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
      <div className="p-24">
        <div id="pascaline" className="w-[710px] space-y-16 py-8 bg-[#D9D9D9]">
          <div className="w-[620px] h-[61px] items-center flex justify-center gap-[115px] bg-[#202020] m-auto">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i + 1}
                className="w-[50px] h-[40px] flex justify-center items-center text-xl bg-white"
              >
                {pascalineArray[i]}
              </div>
            ))}
          </div>
          <div className="flex gap-20 justify-center">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={"knob-pas-"+i}>
                <div key={"h" + i} className="flex justify-center items-center">
                  <img
                    style={{
                      transform: `rotate(${knobRotation[i]}deg)`,
                      transition: "0.2s ease",
                    }}
                    src={Rotatable}
                    className="absolute mt-[-19px]"
                    width={72}
                    alt=""
                  />
                  <img src={Knob} alt="" />
                </div>
                <div className="flex justify-around pt-4">
                  <button style={buttonStyle} onClick={() => handleMinus(i)}>
                    -
                  </button>
                  <button style={buttonStyle} onClick={() => handlePlus(i)}>
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="w-[650px] ">
          Note: the plus and minus buttons are not in the original Pascaline,
          they are added for testing purposes only
        </p>
      </div>
    </div>
  );
}

const buttonStyle: React.CSSProperties = {
  width: "30px",
  height: "30px",
  backgroundColor: "black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  fontSize: "1.25rem",
};

export default Pascaline;
