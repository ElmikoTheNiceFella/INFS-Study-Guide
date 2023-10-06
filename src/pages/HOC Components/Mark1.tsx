import { useState } from "react";

type PropType = {
  nextFunc: React.MouseEventHandler<HTMLButtonElement> | undefined;
  prevFunc: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

function Mark1({nextFunc, prevFunc}:PropType) {

  const [tracker, setTracker] = useState(0);

  const handlePrev = () => {
    setTracker(t => t == 0 ? t : t-1);
  }

  const handleNext = () => {
    setTracker((t) => t == 2 ? t : t+1);
  };

  return (
    <div className="grid grid-cols-2">
      <div className="p-24">
        <h1 className="text-4xl font-semibold">Harvard Mark I</h1>
        <p className="text-xl mt-12 space-y-4">
          In 1944, a professor of physics at Harvard, Howard Aiken was supported
          by IBM to build the ASCC computer (Automatic Sequence Controlled
          Calculator). The computer had mechanical relays (switches) which
          flipped backwards and forwards to represent mathematical data. It was
          huge and weighed 35 tons with 500 miles of wiring.
          <br />
          <br />
          <strong>
            In 1947, how many electronic digital computers did Aiken predict
            would be required to satisfy the computing needs of the entire U.S.?
          </strong>
          <p className="ml-4">
            Only <strong>six</strong> electronic digital computers would be required to satisfy
            the computing needs of the entire United States," he said in 1947
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
      <div className="px-24 pt-12 text-4xl w-[640px] overflow-hidden">
        {" "}
        {/* -20 , -170, -315 */}
        <div
          style={{
            transform: "translateX(-" + (tracker == 0 ? 20 : tracker == 1 ? 170 : 315) + "%)",
            transition: "0.5s ease"
          }}
          className="flex gap-4"
        >
          <div className="w-[640px] flex-shrink-0 flex justify-center items-center">
            <img
              src="https://archive.computerhistory.org/resources/still-image/Aiken-Howard/aiken-howard.102635870.lg.jpg"
              alt="howard-aiken"
              width={480}
              className="rounded-[100%]"
            />
          </div>
          <div className="w-[640px] flex-shrink-0 flex justify-center items-center">
            <img
              src="https://www.thoughtco.com/thmb/3zevF5g6ql2szwnBwaPtU4YOSxA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-107636032-293dc66802a54c4685892d2bb7831ef5.jpg"
              alt=""
              width={640}
            />
          </div>
          <div className="w-[640px] flex-shrink-0 flex flex-col justify-center items-center">
            <p className="mb-12 underline font-semibold">Optional: How it works</p>
            <iframe
              width="640"
              height="480"
              src="https://www.youtube.com/embed/4ObouwCHk8w"
              title="Harvard Mark I"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="flex mt-12">
          <button onClick={handlePrev} className="bg-[#2B78E4] ml-12 w-[600px] h-[65px] text-2xl text-white">
            Previous Media
          </button>
          <button onClick={handleNext} className="bg-[#2B78E4] ml-12 w-[500px] h-[65px] text-2xl text-white">
            Next Media
          </button>
        </div>
      </div>
    </div>
  );
}

export default Mark1