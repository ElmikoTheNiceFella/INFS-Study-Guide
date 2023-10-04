import Main from "./pages/Main";
import HistoryOfComputing from "./pages/HistoryOfComputing";
import HOCQuiz from "./pages/HOCQuiz";
import {Routes, Route} from "react-router-dom";


// Colors: { Yellow: FFC107, Blue: 2B78E4}
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/history-of-computing" element={<HistoryOfComputing />} />
        <Route path="/hoc-quiz" element={<HOCQuiz />} />
      </Routes>
    </>
  );
}

export default App