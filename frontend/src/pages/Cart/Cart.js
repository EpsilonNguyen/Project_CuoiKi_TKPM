import { useContext, useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import shoe from '../../images/shoe.jpg';
import ModalPayment from '../../components/ModalPayment';
import { AuthContext } from '../../contexts/AuthContext';
import axios from '../../hooks/axios';
import { toast } from 'react-toastify';

const Cart = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [cart, setCart] = useState();
    const { user } = useContext(AuthContext);
    const [cartID, setCartID] = useState();
    const [info, setInfo] = useState();
    const [address, setAddress] = useState();
    const [state, setState] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`user/profile/${user._id}`);
            setInfo(data.data);
            setAddress(data.data.address);
        };
        fetchData();
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`cart/get/user/${user._id}`);
            setCartID(data._id);
            setCart(data?.shoeItem);
        };
        fetchData();
    }, [state]);
    const fetchData = async (id) => {
        try {
            const { data } = await axios.get(`shoe/${id}`);
            return data;
        } catch (error) {
            console.log(error.message);
        }
    };
    const updateCart = async (e, id, quantity) => {
        const data = await fetchData(id);
        let newQuantity = quantity;
        if (e.target.value === 'plus' && e.target.id === id) {
            if (newQuantity < data.quantity) {
                newQuantity = newQuantity + 1;
                await axios.put(`/cart/update/quantity/${cartID}`, {
                    shoeID: id,
                    quantity: newQuantity,
                });
                setCart((prevCart) =>
                    prevCart.map((item) => {
                        if (item.id === id) {
                            return { ...item, quantity: newQuantity };
                        }
                        return item;
                    }),
                );
            } else {
                toast.error('Só lượng vượt quá tồn kho');
            }
        }
        if (e.target.value === 'minus' && e.target.id === id) {
            if (newQuantity > 1) {
                newQuantity = newQuantity - 1;
                await axios.put(`/cart/update/quantity/${cartID}`, {
                    shoeID: id,
                    quantity: newQuantity,
                });
                setCart((prevCart) =>
                    prevCart.map((item) => {
                        if (item.id === id) {
                            return { ...item, quantity: newQuantity };
                        }
                        return item;
                    }),
                );
            } else {
                toast.error('Không thể bớt sản phẩm nữa');
            }
        }
    };
    const totalPrice = cart?.reduce(
        (accumulate, currentValue) => accumulate + currentValue.price * currentValue.quantity,
        0,
    );
    const handleOnClickCheckOut = async () => {
        console.log(totalPrice, address, cart);
        if (info?.wallet < totalPrice) {
            toast.error('Tiền không đủ để mua hàng');
        } else {
            try {
                await axios.post(`checkout/${user._id}`, {
                    shipAddress: address,
                    listShoe: cart,
                    totalPrice: totalPrice,
                });
                setCart();
                setIsOpen(true);
            } catch (err) {
                console.log(err.message);
            }
        }
    };
    const handleDelete = async (id) => {
        try {
            await axios.put(`cart/update/delete/${cartID}/${id}`);
            setState((prev) => !prev);
            toast.success('Xóa giày khỏi giỏ hàng thành công');
        } catch (err) {
            console.log(err.message);
        }
    };
    return (
        <div>
            <ModalPayment modalIsOpen={modalIsOpen} closeModal={closeModal} />
            <div>
                <Header />
                <div>
                    <div className="flex uppercase my-8 border-b-2 border-gray-200 pb-2">
                        <span className="ml-24">Product</span>
                        <div className="ml-auto mr-16 flex gap-48">
                            <span>Price</span>
                            <span>Qty</span>
                            <span>Unit price</span>
                        </div>
                    </div>

                    {cart?.map((item) => (
                        <div key={item?._id} className="flex border-b-2 border-gray-200 py-6">
                            <span onClick={() => handleDelete(item?.id)}>X</span>
                            <div className="ml-24 flex">
                                <img className="h-20 w-24" src={item?.image} alt="shoe" />
                                <span className="m-auto pl-5">{item?.name}</span>
                            </div>
                            <div className="ml-auto mr-16 flex">
                                <span className="m-auto">${item?.price * item?.quantity}</span>
                                <div className="flex gap-3 ml-48 bg-gray-300 px-3 h-1/2 m-auto">
                                    <button
                                        className="text-blue-500 font-bold"
                                        type="button"
                                        value="minus"
                                        id={item?.id}
                                        onClick={(e) => {
                                            updateCart(e, item?.id, item?.quantity);
                                        }}
                                    >
                                        -
                                    </button>
                                    <span className="m-auto">{item?.quantity}</span>
                                    <button
                                        className="text-blue-500 font-bold"
                                        type="button"
                                        value="plus"
                                        id={item?.id}
                                        onClick={(e) => {
                                            updateCart(e, item?.id, item?.quantity);
                                        }}
                                    >
                                        +
                                    </button>
                                </div>
                                <span className="m-auto ml-56">${item?.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="float-right mr-32 my-20">
                    <div className="font-bold text-2xl flex gap-40 mt-2">
                        <span>Total</span>
                        <span className="float-right">${totalPrice}</span>
                    </div>
                    <button
                        className="text-white bg-blue-400 w-full py-2 mt-2"
                        type="button"
                        onClick={() => {
                            handleOnClickCheckOut();
                        }}
                    >
                        Check out
                    </button>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Cart;
