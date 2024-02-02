import { GiSteeringWheel } from "react-icons/gi";
import { FaGasPump } from "react-icons/fa6";

export const Drivers = ({img, price,  name}) => {
  return (
    
    <article className="flex flex-col max-h-96 m-4 items-center  justify-center max-w-64 mx-6 cursor-auto rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
        <img src={img} className="object-contain w-225 h-225" alt="" />
        <div className='font-bold text-center mt-4'><h4>{name}</h4>
        <span>${price}</span>
        </div>
     <div className="flex flex-wrap gap-6 m-2">
      <button className='bg-transparent text-black font-semibold w-32 opacity-85 cursor-pointer	 border border-black mt-4 p-2 rounded-full hover:bg-blue-600 hover:text-white'>
        Ver Detalles
      </button>
      </div> 

    </article>
  )
}
