import car1 from "../assets/Images/car1.png";
import broucher from "../assets/Images/broucher.png";
import test_drive from "../assets/Images/test-drive.png";
import rental_car from "../assets/Images/rental-car.png";

const FindCar = () => {
  return (
    <div className="text-center py-12 px-12">
      <p className="text-4xl font-[300] mb-16">Find Your BMW</p>
      <div className="flex flex-col md:flex-row justify-center space-y-5 md:space-y-0 md:space-x-7">
        <div className="space-y-5">
          <div className="flex justify-center">
            <img src={test_drive} alt="find a new car" className="w-10 " />
          </div>
          <p className="text-2xl font-[300]">Find a new car</p>
          <div>
            <button className="cards">Search now</button>
          </div>
        </div>
        <div className="space-y-5">
          <div className="flex justify-center">
            <img src={rental_car} alt="find a used car" className="w-10 " />
          </div>
          <p className="text-2xl font-[300]">Find a used car</p>
          <div>
            <button className="cards">Search now</button>
          </div>
        </div>
        <div className="space-y-5">
          <div className="flex justify-center">
            <img src={car1} alt="Book a test drive" className="w-10" />
          </div>
          <p className="text-2xl font-[300]">Book a test drive</p>
          <div>
            <button className="cards">Book a test drive</button>
          </div>
        </div>
        <div className="space-y-5">
          <div className="flex justify-center">
            <img src={broucher} alt="Get a broucher" className="w-10" />
          </div>
          <p className="text-2xl font-[300]">Get a broucher</p>
          <div>
            <button className="cards ">Get a broucher</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindCar;
