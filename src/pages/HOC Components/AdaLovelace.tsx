type PropType = {
  nextFunc: React.MouseEventHandler<HTMLButtonElement> | undefined;
  prevFunc: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

function AdaLovelace({ prevFunc, nextFunc }: PropType) {
  return (
    <div>
      <div className="flex justify-center items-center mt-16">
        <div className="px-24 pt-12 w-1/2">
          <h1 className="text-4xl font-semibold">Ada Lovelace</h1>
          <p className="text-xl mt-12 space-y-4">
            <strong>Translated Menabrea’s Sketch of the Analytical Engine to English</strong>
            <br />
            <p className="ml-4">
              Quadrupled its length by adding lengthy notes and detailed
              mathematical explanations
            </p>
            <br />
            <br />
            <strong>Referred to as the world’s first programmer</strong>
            <br />
            <p className="ml-4">
              Described how the machine (Analytical Engine) might be configured
              (programmed) to solve a variety of problems.
            </p>
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
          src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Ada_Byron_daguerreotype_by_Antoine_Claudet_1843_or_1850_-_cropped.png"
          alt="charlesBabbage"
          className="px-24 pt-12"
          width={640}
        />
      </div>
    </div>
  );
}

export default AdaLovelace;
