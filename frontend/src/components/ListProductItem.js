import axios from '../hooks/axios';
import { useContext, useEffect, useState } from 'react';
import shoe from '../images/shoe.jpg';
import { toast } from 'react-toastify';
import { AuthContext } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const ListProductItem = ({ sort, max }) => {
    const [paginate, setPaginate] = useState(0);
    const { user } = useContext(AuthContext);
    const [item, setItem] = useState();
    const [currentMax, setCurrentMax] = useState(null);
    const [currentRow, setCurrentRow] = useState(0);
    const [nextRow, setNextRow] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState();
    const history = useHistory();

    useEffect(() => {
        const fetchData = async () => {
            let apiUrl = 'shoe/all/item';
            if (currentMax !== null && currentMax <= max && currentMax >= 0) {
                apiUrl = `shoe/get/price?minPrice=0&maxPrice=${currentMax}`;
            }
            const { data } = await axios.get(apiUrl);
            setTotalPage(Math.ceil(data.length / 5));
            const itemData = data.data || data;
            if (sort === 'name') {
                itemData.sort((a, b) => a.name.localeCompare(b.name));
            } else if (sort === 'price') {
                itemData.sort((a, b) => a.price - b.price);
            }
            setItem(itemData);
        };
        fetchData();
    }, [currentMax, max, sort]);

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
    const itemsInRows = item ? splitItems(item, 5) : [];
    const handleMove = (id) => {
        setPaginate(id - 1);
        setCurrentPage(id);
        setCurrentRow(id - 1);
        setNextRow(id);
    };
    const handleAddCart = async (product) => {
        if (user !== null) {
            console.log(product.price);
            if (product.quantity > 0) {
                try {
                    await axios.put(`cart/update/add/${user._id}`, {
                        id: product._id,
                        name: product.name,
                        quantity: 1,
                        image: product.images[0],
                        price: product.price,
                        size: product.sizes[0],
                    });
                    toast.success('Thêm vào giỏ hàng thành công');
                } catch (err) {
                    console.log(err.message);
                }
            } else toast.error('Không còn sản phẩm trong kho');
        } else history.push('login');
    };
    return (
        <>
            <div className="flex mt-5">
                {itemsInRows.slice(currentRow, nextRow).map((items, index) => (
                    <div key={index} className="mt-5">
                        {items &&
                            items.map((item) => (
                                <div key={item._id} className="flex border-b-2 pb-5">
                                    <img className="w-56 h-48" src={item.images[0]} alt="shoe" />

                                    <div className="ml-5 bg-white inline-flex flex-col">
                                        <div className="border-b-2 border-gray-200 py-2">
                                            <span className="text-2xl text-black">{item.name}</span>
                                        </div>
                                        <div className="inline-flex flex-col">
                                            <span className="text-2xl text-blue-400 font-bold">${item.price}</span>
                                            <span>{item.description}</span>
                                        </div>

                                        <button
                                            onClick={() => handleAddCart(item)}
                                            className="bg-blue-200 h-10 w-32 mt-5"
                                        >
                                            <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                            <span className="ml-2">Add To Cart</span>
                                        </button>
                                    </div>
                                </div>
                            ))}
                    </div>
                ))}
            </div>
            <div className="cursor-pointer text-center mt-5 py-2 pl-2 outline-none bg-gray-200 flex gap-1 justify-center">
                {Array.from({ length: totalPage }).map((_, Index) => (
                    <span
                        className={
                            paginate === Index ? 'bg-blue-500 text-white font-bold px-2' : ' hover:bg-gray-400 px-2'
                        }
                        onClick={() => handleMove(Index + 1)}
                    >
                        {Index + 1}
                    </span>
                ))}
            </div>
        </>
    );
};

export default ListProductItem;
