import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/common/Header";
import Home from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import MyPage from "./pages/MyPage/MyPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
