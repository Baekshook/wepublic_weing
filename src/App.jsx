import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Loading from "./components/Loading";
import Result from "./pages/Result";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/loadings" element={<Loading />} />
        <Route path="/results/:flavorId" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
