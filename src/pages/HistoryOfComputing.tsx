import "../App.css";
import Abacus from "./HOC Components/Abacus";
import Leibniz from "./HOC Components/Leibniz";
import Pascaline from "./HOC Components/Pascaline";
import Sorry from "./HOC Components/Sorry";
import Loom from "./HOC Components/Loom";
import CharlesBabbage from "./HOC Components/CharlesBabbage";
import DifferenceEngine from "./HOC Components/DifferenceEngine";
import { useState } from "react";
import AdaLovelace from "./HOC Components/AdaLovelace";
import HermanHollerith from "./HOC Components/HermanHollerith";
import CensusMachine from "./HOC Components/CensusMachine";
import HistoryOfIBM from "./HOC Components/HistoryOfIBM";

// Colors: { Yellow: FFC107, Blue: 2B78E4}
function HistoryOfComputing() {
  const [tracker, setTracker] = useState(1);

  const dates: string[] = [
    "500 BC",
    "1642 AD",
    "1674 AD",
    "#",
    "1805 AD",
    "Babbage",
    "1822 AD",
    "Lovelace",
    "Hollerith",
    "1890 AD",
    "IBM",
    "1944 AD"
  ];

  const handleNext = () => {
    setTracker((t) => t + 1);
  };
  const handlePrev = () => {
    setTracker((t) => t - 1);
  };

  return (
    <>
      {/* The Dates Are Here */}
      <div className="flex justify-center gap-4 pt-4 pb-12">
        {dates.map((date, i) => (
          <div key={i} className="flex justify-center items-center gap-4">
            <p
              style={{
                backgroundColor: i + 1 == tracker ? "#2B78E4" : "black",
              }}
              onClick={() => setTracker(i + 1)}
              className="font-semibold text-white px-4 py-2 rounded-full text-[0.7rem] cursor-pointer"
            >
              {date}
            </p>
            <div
              style={{
                display: i + 1 == dates.length ? "none" : "block",
              }}
              className="w-8 h-1 rounded-full bg-black"
            ></div>
          </div>
        ))}
      </div>
      {/* Render the slides here */}
      {tracker == 1 ? (
        <Abacus nextFunc={handleNext} />
      ) : tracker == 2 ? (
        <Pascaline nextFunc={handleNext} prevFunc={handlePrev} />
      ) : tracker == 3 ? (
        <Leibniz nextFunc={handleNext} prevFunc={handlePrev} />
      ) : tracker == 4 ? (
        <Sorry nextFunc={handleNext} prevFunc={handlePrev} />
      ) : tracker == 5 ? (
        <Loom nextFunc={handleNext} prevFunc={handlePrev} />
      ) : tracker == 6 ? (
        <CharlesBabbage nextFunc={handleNext} prevFunc={handlePrev} />
      ) : tracker == 7 ? (
        <DifferenceEngine nextFunc={handleNext} prevFunc={handlePrev} />
      ) : tracker == 8 ? (
        <AdaLovelace nextFunc={handleNext} prevFunc={handlePrev} />
      ) : tracker == 9 ? (
        <HermanHollerith nextFunc={handleNext} prevFunc={handlePrev} />
      ) : tracker == 10 ? (
        <CensusMachine nextFunc={handleNext} prevFunc={handlePrev} />
      ) : tracker == 11 ? <HistoryOfIBM nextFunc={handleNext} prevFunc={handlePrev} /> : (
        "No More Slides"
      )}
    </>
  );
}

export default HistoryOfComputing;
