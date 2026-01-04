import { BrowserRouter } from "react-router";
import Router from "./Router";
import { lazy, Suspense } from "react";
import Loading from "./components/ui/Loading";

const Navbar = lazy(() => import("./components/Navbar/Navbar"));
const Footer = lazy(() => import("./components/Footer"));
function App() {
  return (
    <>
      <div>
        <Suspense fallback={<Loading />}>
          <BrowserRouter>
            <Navbar />
            <div className="pt-18 max-w-7xl mx-auto">
              <Router />
            </div>
            <Footer />
          </BrowserRouter>
        </Suspense>
      </div>
    </>
  );
}

export default App;
