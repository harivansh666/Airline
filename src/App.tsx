import { BrowserRouter } from "react-router";
import Router from "./Router";
import { lazy, Suspense } from "react";
import Loading from "./components/ui/Loading";
import { Toaster } from "react-hot-toast";
import FloatingWhatsApp from "./components/ui/FloatingWhatsApp";
const Navbar = lazy(() => import("./components/Navbar/Navbar"));
const Footer = lazy(() => import("./components/Footer"));
function App() {
  return (
    <>
      <div>
        <Toaster />
        <BrowserRouter>
          <Suspense fallback={<Loading />}>
            <Navbar />
            <div className="pt-18 max-w-7xl mx-auto">
              <Router />
              {/* Hamesha routes nu ne suspense vich wrap krna hai => Static + global UI must render ONCE*/}
            </div>
            <Footer />
          </Suspense>
        </BrowserRouter>
        <FloatingWhatsApp />
      </div>
    </>
  );
}

export default App;
