type PropType = {
  nextFunc: React.MouseEventHandler<HTMLButtonElement> | undefined;
  prevFunc: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

function CharlesBabbage({ prevFunc, nextFunc }: PropType) {
  return (
    <div>
      <div className="flex justify-center items-center mt-16">
        <div className="px-24 pt-12 w-1/2">
          <h1 className="text-4xl font-semibold">Charles Babbage</h1>
          <p className="text-xl mt-12 space-y-4">
            Mathematician, industrialist, philosopher, politician
            <br />
            <br />
            <strong>Difference Engine (1822) :</strong> Babbage’s first
            computational machine was based on the method of finite differences
            <br />
            <br />
            <strong>Analytical Engine (1834-1836) :</strong> Babbage’s more
            general “computer”<br/>Never built, but its design is considered to be
            the foundation of modern computing
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
        <img
          src="https://cdn.britannica.com/98/170698-050-95B7AC71/Charles-Babbage-1871.jpg"
          alt="charlesBabbage"
          className="px-24 pt-12"
          width={640}
        />
      </div>
    </div>
  );
}

export default CharlesBabbage;
