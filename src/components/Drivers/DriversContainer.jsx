import React, { useEffect, useState } from 'react'
import { getProducts } from '../../productMock';
import { useParams } from 'react-router-dom';
import { DriversList } from './DriversList';

export const DriversContainer = () => {
    const {category} = useParams();
    const [products, setProducts] = useState([]);

useEffect(() => {
    getProducts()
    .then((resp) => {
        if (category) {
          const productsFilter = resp.filter(
            (product) => product.category === category
          );
          setProducts(productsFilter);
        } else {
          setProducts(resp);
        }
      })
      .catch((error) => console.log(error));

 },[category])
    
  return (
    <div>
        <DriversList products={products} />
    </div>
  )
}
