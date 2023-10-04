import React from "react";

type PropType = {
  nextFunc: React.MouseEventHandler<HTMLButtonElement> | undefined;
  prevFunc: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

function Sorry({ nextFunc, prevFunc }: PropType) {
  return (
    <div className="p-24">
      <h1 className="text-4xl font-semibold">Word from da dev</h1>
      <p className="text-xl mt-12 space-y-4">
        helo, there are no more interactive elements from here for now
        <br />
        yes, yes very sad but there are videos that explain how it works
        <br />
        technically speaking I can complain and whatever but it's a skill issue
        at the end of the day
        <br />
        you can continue here or use the professor's powerpoint both have the
        same content
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
  );
}

export default Sorry;
