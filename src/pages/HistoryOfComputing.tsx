// import { toAbacus } from "../../functions.ts";
import { useState } from "react";
import '../App.css';

// Colors: { Yellow: FFC107, Blue: 2B78E4}
function HistoryOfComputing() {

  const [tryAbacus, setTryAbacus] = useState(false);

  const dates:string[] = [
    "500 BC",
    "1642 AD"
  ]

  return (
    <>
      <div className="flex justify-center gap-4 py-4">
        {dates.map((date, i) => (
          <div className="flex justify-center items-center gap-4">
            <p className="font-semibold bg-[#2B78E4] text-white px-6 py-2 rounded-full text-lg">
              {date}
            </p>
            <div
              style={{
                display: i + 1 == dates.length ? "none" : "block",
              }}
              className="w-32 h-1 rounded-full bg-black"
            ></div>
          </div>
        ))}
      </div>
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
          <p></p>
        </div>
        <div className="p-24 grid place-content-center">
          <div className="w-[358px] h-[272px] border-[10px] border-[#D9D9D9]">
            <div className="h-[80px] flex gap-16 justify-center">
              {Array.from({ length: 4 }).map((_, i) => (
                <div className="flex flex-col items-center">
                  <div
                    id={`fives-col-${i + 1}-1`}
                    className="w-[57px] absolute h-[24px] bg-[#202020] rounded-xl"
                  ></div>
                  <div
                    id={`fives-col-${i + 1}-2`}
                    className="w-[57px] absolute h-[24px] mt-6 bg-[#202020] rounded-xl"
                  ></div>
                  <div className="w-[10px] h-[80px] bg-[#D9D9D9]"></div>
                </div>
              ))}
            </div>
            <div className="h-2 bg-[#D9D9D9]"></div>
            <div className="flex gap-16 justify-center">
              {Array.from({ length: 4 }).map((_, i) => (
                <div className="flex flex-col items-center">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <div
                      style={{
                        marginTop: 68 + index * 24 + "px",
                      }}
                      id={`ones-col-${i + 1}-${index+1}`}
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
            }}
            className="h-16 border-2 text-2xl mt-4 text-center border-black"
            type="number"
            name="abacus-input"
            id="abacus-input"
            disabled={!tryAbacus}
          />
        </div>
      </div>
    </>
  );
}

export default HistoryOfComputing