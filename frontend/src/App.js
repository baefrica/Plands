import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage/AboutPage";
import MainPage from "./pages/MainPage/MainPage";
import ManagePlanPage from "./pages/ManagePlanPage/ManagePlanPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact={true} element={<MainPage />} />
        <Route path="/plans" element={<ManagePlanPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/regist" element={<RegisterPage />} />
        <Route
          // path 를 따로 정의하지 않으면 모든 상황에 렌더링됨
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다:</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Routes>
    </div>
  );
}

export default App;
