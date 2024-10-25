import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { RelatedProducts } from '../components/RelatedProducts';

export const Product = () => {
    const { productId } = useParams();
    const {products, currency} = useContext(ShopContext);
    const [productData,setProductData] = useState(false);
    const [image,setImage] = useState('')
    const [size,setSize] = useState('')

    const fetchProductData = async () => {

        products.map((item)=> {
            if (item._id === productId) {
                setProductData(item)
                setImage(item.image[0])
                return null;
            }
        })

    }

    useEffect(()=> {
        fetchProductData();
    },[productId, products]) 

    return productData ? (
        <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
            {/* product data */}
            <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
            {/* product images */}
            <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
                <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                    {
                        productData.image.map((item,index)=>(
                            <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' />
                        ))
                    }
                </div>
                <div className='w-full sm:w-[80%]'>
                    <img className='w-full h-auto' src={image} alt="" />
                </div>
            </div>
            
        {/* product info */}
        <div className='flex-1'>
            <h1 className='font-medium text-2x1 mt-2'> {productData.name}</h1>
            <div className='flex items-center gap-1 mt-2'>
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_dull_icon} alt="" className="w-3 5" />
                <p className='pl-2'>(125)</p>
            </div>
            <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
            <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
            <div className='flex flex-col gap-4 my-8'>
                <p>Select size</p>
                <div className='flex gap-2'>
                    {productData.sizes.map((item,index)=>(
                        <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`}key={index}>{item}</button>
                    ))}
                </div>
            </div>
            <button className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'> ADD TO CART </button>
            <hr className='mt-8 sm:w-4/5' />
            <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                <p>100% Quality material</p>
                <p>Cash on delivery is available within Lagos</p>
                <p>14 days return and exchange policy</p>

            </div>
        </div>
        </div>
        {/* product review and description session */}

        <div className='mt-20'>
            <div className='flex'>
                <b className='border px-5 py-3 text-sm'>Description</b>
                <p className='border px-5 py-3 text-sm'>Reviews (125)</p>
            </div>
            <div className='flex flex-col gap-4 border px-6 py-6 text-sm tex-gray-500'>
                <p>Our versatile range of clothing is designed to cater to your every need, whether you're seeking a sophisticated ensemble for a special occasion or a chic, casual outfit for everyday wear. With an emphasis on timeless designs and impeccable attention to detail, Shoporion offers an unparalleled shopping experience that redefines luxury.</p>
                <p>Key features and benefits: <br></br>
- Premium quality fabrics for utmost comfort and durability <br></br>
- Sophisticated designs for a touch of elegance and style<br></br>
- Versatile pieces suitable for any occasion <br></br>
- Unmatched craftsmanship for a refined and polished look </p>
<p>Indulge in the world of Shoporion and elevate your wardrobe with our stunning collection of apparel that exudes elegance and grace. Shop now and experience the perfect blend of style, quality, and luxury. </p>
            </div>
        </div>

        {/* RELATED PRODUCTS */}

        <RelatedProducts category={productData.category} subCategory = {productData.subCategory} />

                    
            
        </div>
    ): <div className='opacity-0'></div>
};

