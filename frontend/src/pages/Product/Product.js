import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ListProduct from '../../components/ListProduct';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from '../../hooks/axios';

const Product = () => {
    const history = useHistory();
    const [count, setCount] = useState(10);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(50);

    const handleClickProductItem = () => {
        history.push('/product-items');
    };
    const [active, setActive] = useState(true);

    const [countByBrand, setCountByBrand] = useState([]);
    const [numToShow, setNumToShow] = useState(3);
    const [shoes, setShoes] = useState(['Nike', 'Adidas', 'Vans', 'Balenciaga', 'Converse', 'Puma']);
    useEffect(() => {
        const fetchData = async () => {
            let countArray = [];
            for (let i = 0; i < 6; i++) {
                const { data } = await axios.get(`shoe/brand/${shoes[i]}/total`);
                countArray.push(data.total);
            }
            setCountByBrand(countArray || 0);
        };
        fetchData();
    }, []);
    const moreItem = () => {
        setNumToShow(numToShow + 3);
        setActive(false);
    };
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
                                <li className="py-2">
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
                            <span className="pr-2 float-right">${min} - ${max}</span>
                            <input
                                onChange={(e) => { setMax(e.target.value) }}
                                type="range" min="0" max="50" step="2" className='w-full' />
                        </div>
                    </div>

                    <div className="mt-5 w-48  bg-gray-100">
                        <div className="py-2 pl-2 border-b-2 border-gray-300">
                            <span>BRAND</span>
                        </div>
                        <div className="pl-2">
                            {countByBrand?.slice(0, numToShow).map((item, index) => (
                                <ul class="py-2 list-none">
                                    <li>
                                        <span>{shoes[index]}</span>
                                        <span className="pr-2 float-right">{item}</span>
                                    </li>
                                </ul>
                            ))}
                        </div>
                    </div>

                    {active && (
                        <div className="cursor-pointer text-center text-sm mt-5 py-2 pl-2 outline-none w-48 bg-gray-200">
                            <button onClick={moreItem}>MORE</button>
                        </div>
                    )}
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
                                <option value={10}>10</option>
                                <option value={15}>15</option>
                                <option value={20}>20</option>
                            </select>
                        </div>
                        <div className="absolute right-24">
                            <span>
                                <i className="fa fa-th-large text-blue-400" aria-hidden="true"></i>
                            </span>
                            <span
                                className="ml-8"
                                onClick={() => {
                                    handleClickProductItem();
                                }}
                            >
                                <i className="fa fa-bars" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>

                    <ListProduct count={count} />

                    <div className="cursor-pointer text-center mt-5 py-2 pl-2 outline-none bg-gray-200">
                        <span>1 2 3 4 5</span>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Product;
