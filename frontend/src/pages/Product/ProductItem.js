import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ListProductItem from '../../components/ListProductItem';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

const ProductItem = () => {
    const history = useHistory();

    const handleClickList = () => {
        alert('Click me');
    };

    const handleClickProductList = () => {
        history.push('/product');
    };
    const [count, setCount] = useState(3);

    return (
        <div className="h-full text-black bg-white">
            <Header />
            <div className="flex ml-10 mb-10">
                <div className="w-48">
                    <div className="w-48 bg-gray-100">
                        <div className="py-2 pl-2 border-b-2 border-gray-300">
                            <span>Hot Deals</span>
                        </div>
                        <div className="pl-2">
                            <ul class="py-2 list-none cursor-pointer">
                                <li
                                    className="py-2"
                                    onClick={() => {
                                        handleClickList();
                                    }}
                                >
                                    <span>Nike</span>
                                    <span className="pr-2 float-right">30</span>
                                </li>
                                <li className="py-2">
                                    <span>Adidas</span>
                                    <span className="pr-2 float-right">30</span>
                                </li>
                                <li className="py-2">
                                    <span>Vans</span>
                                    <span className="pr-2 float-right">30</span>
                                </li>
                                <li className="py-2">
                                    <span>Airmax</span>
                                    <span className="pr-2 float-right">30</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-5 w-48  bg-gray-100">
                        <div className="py-2 pl-2 border-b-2 border-gray-300">
                            <span>PRICES</span>
                        </div>
                        <div className="pl-2">
                            <span>Ranger:</span>
                            <span className="pr-2 float-right">$13.99 - $25.99</span>
                        </div>
                    </div>

                    <div className="mt-5 w-48  bg-gray-100">
                        <div className="py-2 pl-2 border-b-2 border-gray-300">
                            <span>BRAND</span>
                        </div>
                        <div className="pl-2">
                            <ul class="py-2 list-none">
                                <li>
                                    <span>Nike</span>
                                    <span className="pr-2 float-right">30</span>
                                </li>
                            </ul>
                            <ul class="py-2  list-none">
                                <li>
                                    <span>Adidas</span>
                                    <span className="pr-2 float-right">30</span>
                                </li>
                            </ul>
                            <ul class="py-2  list-none">
                                <li>
                                    <span>Slemens</span>
                                    <span className="pr-2 float-right">30</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="cursor-pointer text-center text-sm mt-5 py-2 pl-2 outline-none w-48 bg-gray-200">
                        <button>MORE</button>
                    </div>
                </div>

                <div className="ml-10 mr-20 w-full">
                    <div className="h-48 border-2 border-red-500">This is picture</div>

                    <div className="flex cursor-pointer mt-5 py-2 pl-2 bg-gray-200">
                        <span className="ml-5">13 Items</span>
                        <span className="ml-12 mr-5">Sort By</span>
                        <div>
                            <select className="w-24 bg-gray-200 border-2 border-black">
                                <option value="1">Name</option>
                                <option value="2">Price</option>
                                <option value="3">Brand</option>
                            </select>
                        </div>
                        <span className="ml-24 mr-5">Show</span>
                        <div>
                            <select
                                className="w-24 bg-gray-200 border-2 border-black"
                                value={count}
                                onChange={(e) => setCount(e.target.value)}
                            >
                                <option value={3}>3</option>
                                <option value={5}>5</option>
                                <option value={7}>7</option>
                            </select>
                        </div>
                        <div className="absolute right-24">
                            <span
                                onClick={() => {
                                    handleClickProductList();
                                }}
                            >
                                <i className="fa fa-th-large" aria-hidden="true"></i>
                            </span>
                            <span className="ml-8">
                                <i className="fa fa-bars text-blue-400" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>

                    <ListProductItem count={count} />

                    <div className="cursor-pointer text-center mt-5 py-2 pl-2 outline-none bg-gray-200">
                        <span>1 2 3 4 5</span>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProductItem;
