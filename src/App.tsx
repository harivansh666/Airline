import { BrowserRouter } from "react-router";
import Router from "./Router";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { useStore } from "./store/statesStore";
import Loading from "./components/ui/Loading";

function App() {
  const setLoading = useStore((state) => state.setLoading);
  const isLoading = useStore((state) => state.isLoading);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [setLoading]);
  return (
    <>
      <div>
        {isLoading && <Loading />}
        <BrowserRouter>
          <Navbar />
          <div className="max-w-7xl mx-auto">
            <Router />
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
