import Main from "./pages/Main";
import HistoryOfComputing from "./pages/HistoryOfComputing";
import {Routes, Route} from "react-router-dom";


// Colors: { Yellow: FFC107, Blue: 2B78E4}
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/history-of-computing" element={<HistoryOfComputing />} />
      </Routes>
    </>
  );
}

export default App