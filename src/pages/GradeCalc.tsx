import { useState } from "react"

function GradeCalc() {

  const [input, setInput] = useState("");

  const [result, setResult] = useState(0);

  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    let raw = input.split(/\n/);
    let counter= [0,0,0,0];
    let values = [];
    let finalGrade = 0;

    for(let i = 0; i < raw.length; i++) {
      if (raw[i].includes("Quiz") && !raw[i].includes("Quizzes")) {
        values.push(["quiz", raw[i+1]])
        counter[0]++;
      } else if (raw[i].includes("Lab") && !raw[i].includes("Labs") && !raw[i].includes("08")) {
        values.push(["lab", raw[i+1]])
        counter[1]++;
      } else if (raw[i].includes("Assignment") && raw[i].includes("1")) {
        values.push(["assignment", raw[i+1]])
        counter[2]++;
      } else if (raw[i].includes("Midterm")) {
        values.push(["midterm", raw[i+1]]);
        counter[3]++;
      }
    }

    values.forEach(array => {
      let grade = array[1].split(" / ").map(val => +val);
      let percentage = grade[0] / grade[1];

      switch(array[0]) {
        case "quiz":
          finalGrade += percentage * 5;
          break;
        case "lab":
          finalGrade += percentage * 1.25;
          break;
        case "assignment":
          finalGrade += percentage * 1.5;
          break;
        case "midterm":
          finalGrade += percentage * 20;
          break;
        default:
          break;
      }
    })

    finalGrade /= (5*counter[0]+1.25*counter[1]+1.5*counter[2]+20*counter[3]);
    setVisible(true);
    setResult(Math.round(finalGrade * 10000) / 100);
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