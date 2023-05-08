import axios from '../hooks/axios';
import { useContext, useEffect, useState } from 'react';
import shoe from '../images/shoe.jpg';
import { toast } from 'react-toastify';

const ListProductItem = ({ count }) => {
    const [product, setProduct] = useState();
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get('shoe/all/item');
            setProduct(data);
        };
        fetchData();
    }, []);

    const handleAddCart = (id) => {
        // console.log(id);
    };
    return (
        <div className="flex mt-5">
            <div className="mt-5">
                {product &&
                    product.slice(0, count).map((item) => (
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

                                <button onClick={() => handleAddCart(item._id)} className="bg-blue-200 h-10 w-32 mt-5">
                                    <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                    <span className="ml-2">Add To Cart</span>
                                </button>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default ListProductItem;
