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
    const [max, setMax] = useState(2000);
    const [hotDeal, setHotDeal] = useState();
    const handleClickProductItem = () => {
        history.push('/product-items');
    };
    const [active, setActive] = useState(true);
    const [countByBrand, setCountByBrand] = useState([]);
    const [numToShow, setNumToShow] = useState(3);
    const [sort, setSort] = useState('name');

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
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get('shoe/hotdeal/brand/total');
            setHotDeal(data.data);
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
                                {hotDeal?.slice(0, 4).map((item, index) => (
                                    <li key={index} className="py-2">
                                        <span>{item?.brand}</span>
                                        <span className="pr-2 float-right">{item?.total}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-5 w-48  bg-gray-100">
                        <div className="py-2 pl-2 border-b-2 border-gray-300">
                            <span>PRICES</span>
                        </div>
                        <div className="pl-2">
                            <span>Ranger:</span>
                            <span className="pr-2 float-right">
                                ${min} - ${max}
                            </span>
                            <input
                                onChange={(e) => {
                                    setMax(e.target.value);
                                }}
                                type="range"
                                min="0"
                                max="2000"
                                step="2"
                                className="w-full"
                            />
                        </div>
                    </div>

                    <div className="mt-5 w-48  bg-gray-100">
                        <div className="py-2 pl-2 border-b-2 border-gray-300">
                            <span>BRAND</span>
                        </div>
                        <div className="pl-2">
                            {countByBrand?.slice(0, numToShow).map((item, index) => (
                                <ul key={index} class="py-2 list-none">
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
                        <span className="ml-12 mr-5">Sort By</span>
                        <div>
                            <select
                                onChange={(e) => setSort(e.target.value)}
                                className="w-24 bg-gray-200 border-2 border-black"
                            >
                                <option value="name">Name</option>
                                <option value="price">Price</option>
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

                    <ListProduct max={max} sort={sort} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Product;
