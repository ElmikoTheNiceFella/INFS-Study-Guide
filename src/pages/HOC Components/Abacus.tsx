import { useState, useEffect } from "react";
import { toAbacus } from "../../../functions.ts";
import "../../App.css";

type PropType = {
  nextFunc: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

function Abacus({ nextFunc }: PropType) {
  const [tryAbacus, setTryAbacus] = useState(false);
  const [abacusNumber, setAbacusNumber] = useState(0);
  const [abacusArray, setAbacusArray] = useState<string | string[]>(
    toAbacus(0)
  );

  useEffect(() => {
    setAbacusArray(toAbacus(abacusNumber));
  }, [abacusNumber, toAbacus, setAbacusArray]);
  const handleAbacusOnes = (column: number, bud: number) => {
    if (+abacusArray[column][1] == 0) {
      return 0;
    }
    if (bud + 1 <= +abacusArray[column][1]) {
      return -68;
    }
    return 0;
  };

  const handleAbacusTwos = (column: number, bud: number) => {
    if (+abacusArray[column][0] == 0) {
      return 0;
    }
    if (bud + 1 <= +abacusArray[column][0]) {
      return 32;
    }
    return 0;
  };

  return (
    <div className="grid grid-cols-2">
      <div className="p-24">
        <h1 className="text-4xl font-semibold">Abacus - 5th Century B.C.</h1>
        <ul className="text-xl mt-12 space-y-4">
          <li>
            • &nbsp;Earliest archaeological evidence of a Greek abacus used
            around the 5th century BC.
          </li>
          <li>
            • &nbsp;Greeks used it to help with calculating. To use it, you
            slide the beads up and down on the rods to add and subtract. It is
            still used today in some countries.
          </li>
        </ul>
        <button
          onClick={nextFunc}
          className="bg-[#2B78E4] w-[200px] h-[65px] text-2xl text-white mt-12"
        >
          Next Slide
        </button>
      </div>
      <div className="p-24 grid place-content-center">
        <div className="w-[358px] h-[272px] border-[10px] border-[#D9D9D9]">
          <div className="h-[80px] flex gap-16 justify-center">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i + 1} className="flex flex-col items-center">
                {Array.from({ length: 2 }).map((_, index) => (
                  <div
                    id={`fives-col-${i + 1}-1`}
                    key={index + 1}
                    style={{
                      marginTop:
                        (Array.isArray(abacusArray)
                          ? handleAbacusTwos(i, index)
                          : 0) +
                        (index == 0 ? 24 : 0) +
                        "px",
                      transition: "0.2s ease",
                    }}
                    className="w-[57px] absolute h-[24px] bg-[#202020] rounded-xl"
                  ></div>
                ))}
                <div className="w-[10px] h-[80px] bg-[#D9D9D9]"></div>
              </div>
            ))}
          </div>
          <div className="h-2 bg-[#D9D9D9]"></div>
          <div className="flex gap-16 justify-center">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i + 1} className="flex flex-col items-center">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div
                    key={index + 1}
                    style={{
                      marginTop:
                        68 +
                        (Array.isArray(abacusArray)
                          ? handleAbacusOnes(i, index)
                          : 0) +
                        index * 24 +
                        "px",
                      transition: "0.2s ease",
                    }}
                    id={`ones-col-${i + 1}-${index + 1}`}
                    className="w-[57px] absolute h-[24px] bg-[#202020] rounded-xl"
                  ></div>
                ))}
                <div className="w-[10px] h-[170px] bg-[#D9D9D9]"></div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={() => setTryAbacus((t) => !t)}
          className="py-4 w-[358px] bg-[#2B78E4] text-xl text-white mt-12"
        >
          Try The Abacus
        </button>
        <input
          style={{
            opacity: tryAbacus ? "1" : "0",
            transform: `translateY(${tryAbacus ? 0 : -10}%)`,
            transition: "0.2s ease",
            borderColor: !Array.isArray(abacusArray) ? "#8e1537" : "black",
            outline: "none",
          }}
          className="h-16 border-2 text-2xl mt-4 text-center"
          type="number"
          name="abacus-input"
          id="abacus-input"
          disabled={!tryAbacus}
          value={abacusNumber}
          onChange={(e) => {
            setAbacusNumber(+e.target.value);
          }}
        />
        <p
          style={{
            display: tryAbacus ? "block" : "none",
          }}
          className="text-center text-lg mt-4 text-[#8e1537]"
        >
          {!Array.isArray(abacusArray) ? abacusArray : ""}
        </p>
      </div>
    </div>
  );
}

export default Abacus;
