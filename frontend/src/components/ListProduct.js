import { useEffect, useState } from 'react';
import shoe from '../images/shoe.jpg';
import axios from '../hooks/axios';

const ListProduct = ({ count }) => {
    const [item, setItem] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get('shoe/all');
            setItem(data);
        };
        fetchData();
    }, []);
    const splitItems = (items, chunkSize) => {
        let result = [];
        for (let i = 0; i < items.length; i += chunkSize) {
            result.push(items.slice(i, i + chunkSize));
        }
        return result;
    };
    const maxRows = Math.ceil(count / 5);
    const itemsInRows = item ? splitItems(item, 5) : [];
    return (
        <>
            {itemsInRows.slice(0, maxRows).map((items, index) => (
                <div key={index} className="flex mt-5">
                    {items &&
                        items.map((item) => (
                            <div key={item._id} className="w-48 mr-12">
                                <img className="h-48" src={item.images[0]} alt="shoe" />
                                <div className="py-3 text-center border-2 border-gray-200 bg-gray-100">
                                    <span>{item.name}</span>
                                    <span> ${item.price}</span>
                                </div>
                            </div>
                        ))}
                </div>
            ))}
        </>
    );
};

export default ListProduct;
