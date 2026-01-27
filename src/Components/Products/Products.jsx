import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { shopContext } from '../../Context/Context';
import { assets } from '../../assets/assets';
import './Products.css'
import { Link } from 'react-router-dom';


const Products = () => {
    const { products, addtocard, Def, Count, setCount } = useContext(shopContext);

    const { productsid } = useParams();

    const product = products.find(p => p._id === productsid);

    if (!product) {
        return <div> Product not found</div>;
    }


    return (
        <div className='px-4 sm:px-10 lg:px-20 pt-10 border-t border-gray-200'>
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-14">
                {/* Product Images */}
                <div className="flex-1 flex flex-col-reverse md:flex-row gap-3">
                    <div className="flex md:flex-col overflow-x-auto md:overflow-y-scroll justify-between md:justify-normal w-full md:w-[18.7%]">
                        {product.image.map((item, index) => (
                            <img
                                key={index}
                                src={item}
                                alt={product.name}
                                className="w-[24%] md:w-full md:mb-3 flex-shrink-0 cursor-pointer rounded-lg border border-gray-100"
                            />
                        ))}
                    </div>
                    <div className="w-full md:w-[80%]">
                        <img
                            className='w-full h-auto rounded-xl shadow-sm'
                            src={product.image[0]}
                            alt={product.name}
                        />
                    </div>
                </div>

                {/* Product Info */}
                <div className="flex-1">
                    <h1 className='text-2xl md:text-3xl font-medium text-gray-800'>{product.name}</h1>
                    <div className="flex items-center gap-1 mt-2">
                        <img src={assets.star_icon} alt="" className="w-3" />
                        <img src={assets.star_icon} alt="" className="w-3" />
                        <img src={assets.star_icon} alt="" className="w-3" />
                        <img src={assets.star_icon} alt="" className="w-3" />
                        <img src={assets.star_dull_icon} alt="" className="w-3" />
                        <p className="pl-2 text-gray-500 text-sm">(122)</p>
                    </div>
                    <p className='mt-5 text-3xl font-medium'>${product.price}</p>
                    <p className='mt-5 text-gray-500 md:w-4/5 leading-relaxed'>{product.description}</p>

                    <div className="flex flex-col gap-4 my-8">
                        <p className='font-medium text-gray-800'>Select Size</p>
                        <div className="flex gap-2">
                            {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                                <button
                                    key={size}
                                    className="border py-2 px-4 bg-gray-100 hover:bg-black hover:text-white transition-all cursor-pointer"
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={() => { addtocard(product._id); Def(); }}
                        className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 uppercase transition-all shadow-md'
                    >
                        Add to Cart
                    </button>

                    <hr className='mt-8 sm:w-4/5 border-gray-200' />
                    <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
                        <p>100% Original product.</p>
                        <p>Cash on delivery is available on this product.</p>
                        <p>Easy return and exchange policy within 7 days.</p>
                    </div>
                </div>
            </div>

            {/* Description & Reviews */}
            <div className="mt-20">
                <div className="flex">
                    <b className="border px-5 py-3 text-sm border-gray-200">Description</b>
                    <p className="border px-5 py-3 text-sm border-gray-200 text-gray-500">Reviews (122)</p>
                </div>
                <div className="flex flex-col gap-4 border border-gray-200 px-6 py-6 text-sm text-gray-500">
                    <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence.</p>
                    <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
                </div>
            </div>

            {/* Related Products */}
            <div className="my-24">
                <div className="text-center text-3xl py-2">
                    <h1 className='text-3xl font-medium text-black'>
                        <span className='text-gray-400'>RELATED</span> PRODUCTS
                    </h1>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 mt-10">
                    {products
                        .filter(p => p.category === product.category && p._id !== product._id)
                        .slice(0, 5)
                        .map((item, index) => (
                            <div key={index}>
                                <Link to={`/Products/${item._id}`} onClick={() => window.scrollTo(0, 0)}>
                                    <div className="overflow-hidden rounded-lg">
                                        <img
                                            className='w-full hover:scale-110 transition ease-in-out duration-300'
                                            src={item.image[0]}
                                            alt={item.name}
                                        />
                                    </div>
                                    <p className='pt-3 pb-1 text-sm text-gray-700'>{item.name}</p>
                                    <p className='text-sm font-medium'>${item.price}</p>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Products;

