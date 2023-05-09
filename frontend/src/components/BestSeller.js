import axios from '../hooks/axios';
import { useEffect, useState } from 'react';
import shoe from '../images/shoe.jpg';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const BestSeller = () => {
    const [shoes, setShoes] = useState();
    const history = useHistory();

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
    return (
        <div className="">
            <div className="text-center text-3xl mb-5">
                <span>BEST SELLER</span>
            </div>

            <div className="flex gap-12 mt-5 pl-12">
                {shoes?.slice(0, 6).map((item) => (
                    <div key={item._id} onClick={() => productInfo(item._id)} className="w-48 border-2 border-gray-200">
                        <img className="h-48" src={item.images[0]} alt="shoe" />
                        <div className="text-center bg-gray-100">
                            <span>{item.name}</span>
                            <span> ${item.price}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-3 font-bold text-center cursor-pointer hover:underline hover:text-blue-500">
                <span>LOAD MORE</span>
            </div>
        </div>
    );
};

export default BestSeller;
