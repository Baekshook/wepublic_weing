import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Loading from "./components/Loading";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/loadings" element={<Loading />} />
        <Route path="/results/:flavorId" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
