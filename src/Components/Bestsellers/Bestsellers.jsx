import React from 'react'
import { useContext } from 'react'
import { shopContext } from '../../Context/Context'
import './Bestsellers.css'
import { Link } from 'react-router-dom'
const Bestsellers = () => {
    const { products } = useContext(shopContext);
    return (
        <div className='best-sellers px-4 sm:px-10 lg:px-20'>
            <div className="text">
                <h1 className='text-4xl font-medium text-black mb-5 relative'> <span className='text-gray-400 text-4xl'>Best</span> Sellers</h1>
                <p className='text-gray-600'>this is bestsellers</p>
            </div>
            <div className="collections grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-6">
                {products.filter(product => product.bestseller === true).slice(0, 8).map((asset, _id) =>
                    <div key={_id} className="card">
                        <Link to={`/Products/${asset._id}`}>          <img className='w-full rounded-2xl hover:scale-90 transition ease-in-out duration-300 cursor-pointer' src={asset.image[0]} alt="image" />  </Link>
                        <p className='text-gray-600' >{asset.name}</p>
                        <p className='text-black font-bold'>${asset.price}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Bestsellers