import Main from "./pages/Main";
import HistoryOfComputing from "./pages/HistoryOfComputing";
import {Routes, Route} from "react-router-dom";
import Converting from "./pages/Converting";


// Colors: { Yellow: FFC107, Blue: 2B78E4}
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/history-of-computing" element={<HistoryOfComputing />} />
        <Route path="/nsc-practice" element={<Converting />} />
      </Routes>
    </>
  );
}

export default App