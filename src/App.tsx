import { HeroSection } from "./pages";
import McqSection from "./pages/McqSection";
import { Route, Routes } from "react-router";

function App() {
  
  return (
    <>

      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/mcq" element={<McqSection />} />
      </Routes>

    </>
  );
}

export default App;
