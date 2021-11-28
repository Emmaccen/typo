import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import TestPage from "./pages/TestPage";
import TestStartPage from "./pages/TestStartPage";
import ScrollToTop from "./utils/shared-function/ScrollToTop";
import Layout from "./components/shared-components/Layout";
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
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/test" element={<TestPage />} />
        <Route exact path="/test/start" element={<TestStartPage />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Layout>
  </>
);

export default App;
