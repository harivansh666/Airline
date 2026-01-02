import { BrowserRouter } from "react-router";
import Router from "./Router";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <div className="pt-18 max-w-7xl mx-auto">
            <Router />
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
