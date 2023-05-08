import { useEffect, useState } from 'react';
import shoe from '../images/shoe.jpg';
import axios from '../hooks/axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const ListProduct = ({ count, max, sort }) => {
    const [item, setItem] = useState();
    const [currentMax, setCurrentMax] = useState(null);
    const history = useHistory();

    useEffect(() => {
        const fetchData = async () => {
            let apiUrl = 'shoe/all/item';
            if (currentMax !== null && currentMax <= max && currentMax >= 0) {
                apiUrl = `shoe/get/price?minPrice=0&maxPrice=${currentMax}`;
            }
            const { data } = await axios.get(apiUrl);
            const itemData = data.data || data;
            if (sort === 'name') {
                itemData.sort((a, b) => a.name.localeCompare(b.name));
            } else if (sort === 'price') {
                itemData.sort((a, b) => a.price - b.price);
            }
            setItem(itemData);
        };
        fetchData();
    }, [currentMax, max]);

    useEffect(() => {
        if (max !== currentMax) {
            setCurrentMax(max);
        }
    }, [max, currentMax]);
    const splitItems = (items, chunkSize) => {
        let result = [];
        for (let i = 0; i < items.length; i += chunkSize) {
            result.push(items.slice(i, i + chunkSize));
        }
        return result;
    };
    const productDetail = (id) => {
        history.push(`/product-info/${id}`);
    };

    const maxRows = Math.ceil(count / 5);
    const itemsInRows = item ? splitItems(item, 5) : [];
    return (
        <>
            {itemsInRows.slice(0, maxRows).map((items, index) => (
                <div key={index} className="flex mt-5">
                    {items &&
                        items.map((item) => (
                            <div key={item._id} className="w-48 mr-12" onClick={() => productDetail(item._id)}>
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
