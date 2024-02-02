import { Drivers } from './Drivers'

export const DriversList = ({products}) => {
  return (
  
    <div className="flex flex-wrap justify-center  bg-gray-800">
      {products.map((product) => (
        <Drivers key={product.id} {...product} />
      ))}
    </div>
  )
}
