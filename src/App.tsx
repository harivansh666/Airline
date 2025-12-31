import { BrowserRouter } from "react-router";
import Router from "./Router";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="max-w-7xl mx-auto ">
          <Router />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
