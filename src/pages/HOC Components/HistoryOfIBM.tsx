import PC from "../../assets/IBM_PunchCard.png";

type PropType = {
  nextFunc: React.MouseEventHandler<HTMLButtonElement> | undefined;
  prevFunc: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

function HistoryOfIBM({ prevFunc, nextFunc }: PropType) {
  return (
    <div>
      <div className="flex justify-center items-center mt-16">
        <div className="px-24 pt-12 w-1/2">
          <h1 className="text-4xl font-semibold">History Of IBM</h1>
          <p className="text-xl mt-12 space-y-4">
            Hollerith forms the Tabulating Machine Company in 1896 which
            eventually becomes IBM in 1924 through a merger and several name
            changes. IBM is incorporated in New York and has operations in over
            170 countries.
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
        <div>
          <img
            src={PC}
            alt="IBM-Punch-Card"
            className="px-24 py-12"
            width={640}
          />
          <p className="text-center">An IBM punch card used from 1928 until the 1970s.</p>
        </div>
      </div>
    </div>
  );
}

export default HistoryOfIBM;
