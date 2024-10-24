import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';
import { Product } from '../pages/Product';

const LatestCollection = () => {

    const { products } = useContext(ShopContext);   
    const [latestProducts,setLatestProducts] = useState([]);
    
    useEffect(()=> {
        setLatestProducts(products.slice(0,10));
    },[])


  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3x1'>
            <Title text1={'LATEST'} text2={'COLLECTIONS'} />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Fashion started when humans began wearing clothes. These clothes were typically made from plants, animal skins and bone. Before the mid-19th century the division between haute couture and ready-to-wear did not really exist. But the most basic pieces of female clothing were made-to-measure by dressmakers and seamstresses dealing directly with the client. Most often, clothing was patterned, sewn and tailored in the household. When storefronts appeared selling ready-to-wear clothing, this need was removed from the domestic workload.
            </p>
        </div>

        {/* Rendering products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                latestProducts.map((item,index)=>(
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))
            }
        </div>
    </div>
  )
}

export default LatestCollection