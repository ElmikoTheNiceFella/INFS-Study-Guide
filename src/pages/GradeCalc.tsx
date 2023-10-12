import { useState } from "react"

type Grade = {
  quiz:number[];
  labs:number[];
  assignment:number[];
  midterm:number[];
}

function GradeCalc() {

  const [grades, setGrades] = useState<Grade>({
    quiz: [0,0],
    labs: [0,0,0,0,0,0,0,0],
    assignment: [0],
    midterm: [0]
  })

  const [numberOfInputs, setNumberOfInputs] = useState<number[]>([0,0,0,0]);

  const handleAddGrade = (key:string, index:number) => {
    
  }

  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <h1 className="text-4xl font-semibold text-center w-[60%] leading-[3rem] mb-12">
        Calculate you're grade
      </h1>
      {Object.keys(grades).map((x, i) => (
        <div className="mt-4 space-y-4">
          <p className="text-2xl font-semibold">
            {x[0].toUpperCase() + x.substring(1)} Grades:
          </p>
          <input
            className="border-2 border-[#202020] h-12 w-[200px] text-center text-2xl mr-4"
            type="number"
          />
          <button onClick={() => handleAddGrade(x, i)} className="bg-[#2B78E4] w-[200px] h-12 text-xl text-white mt-12">
            Add Grade
          </button>
        </div>
      ))}
      <button className="bg-[#2B78E4] w-[416px] h-[65px] text-2xl text-white mt-12">
        CALCULATE
      </button>
    </div>
  );
}

export default GradeCalc