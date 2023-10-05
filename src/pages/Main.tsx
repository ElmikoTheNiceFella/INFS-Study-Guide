import "../App.css";
import UDST from "../assets/UDST_LOGO.svg";
import {NavLink} from "react-router-dom";

// Colors: { Yellow: FFC107, Blue: 2B78E4}
function Main() {
  return (
    <>
      <div className="h-40 w-full bg-[#FFC107] flex absolute items-center justify-between px-24">
        <img src={UDST} alt="university of doha" />
        <h1 className="text-5xl text-white font-bold">INFS 1101</h1>
      </div>
      <div className="h-screen overflow-hidden flex justify-center mainBG">
        <div className="w-[60rem] gap-24 bg-opacity-90 flex flex-col items-center justify-start h-full bg-white">
          <h2 className="text-center text-5xl font-semibold mt-72">Lessons</h2>
          <div className="grid grid-cols-1 gap-8">
            <NavLink
              to="/history-of-computing"
              className="bg-[#2B78E4] text-white py-5 text-center px-8 text-xl"
            >
              History Of Computing - Interactive Guide
            </NavLink>
            {/* <NavLink
              to="/hoc-quiz"
              className="bg-[#2B78E4] text-white py-5 px-8 text-center text-xl"
            >
              History Of Computing - Quiz
            </NavLink> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
