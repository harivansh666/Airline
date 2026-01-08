import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/ui/Loading";

const Home = lazy(() => import("./pages/Home"));
const HotDeals = lazy(() => import("./pages/HotDeals"));
const About = lazy(() => import("./pages/About"));

function Router() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotdeals" element={<HotDeals />} />
          <Route path="/about-us" element={<About />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default Router;
