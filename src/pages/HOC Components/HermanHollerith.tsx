type PropType = {
  nextFunc: React.MouseEventHandler<HTMLButtonElement> | undefined;
  prevFunc: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

function HermanHollerith({ prevFunc, nextFunc }: PropType) {
  return (
    <div>
      <div className="flex justify-center items-center mt-16">
        <div className="px-24 pt-12 w-1/2">
          <h1 className="text-4xl font-semibold leading-normal">
            Herman Hollerith <br />
            <span className="text-3xl ">& The Hollerith Census Machine</span>
          </h1>
          <p className="text-xl mt-12 space-y-4">
            <strong>1880 U.S. Census</strong>
            <br />
            <p className="ml-4">
              The amount of data that needed to be analyzed was growing so
              quickly due to immigration
            </p>
            <p className="ml-4">
              Required almost a decade to compute 1880 Census
            </p>
            <br />
            <br />
            <strong>
              In 1882, Hollerith investigated a suggestion by Dr. John Shaw
              Billings, head of the division of Vital Statistics for the Census
              Bureau
            </strong>
            <br />
            <p className="ml-4">
              “There ought to be some mechanical way of [tabulating Census
              data], something on the principle of the Jacquard loom, whereby
              holes in a card regulate the pattern to be woven.”
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
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Hollerith.jpg/800px-Hollerith.jpg"
          alt="hermanHollerith"
          className="px-24 pt-12 rounded-full"
          width={640}
        />
      </div>
    </div>
  );
}

export default HermanHollerith;
