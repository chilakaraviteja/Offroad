import Navbar from "./components/Navbar";
import FindCar from "./components/FindCar";
import Hero from "./components/Hero";
import { cars_details, i4_card_details, ix1_card_details } from "./constants";

function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        <Hero data={i4_card_details} status="i4" />
        <FindCar />
        <Hero data={ix1_card_details} status="x1" />
        <Hero data={cars_details} status="cars" />
      </div>
    </>
  );
}
// div className="bg-off_white"
export default App;
