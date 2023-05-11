import { useEffect, useState } from 'react';
import shoe from '../images/shoe.jpg';
import axios from '../hooks/axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const ListProduct = ({ count, max, sort }) => {
    const [item, setItem] = useState();
    const [currentMax, setCurrentMax] = useState(null);
    const history = useHistory();
    const [totalPage, setTotalPage] = useState();
    const [currentRow, setCurrentRow] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [nextRow, setNextRow] = useState(2);
    useEffect(() => {
        const fetchData = async () => {
            let apiUrl = 'shoe/all/item';
            if (currentMax !== null && currentMax <= max && currentMax >= 0) {
                apiUrl = `shoe/get/price?minPrice=0&maxPrice=${currentMax}`;
            }
            const { data } = await axios.get(apiUrl);
            setTotalPage(Math.ceil(data.length / 10));
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
    console.log(totalPage);
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
    const handleMove = (id) => {
        setCurrentPage(id);
        setCurrentRow((id - 1) * 2);
        setNextRow(id * 2);
    };

    return (
        <>
            {itemsInRows.slice(currentRow, nextRow).map((items, index) => (
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
            <div className="cursor-pointer text-center mt-5 py-2 pl-2 outline-none bg-gray-200">
                {Array.from({ length: totalPage }).map((_, Index) => (
                    <span onClick={() => handleMove(Index + 1)}>{Index + 1}</span>
                ))}
            </div>
        </>
    );
};

export default ListProduct;
