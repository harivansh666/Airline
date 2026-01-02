import { BrowserRouter } from "react-router";
import Router from "./Router";
import { lazy, Suspense } from "react";
import Footer from "./components/Footer";

const Navbar = lazy(() => import("./components/Navbar"));
// fallback={<Loading />}
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Suspense>
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
