import { Suspense } from "react";
import { useStore } from "./store/statesStore";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const LoadingFallback = () => {
  useStore((state) => state.setLoding(true));
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );
};
function Router() {
  return (
    <div>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default Router;
