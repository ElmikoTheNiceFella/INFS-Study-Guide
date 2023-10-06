import { useState, useEffect } from "react";
function Converting() {

  // random number
  const [number, setNumber] = useState(Math.ceil(Math.random() * 850 + 1));
  const [initialValue, setInitialValue] = useState("");
  const [answers, setAnswers] = useState<string[]>(["", "", ""])

  const possibilites = ["binary", "decimal", "hexa"];

  // user inputs
  const [binary, setBinary] = useState("");
  const [decimal, setDecimal] = useState("");
  const [hexa, setHexa] = useState("");

  // re-render
  const [rerender, setRerender] = useState(true);

  // correct answers

  const [userAnswer, setUserAnswer] = useState<boolean[]>([false,false,false])

  // conversion functions

  const handleBinary = (num:number):string => num.toString(2);
  const handleDecimal = (num:number): string => num.toString();
  const handleHexa = (num:number): string => num.toString(16).toUpperCase();

  const handleCheck = () => {

    let arr = initialValue.split(" ");

    let num:number;

    if (arr[1] == "Binary") {
      num = parseInt(arr[arr.length - 1], 2);
    } else if (arr[1] == "Hexadecimal") {
      num = parseInt(arr[arr.length - 1], 16);
    } else {
      num = +arr[arr.length - 1];
    }

    setAnswers(
    [
      handleBinary(num),
      handleDecimal(num),
      handleHexa(num),
    ]);
    setUserAnswer([
        binary == handleBinary(num),
        decimal == handleDecimal(num),
        hexa == handleHexa(num),
    ]);
  }

  useEffect(() => { 
    setAnswers(["", "", ""]);
    
    setNumber(Math.ceil(Math.random() * 850 + 1));

    let initialNumberSystem = possibilites[Math.floor(Math.random() * 3)];
    
    switch(initialNumberSystem) {
      case "binary":
        setInitialValue("The Binary " + handleBinary(number));
        break;
      case "decimal":
        setInitialValue("The Decimal " + handleDecimal(number));
        break;
      case "hexa":
        setInitialValue("The Hexadecimal " + handleHexa(number));
        break;
      default:
        console.log("There is an error here");
        break;
    }
  }, [rerender])

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-semibold text-center w-[60%] leading-[3rem] ">
        Convert <span className="text-[#2B78E4]">{initialValue}</span> to the
        following formats
      </h1>
      <p className="flex items-center gap-4 mb-4 mt-12">
        <div className="text-2xl w-48">Binary:</div>
        <input
          className="border-2 border-[#202020] h-12 w-[400px] text-center text-2xl "
          type="text"
          value={binary}
          onChange={(e) => setBinary(e.target.value)}
        />
        <div
          style={{
            color: userAnswer[0] ? "#1c5e13" : "#5e1313",
          }}
          className="text-2xl w-48"
        >
          {answers[0]}
        </div>
      </p>
      <p className="flex items-center gap-4 my-4">
        <div className="text-2xl w-48">Decimal:</div>
        <input
          className="border-2 border-[#202020] h-12 w-[400px] text-center text-2xl "
          type="text"
          value={decimal}
          onChange={(e) => setDecimal(e.target.value)}
        />
        <div
          style={{
            color: userAnswer[1] ? "#1c5e13" : "#5e1313",
          }}
          className="text-2xl w-48"
        >
          {answers[1]}
        </div>
      </p>
      <p className="flex items-center gap-4 my-4">
        <div className="text-2xl w-48">Hexadecimal:</div>
        <input
          className="border-2 border-[#202020] h-12 w-[400px] text-center text-2xl "
          type="text"
          value={hexa}
          onChange={(e) => setHexa(e.target.value)}
        />
        <div
          style={{
            color: userAnswer[2] ? "#1c5e13" : "#5e1313",
          }}
          className="text-2xl w-48"
        >
          {answers[2]}
        </div>
      </p>
      <div className="flex gap-8">
        <button
          onClick={handleCheck}
          className="bg-[#2B78E4] w-[200px] h-[65px] text-2xl text-white mt-12"
        >
          Check
        </button>
        <button
          onClick={() => setRerender(r => !r)}
          className="bg-[#2B78E4] w-[200px] h-[65px] text-2xl text-white mt-12"
        >
          Repeat
        </button>
      </div>
    </div>
  );
}

export default Converting