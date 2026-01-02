import { BrowserRouter } from "react-router";
import Router from "./Router";
import { lazy, Suspense } from "react";

const Navbar = lazy(() => import("./components/Navbar"));

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Suspense>
            <Navbar />
          </Suspense>
          <div className="pt-18 max-w-7xl mx-auto">
            <Router />
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
