import "../App.css";
import Abacus from "./HOC Components/Abacus";
import Leibniz from "./HOC Components/Leibniz";
import Pascaline from "./HOC Components/Pascaline";
import Sorry from "./HOC Components/Sorry";
import { useState } from "react";

// Colors: { Yellow: FFC107, Blue: 2B78E4}
function HistoryOfComputing() {
  const [tracker, setTracker] = useState(1);

  const dates: string[] = ["500 BC", "1642 AD", "1674 AD"];

  const handleNext = () => {
    setTracker((t) => t + 1);
  };
  const handlePrev = () => {
    setTracker((t) => t - 1);
  };

  return (
    <>
      {/* The Dates Are Here */}
      <div className="flex justify-center gap-4 py-4">
        {dates.map((date, i) => (
          <div key={i} className="flex justify-center items-center gap-4">
            <p style={{
              backgroundColor: i+1 == tracker ? "#2B78E4" : "black"
            }} className="font-semibold text-white px-6 py-2 rounded-full text-lg">
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
      {/* Render the slides here */}
      {tracker == 1 ? (
        <Abacus nextFunc={handleNext} />
      ) : tracker == 2 ? (
        <Pascaline nextFunc={handleNext} prevFunc={handlePrev} />
      ) : tracker == 3 ? (
        <Leibniz nextFunc={handleNext} prevFunc={handlePrev} />
      ) : tracker == 4 ? <Sorry nextFunc={handleNext} prevFunc={handlePrev} /> : (
        "No More Slides"
      )}
    </>
  );
}

export default HistoryOfComputing;
