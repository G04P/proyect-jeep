import styles from "./Compass.module.css";
export const Compass = () => {
  return (
    <main className="container bg-gray-800 flex justify-evenly p-2  max-w-full">
      <div className="text-center flex flex-col items-center justify-center gap-y-3">
        <h3 className="text-6xl  font-bold text-center ">COMPASS</h3>
        <p className=" text-lg font-light  w-96 mx-auto font-semibold  text-center ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
          debitis veritatis qui non suscipit dolores ex asperiores ea optios
          quas.
        </p>

        <button
          type="submit"
          className=" items-center py-3 px-6 mt-4 justify-center rounded-full bg-transparent font-light border border-yellow-500  hover:text-white  text-base font-bold text-yellow-400 hover:bg-gray-800 "
        >
          Know More
        </button>
      </div>
      <div className="w-6/12">
        <img
          className="w-full"
          src="https://www.icamotor-fcagroup.es/content/dam/ddp-dws/it/master-italia/model_pages_2022/jeep/compass_4xe/model_page/jeep_compass_4xe_modelpage_top.png"
          alt="Jeep Compass"
        />
      </div>
    </main>
  );
};
