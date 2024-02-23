import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";

const App = () => {
  return (
    <div className="p-5 md:p-10 lg:p-15 xl:px-20">
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/detay/:id" element={<DetailPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
