import { BrowserRouter } from "react-router";
import Router from "./Router";
import { lazy, Suspense } from "react";
import Footer from "./components/Footer";
import Loading from "./components/ui/Loading";

const Navbar = lazy(() => import("./components/Navbar"));

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Suspense fallback={<Loading />}>
            <Navbar />
            <div className="pt-18 max-w-7xl mx-auto">
              <Router />
            </div>
            <Footer />
          </Suspense>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
