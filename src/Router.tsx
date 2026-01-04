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
    </div>
  );
}

export default Router;
