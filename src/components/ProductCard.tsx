import React from 'react'
import Image from 'next/image'

const ProductCard = () => {
  return (
    <div className='grid sm:grid-col md:grid-cols-2 lg:grid-cols-3'>

                  {/* Card 1 */}

      <div className='border-2 border-red-400 w-7/12 ml-16'>
      <div className='flex justify-center py-3'>
      <Image
        src={"/imageWebsite.jpg"}
        alt='product card'
        width={200}
        height={200}
        />
      </div>

        <p className='text-center my-3'>Computer</p>
        <p className='text-center my-3'>Rs 20,000</p>

        <div className='grid justify-center'>
        <button className='bg-blue-400 rounded-md py-2 px-2 my-3'>Add to Cart</button>
        </div>
      </div>

      {/* Card 2 */}

      <div className='border-2 border-red-400 w-7/12 ml-16 md:ml-14 mt-8 md:mt-0'>
      <div className='grid justify-center py-3 '>
      <Image
        src={"/imageWebsite.jpg"}
        alt='product card'
        width={200}
        height={200}
        />
      </div>

        <p className='text-center my-3'>Computer</p>
        <p className='text-center my-3'>Rs 20,000</p>

        <div className='grid justify-center'>
        <button className='bg-blue-400 rounded-md py-2 px-2 my-3'>Add to Cart</button>
        </div>
      </div>

      {/* Card 3 */}

      <div className='border-2 border-red-400 w-7/12 ml-16 mt-8 md:mt-8 lg:mt-0'>
      <div className='grid justify-center py-3'>
      <Image
        src={"/imageWebsite.jpg"}
        alt='product card'
        width={200}
        height={200}
        />
      </div>

        <p className='text-center my-3'>Computer</p>
        <p className='text-center my-3'>Rs 20,000</p>

        <div className='grid justify-center'>
        <button className='bg-blue-400 rounded-md py-2 px-2 my-3'>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
