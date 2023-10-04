type PropType = {
  nextFunc: React.MouseEventHandler<HTMLButtonElement> | undefined;
  prevFunc: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

function Loom({nextFunc, prevFunc}:PropType) {
  return (
    <div className="grid grid-cols-2">
      <div className="p-24">
        <h1 className="text-4xl font-semibold">
          Jacquard’s (juh·kaard)Loom - 1805
        </h1>
        <p className="text-xl mt-12 space-y-4">
          Developed by Joseph-Marie Jacquard. The loom was controlled by a loop
          of punched cards. Holes in the punched cards determined how the
          knitting proceeded, yielding very complex weaves at a much faster
          rate. 5
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
      <div className="p-24 text-4xl font-semibold">
        <p className="mb-12 underline">Optional: How it works</p>
        <iframe
          width="640"
          height="480"
          src="https://www.youtube.com/embed/K6NgMNvK52A"
          title="How was it Made? Jacquard weaving"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}
        ></iframe>
      </div>
    </div>
  );
}

export default Loom