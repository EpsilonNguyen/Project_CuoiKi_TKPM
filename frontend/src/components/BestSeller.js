import axios from '../hooks/axios';
import { useEffect, useState } from 'react';
import shoe from '../images/shoe.jpg';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const BestSeller = () => {
    const [shoes, setShoes] = useState();
    const history = useHistory();
    const [count, setCount] = useState(5);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get('http://localhost:8800/shoeshop/api/shoe/hotdeal/sold');
            setShoes(data.data);
        };
        fetchData();
    }, []);
    const productInfo = (id) => {
        history.push(`/product-info/${id}`);
    };
    const splitItems = (items, chunkSize) => {
        let result = [];
        for (let i = 0; i < items.length; i += chunkSize) {
            result.push(items.slice(i, i + chunkSize));
        }
        return result;
    };
    const maxRows = Math.ceil(count / 5);
    const itemsInRows = shoes ? splitItems(shoes, 6) : [];
    const handleMore = () => {
        setCount(count + 5);
    };
    return (
        <div className="">
            <div className="text-center text-3xl mb-5">
                <span>BEST SELLER</span>
            </div>

            {itemsInRows.slice(0, maxRows).map((items, index) => (
                <div key={index} className="flex gap-12 mt-5 pl-12">
                    {items?.map((item) => (
                        <div
                            key={item._id}
                            onClick={() => productInfo(item._id)}
                            className="w-48 border-2 border-gray-200"
                        >
                            <img className="h-48" src={item.images[0]} alt="shoe" />
                            <div className="text-center bg-gray-100">
                                <span>{item.name}</span>
                                <span> ${item.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            ))}

            <div
                onClick={handleMore}
                className="mt-3 font-bold text-center cursor-pointer hover:underline hover:text-blue-500"
            >
                <span>LOAD MORE</span>
            </div>
        </div>
    );
};

export default BestSeller;
