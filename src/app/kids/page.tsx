import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { client } from '../../lib/sanityClient'
import { Image as IImage } from 'sanity'
import { urlForImage } from '../../../sanity/lib/image'

export const getProductData = async () => {

    const res = await client.fetch(`*[_type== 'product' && category-> name== 'kids']`)
    return res;
  }
  
  interface IProduct{
    title:string,
    description:string,
    price: number,
    image: IImage,
    category: {
      name:string
    }
  }


export default async function Kids() {

    const data:IProduct[]= await getProductData();
    console.log(data);

   const handleAddToCart = async () => {
    const res = fetch("/api/cart", {
        method: "POST",
        body:JSON.stringify({
            // product_id: item._id
        })
    })
   }

  return (
    <div className="w-full my-20">
        <div className='grid grid-cols-1 md:grid-cols-4 gap-x-2 px-6'>
        {data.map((item) => (
        <div className="item py-4">
            <Link href={/products/+item.title}>
            <Image 
                src={urlForImage(item.image).url()} 
                alt="product" 
                width={300} 
                height={500} 
            />
            <p className='font-bold'>${item.price}</p>
            <p className='font-bold'>{item.title}</p>
            </Link>
        </div>
        ))}
        </div>
    </div>
  )
}
