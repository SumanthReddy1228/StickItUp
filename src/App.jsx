import "./App.css";
import Header from "./components/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/Home";
import { Outlet } from "react-router-dom";
Home;
function App() {
  return (
    <>
      <Header />
      {/* <Home /> */}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
