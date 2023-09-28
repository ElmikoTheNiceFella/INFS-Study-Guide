import "../../App.css";
import Knob from "../../assets/Leb_Knob.svg";
import KnobArrow from "../../assets/Leb_KnobArrow.svg";
import Rotatable from "../../assets/Leb_Rotatable.svg";

import { useState, useEffect } from "react";

type PropType = {
  nextFunc: React.MouseEventHandler<HTMLButtonElement> | undefined;
  prevFunc: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

function Leibniz({ nextFunc, prevFunc }: PropType) {
  const [userInput, setUserInput] = useState(0);
  const [step, setStep] = useState(1);
  const [result, setResult] = useState<number[]>([0, 0, 0]);
  const [inputs, setInputs] = useState<number[]>([0, 0]);

  const [operationStatus, setOperationStatus] = useState("-");

  const [operationRotation, setOperationRotation] = useState(0);

  // const [rotate, setRotate] = useState(0);

  const handleInput = () => {
    setInputs((i) => {
      let arr = i;
      arr[step - 1] = userInput;
      return arr;
    });
    setStep((s) => s + 1);
    setOperationRotation((o) => o + 360);
    setUserInput(0);
  };

  const handleAdd = () => {
    setOperationStatus(inputs[0] + inputs[1] + "-" + "ADDED");
    setStep((s) => s + 1);
    setOperationRotation((o) => o + 360);
    setUserInput(0);
  };

  const handleSubtract = () => {
    setOperationStatus(inputs[0] - inputs[1] + "-" + "SUBTRACTED");
    setStep((s) => s + 1);
    setOperationRotation((o) => o - 360);
    setUserInput(0);
  };

  useEffect(() => {
    if (step != 4) {
      setResult(
        String(userInput)
          .padStart(3, "0")
          .split("")
          .map((v) => +v)
      );
    } else {
      operationStatus.split("-")[1] == "ADDED" ?
        setResult(
          String(operationStatus.split("-")[0])
            .padStart(3, "0")
            .split("")
            .map((v) => +v)
        )
      : operationStatus.split("-")[1] == "SUBTRACTED" ?
      setResult(
        String(operationStatus.split("-")[0])
          .padStart(3, "0")
          .split("")
          .map((v) => +v)
      ) : console.log("hehe");
    }
  }, [userInput, operationStatus, step]);

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
            addition and shifting.
          </p>
          <button
            onClick={prevFunc}
            className="bg-[#2B78E4] w-[200px] h-[65px] text-2xl text-white mt-12"
          >
            Previous Slide
          </button>
          {/* <button
            onClick={nextFunc}
            className="bg-[#2B78E4] ml-12 w-[200px] h-[65px] text-2xl text-white mt-12"
          >
            Next Slide
          </button> */}
        </div>
        <div id="leibniz-machine" className="p-24">
          <h3 className="text-center text-2xl mb-4 w-[620px]">Top View</h3>
          <div className="w-[620px] h-[42px] bg-[#757575]">
            <div className="lebNums">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={"num-in" + i}
                  className="flex justify-center items-center text-white"
                >
                  {result[i]}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center mt-12">
            <div className="w-[432px] h-[147px] bg-[#D9D9D9] flex justify-center gap-[42px] items-center">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  className="flex justify-center items-center"
                  key={"leb-" + i}
                >
                  <img src={Knob} width={86} className="min-w-full" alt="" />
                  <img
                    src={KnobArrow}
                    style={{
                      rotate: `${-40 + 30 * result[i]}deg`,
                      transition: "0.2s ease-out",
                    }}
                    className="absolute"
                    alt=""
                  />
                </div>
              ))}
            </div>
            <div className="w-[183px] h-[183px] bg-[#D9D9D9]"></div>
          </div>
          <h3 className="text-center text-2xl w-[620px]">Front View</h3>
          <div className="w-[620px] mt-4 h-[180px] flex justify-center items-center bg-[#D9D9D9]">
            <div className="w-[144px] h-[144px] rounded-full bg-[#202020] flex justify-center items-center">
              <img
                src={Rotatable}
                style={{
                  rotate: `${operationRotation}deg`,
                  transition: "0.8s ease-out",
                }}
                className="origin-top mt-[60px]"
                alt=""
              />
              <div className="w-[18px] h-[18px] bg-[#575757] absolute"></div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-12 w-[620px] mt-12">
            {step <= 2 ? (
              <div className="space-x-12">
                <input
                  type="number"
                  name="leibniz-input"
                  className="number-input text-center text-3xl border-2 border-[#202020] h-[65px] w-[100px]"
                  id="leb-input"
                  value={userInput}
                  onChange={(e) => setUserInput((_) => +e.target.value)}
                />
                <button
                  onClick={handleInput}
                  className="bg-[#2B78E4] w-[300px] h-[65px] text-2xl text-white"
                >
                  Input {step == 1 ? "First" : "Second"} Number
                </button>
              </div>
            ) : step == 3 ? (
              <div className="flex justify-between w-[620px]">
                <button
                  onClick={handleAdd}
                  className="bg-[#2B78E4] w-[180px] h-[65px] text-2xl text-white"
                >
                  ADD
                </button>
                <button
                  onClick={handleSubtract} className="bg-[#2B78E4] w-[180px] h-[65px] text-2xl text-white">
                  SUBTRACT
                </button>
                <button className="bg-[#2B78E4] w-[180px] h-[65px] text-2xl text-white">
                  MULTIPLY
                </button>
              </div>
            ) : (
              <h3 className="w-[620px] text-3xl font-bold flex justify-around items-center">
                {operationStatus.split("-")[1]}!
                <button onClick={() => {
                  setStep(1)
                  setUserInput(0)
                }} className="bg-[#2B78E4] w-[180px] h-[65px] text-2xl text-white">
                  REPEAT?
                </button>
              </h3>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Leibniz;
