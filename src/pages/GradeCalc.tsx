import { useState } from "react"

function GradeCalc() {

  const [input, setInput] = useState("");

  const [result, setResult] = useState(0);

  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    let raw = input.split(/\s+/);
    let values = [];
    let finalGrade = 0;

    loop:
    for(let i = 0; i < raw.length; i++) {
      let toPushQA = [ +raw[i+1], +raw[i+3] ];
      switch (raw[i]) {
        case "Quizzes":
          values.push(toPushQA);
          continue loop;
        case "Labs":
          values.push(toPushQA);
          continue loop;
        default:
          break;
      }
      let toPushAssignment = [ +raw[i+5], +raw[i+7] ]
      if (raw[i] == "Assignment" && raw[i+1] == "01") {
        values.push(toPushAssignment);
      }
      let toPushMid = [ +raw[i+4], +raw[i+6] ]
      if (raw[i] == "1(Midterm)") {
        values.push(toPushMid);
      }
    }

    console.log(values);

    values.forEach(arr => {
      finalGrade += arr[0]/arr[1] * arr[1];
    })

    setVisible(true);

    setResult(Math.round((finalGrade/(10+10+1.5+20)) * 10000)/100);
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-semibold text-center">
        Calculate your Grade
      </h1>
      <p className="text-center py-4">
        Copy the grade table from{" "}
        <span className="font-semibold bg-gray-200 px-2 py-1">
          D2L &gt; INFS1101 &gt; Assessments &gt; Grades
        </span>
        <br />
        and paste it in the box below
      </p>
      <div
        onClick={() => setVisible(false)}
        style={{
          display: visible ? "grid" : "none",
        }}
        className="h-full w-full place-content-center bg-[#00000050] absolute"
      >
        <div className="w-[200px] h-[100px] bg-white font-semibold grid place-content-center">
          Your grade is {result}%
        </div>
      </div>
      <textarea
        className="border-2 h-56 w-96 resize-none border-black"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <button
        className="bg-[#2B78E4] w-96 h-[65px] text-2xl text-white mt-4"
        onClick={handleClick}
      >
        Calculate
      </button>
    </div>
  );
}

export default GradeCalc