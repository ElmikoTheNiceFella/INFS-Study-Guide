import PC from "../../assets/Census_PunchCard.png";

type PropType = {
  nextFunc: React.MouseEventHandler<HTMLButtonElement> | undefined;
  prevFunc: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

function CensusMachine({nextFunc, prevFunc}:PropType) {
  return (
    <div className="grid grid-cols-2">
      <div className="p-24">
        <h1 className="text-4xl font-semibold">Hollerith’s Census Machine</h1>
        <p className="text-xl mt-12 space-y-4">
          <img src={PC} alt="Punch-Card" />
          <strong>Pantographic Card Punch Plate - 1890</strong>
          <br />
          <p>
            The tabulating machine was an electromechanical machine designed to
            assist in summarizing information stored on punched cards. <br />
            Sets the stage for digital computers.
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
      <div className="p-24 text-4xl font-semibold">
        <p className="mb-12 underline">Optional: How it works</p>
        <iframe
          width="640"
          height="480"
          src="https://www.youtube.com/embed/9HXjLW7v-II"
          title="1889 Herman Hollerith Census Machine by TMC which became IBM"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default CensusMachine