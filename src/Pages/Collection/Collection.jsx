import './Collection.css'
import { useContext } from 'react'
import { shopContext } from '../../Context/Context'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
const Collection = () => {

    const { products, Ser, setSer } = useContext(shopContext);

    const [category, setCategory] = useState([]);
    const [subCategory, setSubcategory] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const handleFilter = (e) => {
        const value = e.target.value;
        if (category.includes(value)) {
            setCategory((prev) => prev.filter((c) => c !== value));
        } else {
            setCategory(prev => [...prev, value]);
        }
    }

    const handleSubFilter = (e) => {
        const value = e.target.value;
        if (subCategory.includes(value)) {
            setSubcategory((prev) => prev.filter((c) => c !== value));
        } else {
            setSubcategory(prev => [...prev, value]);
        }
    }

    const filterproducts = () => {
        let filtered = products.slice();

        if (category.length > 0) {
            filtered = filtered.filter(product => category.includes(product.category));
        }

        if (subCategory.length > 0) {
            filtered = filtered.filter(product => subCategory.includes(product.subCategory));
        }

        setFilteredProducts(filtered);
    };


    useEffect(() => {
        filterproducts();
        if (category.length === 0 && subCategory.length === 0) {
            setFilteredProducts(products);
        }
    }, [category, subCategory, products])


    const [SearchTerm, setSearchTerm] = useState('');
    useEffect(() => {

        const newProducts = products.filter((p) => p.name.toLowerCase().includes(SearchTerm.toLowerCase()))

        setFilteredProducts(newProducts)
    }, [SearchTerm, products])




    return (
        <div className='collection px-4 sm:px-10 lg:px-20 border-t border-gray-200 pt-10'>
            {Ser === true ?
                <div className="search-bar bg-gray-50 text-center py-10 mb-10 relative">
                    <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
                        <input
                            onChange={(e) => setSearchTerm(e.target.value)}
                            type="text"
                            placeholder='Search for products...'
                            className='flex-1 outline-none bg-inherit text-sm'
                        />
                        <img src={assets.search_icon} alt="search" className='w-4 cursor-pointer' />
                    </div>
                    <img
                        src={assets.cross_icon}
                        onClick={() => setSer(false)}
                        className='inline w-3 cursor-pointer ml-3'
                        alt="close"
                    />
                </div>
                : null
            }

            <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10">
                {/* Filter Section */}
                <div className="min-w-60">
                    <p className="my-2 text-xl flex items-center cursor-pointer gap-2 uppercase font-medium">
                        Filters
                    </p>

                    {/* Category Filter */}
                    <div className="border border-gray-300 pl-5 py-3 mt-6 sm:block">
                        <p className="mb-3 text-sm font-medium uppercase">Categories</p>
                        <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                            <label className="flex gap-2 cursor-pointer">
                                <input type="checkbox" className="w-3" value="Men" onChange={handleFilter} /> Men
                            </label>
                            <label className="flex gap-2 cursor-pointer">
                                <input type="checkbox" className="w-3" value="Women" onChange={handleFilter} /> Women
                            </label>
                            <label className="flex gap-2 cursor-pointer">
                                <input type="checkbox" className="w-3" value="Kids" onChange={handleFilter} /> Kids
                            </label>
                        </div>
                    </div>

                    {/* Type Filter */}
                    <div className="border border-gray-300 pl-5 py-3 my-5 sm:block">
                        <p className="mb-3 text-sm font-medium uppercase">Type</p>
                        <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                            <label className="flex gap-2 cursor-pointer">
                                <input type="checkbox" className="w-3" value="Topwear" onChange={handleSubFilter} /> Topwear
                            </label>
                            <label className="flex gap-2 cursor-pointer">
                                <input type="checkbox" className="w-3" value="Bottomwear" onChange={handleSubFilter} /> Bottomwear
                            </label>
                            <label className="flex gap-2 cursor-pointer">
                                <input type="checkbox" className="w-3" value="Winterwear" onChange={handleSubFilter} /> Winterwear
                            </label>
                        </div>
                    </div>
                </div>

                {/* Product Section */}
                <div className="flex-1">
                    <div className="flex justify-between text-base sm:text-2xl mb-4 items-center">
                        <h1 className='text-2xl font-medium text-black'>
                            <span className='text-gray-400'>ALL</span> COLLECTIONS
                        </h1>
                        <select
                            className="border-2 border-gray-300 text-sm px-2 py-1 outline-none"
                            onChange={(e) => {
                                // Sorting logic could be added here if needed
                            }}
                        >
                            <option value="relevant">Sort by: Relevant</option>
                            <option value="low-high">Sort by: Low to High</option>
                            <option value="high-low">Sort by: High to Low</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
                        {filteredProducts.map((asset, index) => (
                            <div key={index} className="group">
                                <Link to={`/Products/${asset._id}`} onClick={() => window.scrollTo(0, 0)}>
                                    <div className="overflow-hidden rounded-lg">
                                        <img
                                            className='w-full hover:scale-110 transition ease-in-out duration-300 cursor-pointer object-cover aspect-[3/4]'
                                            src={asset.image[0]}
                                            alt={asset.name}
                                        />
                                    </div>
                                    <p className='pt-3 pb-1 text-sm text-gray-700'>{asset.name}</p>
                                    <p className='text-sm font-medium'>${asset.price}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collection