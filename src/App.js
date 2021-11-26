import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import TestPage from "./pages/TestPage";
import ScrollToTop from "./utils/shared-function/ScrollToTop";
import "./styles/globals.scss";
function App() {
  return (
    <BrowserRouter>
      <MainComponent />
    </BrowserRouter>
  );
}

const MainComponent = () => (
  <>
    <ScrollToTop />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/test" element={<TestPage />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
    </Routes>
  </>
);

export default App;
