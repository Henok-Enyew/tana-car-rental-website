function VehicleModels() {
  return (
    <div
      className="bg-primary-bg pb-14 px-4 text-center text-gray-200"
      id="models"
    >
      <h3 data-aos="fade-up" className="font-semibold mb-2">
        Vehicle Models
      </h3>
      <h2 data-aos="fade-up" className="font-semibold text-3xl mb-5">
        {" "}
        Our rental fleet
      </h2>
      <p data-aos="fade-up" className="text-xs px-3 text-gray-400">
        Choose from a variety of our amazing vehicles to rent for your next
        adventure or business trip{" "}
      </p>
      <div
        data-aos="fade-zoom-in"
        className="flex flex-col pl-4 justify-center  mt-8"
      >
        <button className="btn-vehicle ">Toyota Land Cruiser</button>
        <button className="btn-vehicle">Toyota Prado</button>
        <button className="btn-vehicle">Mitsubishi Pajero</button>
        <button className="btn-vehicle">Nissan Patrol</button>
        <button className="btn-vehicle">Toyota RAV4</button>
        <button className="btn-vehicle">Hyundai Santa</button>
        <button className="btn-vehicle">Ford Everest</button>
        <button className="btn-vehicle">Toyota Hiace</button>
        <button className="btn-vehicle">Hyundai H1</button>
        <button className="btn-vehicle !border-b-[1px]">
          Mercedes-Benz E-
        </button>
      </div>
      <img
        data-aos="fade-up"
        src="/assets/hero.png"
        alt="Car"
        className="w-70"
      />
      <div data-aos="fade-zoom-in" className="flex flex-col mt-14 mx-2">
        <div className="table-cell bg-color-primary text-gray-700">
          <span className="text-xl font-bold">3500 ETB</span> /
          <span>rent per day </span>
        </div>
        <div className="table-cell">
          <span>Model</span>
          <span>320</span>
        </div>
        <div className="table-cell">
          <span>Mark</span>
          <span>BMW</span>
        </div>
        <div className="table-cell">
          <span>Year</span>
          <span>2012</span>
        </div>
        <div className="table-cell">
          <span>Doors</span>
          <span>4/5</span>
        </div>
        <div className="table-cell">
          <span>AC</span> <span>Yes</span>
        </div>
        <div className="table-cell">
          <span>Transmission</span>
          <span>Manual</span>
        </div>
        <div className="table-cell !border-b-[1px]">
          <span>Fuel</span>
          <span>Diesel</span>
        </div>
      </div>
    </div>
  );
}

export default VehicleModels;
