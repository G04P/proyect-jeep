import React, { useEffect, useState } from 'react'
import { getProducts } from '../../productMock';
import { useParams } from 'react-router-dom';
import { DriversList } from './DriversList';
import { useCount } from '../../Hooks/useCount';
import { Button } from '../../utils/Button';
import { Header } from '../Header/Header';

export const DriversContainer = () => {
    const {category} = useParams();
    const [products, setProducts] = useState([]);
    const {increment, decrement, count} = useCount(1);

useEffect(() => {
    getProducts()
    .then((resp) => {
        if (category) {
          const productsFilter = resp.filter(
            (product) => product.category === category
          );
          setProducts(productsFilter);
          setIsloading(false);
        } else {
          setProducts(resp);
        }
      })
      .catch((error) => console.log(error))

 },[category])
    
  return (
      <div>
        <Header/> 
        <DriversList products={products} />
      </div>
  )
}
