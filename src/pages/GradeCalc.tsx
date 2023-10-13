import { useState } from "react"

type Grade = {
  quiz:number[];
  labs:number[];
  assignment:number[];
  midterm:number[];
}

type Grades = "quiz" | "labs" | "assignment" | "midterm";

function GradeCalc() {
  const [grades, setGrades] = useState<Grade>({
    quiz: [0,0],
    labs: [0,0,0,0,0,0,0,0],
    assignment: [0],
    midterm: [0]
  })

  const [numberOfInputs, setNumberOfInputs] = useState<number[]>([0,0,0,0]);

  const [quiz, setQuiz] = useState(0);
  const [labs, setLabs] = useState(0);
  const [assignment, setAssignment] = useState(0);
  const [midterm, setMidterm] = useState(0);

  const handleAddGrade = (key:Grades, index:number) => {
    setGrades(() => {
      let temp = {...grades};
      temp[key][numberOfInputs[index]] = index == 0 ? quiz :
                                         index == 1 ? labs :
                                         index == 2 ? assignment :
                                                       midterm;
      return temp;
    })
    setNumberOfInputs((prev) => {
      let temp = prev;
      temp[index]++;
      return temp;
    });
  }

  const gradesKeys = Object.keys(grades) as Grades[];

  const handleCalculate = () => {
    console.log(grades);
    console.log(numberOfInputs);

    let finalGrade = 0;
    let denominator = 0;

    gradesKeys.forEach(key => {
      let weight = 0;
      let index = 0;
      let max = 0;

      switch(key) {
        case "quiz":
          weight = 5;
          index = 0;
          max = 5;
          break;
        case "assignment":
          weight = 1.5;
          index = 2;
          max = 36;
          break;
        case "labs":
          weight = 1.25;
          index = 1;
          max = 100;
          break;
        case "midterm":
          weight = 20
          index = 3;
          max = 30;
          break;
        default:
          weight = 0;
          break;
      }

      let total = weight * numberOfInputs[index];

      let userGrade =
        ((grades[key].reduce((acc, curr) => acc + curr, 0) /
          numberOfInputs[index]) / max) * total;
      
      finalGrade += userGrade;
      denominator += total;

      console.log(key,userGrade,numberOfInputs[index],total)
      
    })

    console.log((finalGrade/denominator) * 100);

    setNumberOfInputs([0, 0, 0, 0]);
    setGrades({
      quiz: [0, 0],
      labs: [0, 0, 0, 0, 0, 0, 0, 0],
      assignment: [0],
      midterm: [0],
    });
  }

  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <h1 className="text-4xl font-semibold text-center w-[60%] leading-[3rem] mb-12">
        Calculate you're grade
      </h1>
      {gradesKeys.map((x, i) => (
        <div key={"grade-"+x} className="mt-4">
          <p className="text-2xl font-semibold">
            {x[0].toUpperCase() + x.substring(1)} Grades:
          </p>
          <div className="flex items-center">
            <span className="py-2 px-6 text-white font-semibold text-2xl bg-[#2B78E4] absolute -ml-20">
              {numberOfInputs[i]}
            </span>
            <input
              onChange={(e) =>
                i == 0
                  ? setQuiz(+e.target.value)
                  : i == 1
                  ? setLabs(+e.target.value)
                  : i == 2
                  ? setAssignment(+e.target.value)
                  : setMidterm(+e.target.value)
              }
              className="border-2 border-[#202020] h-12 w-[200px] text-center text-2xl mr-4"
              type="number"
            />
            <button
              onClick={() => handleAddGrade(x, i)}
              className="bg-[#2B78E4] w-[200px] h-12 text-xl text-white"
            >
              Add Grade
            </button>
          </div>
        </div>
      ))}
      <button
        onClick={handleCalculate}
        className="bg-[#2B78E4] w-[416px] h-[65px] text-2xl text-white mt-12"
      >
        CALCULATE
      </button>
    </div>
  );
}

export default GradeCalc