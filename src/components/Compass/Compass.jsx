import { Gallery } from "../Gallery/Gallery";
import { Header } from "../Header/Header";
export const Compass = () => {
  return (
    <>
    <Header/>
    <main className="h-screen">
      <section className="container bg-gray-800 flex justify-evenly p-2 max-w-full">
         <div className="text-center flex flex-col items-center justify-center gap-y-3">
        <h3 className="text-6xl  font-bold text-center text-gray-400 opacity-25">COMPASS</h3>
        <p className=" text-lg font-light  w-96 mx-auto font-semibold text-gray-200 text-center ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
          debitis veritatis qui non suscipit dolores ex asperiores ea optios
          quas.
        </p>

        <button
          type="submit"
          className=" items-center py-3 px-6 mt-4 justify-center rounded-full bg-transparent font-light border border-yellow-500  hover:text-white  text-base font-bold text-yellow-500 hover:bg-gray-800 "
        >
          Know More
        </button>
      </div>
      <div className="w-5/12">
        <img
          className="w-full"
          src="https://imgs.search.brave.com/AM5jwLtxMLaU5iRuWtCXaJxmZlADjme0aioQE4YU-eY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMjIvSmVl/cC1Db21wYXNzLVBO/Ry1IRC5wbmc"
            alt="Jeep Compass"
        />
      </div >
      </section>
      <Gallery/>
    </main>
    </>
    
  );
};
