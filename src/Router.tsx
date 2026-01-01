import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/ui/Loading";

const Home = lazy(() => import("./pages/Home"));
const HotDeals = lazy(() => import("./pages/HotDeals"));

function Router() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotdeals" element={<HotDeals />} />
        </Routes>
      </Suspense>

      <a
        href="https://wa.me/+1234567890?text=Hello%20there!"
        className="fixed bottom-4 right-4  z-50"
      >
        <div className="relative w-13">
          <img
            src="https://res.cloudinary.com/desslvu1w/image/upload/v1767276102/Pngtree_whatsapp_icon_vector_8704827_h9fj7d.png"
            alt="whatsapp icon"
          />
        </div>
      </a>
    </div>
  );
}

export default Router;
