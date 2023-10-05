type PropType = {
  nextFunc: React.MouseEventHandler<HTMLButtonElement> | undefined;
  prevFunc: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

function DifferenceEngine({nextFunc, prevFunc}:PropType) {
  return (
      <div className="pt-24 grid place-items-center text-center">
        <h1 className="text-4xl font-semibold pb-12 underline">
          Optional: Babbage's Difference Engine
        </h1>
        <iframe
          width="640"
          height="480"
          src="https://www.youtube.com/embed/0anIyVGeWOI"
          title="Babbage&#39;s Difference Engine"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div>
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
      </div>
  );
}

export default DifferenceEngine