import { useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import shoe from '../../images/shoe.jpg';
import ModalPayment from '../../components/ModalPayment';

const Cart = () => {
    const [num, setNum] = useState(0);
    const [modalIsOpen, setIsOpen] = useState(false);

    const handlePluse = () => {
        if (num >= 15) {
            setNum(15);
        } else {
            let newNum = num + 1;
            setNum(newNum);
        }
    }

    const handleMinus = () => {
        if (num === 0) {
            setNum(0);
        } else {
            let newNum = num - 1;
            setNum(newNum);
        }
    }

    function closeModal() {
        setIsOpen(false);
    }

    const handleOnClickCheckOut = () => {
        setIsOpen(true);
    }

    return (
        <div>
            <ModalPayment
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
            />
            <div>
                <Header />
                <div>
                    <div className='flex uppercase my-8 border-b-2 border-gray-200 pb-2'>
                        <span className='ml-24'>Product</span>
                        <div className='ml-auto mr-16 flex gap-48'>
                            <span>Price</span>
                            <span>Qty</span>
                            <span>Unit price</span>
                        </div>
                    </div>

                    <div className='flex border-b-2 border-gray-200 py-6'>
                        <div className='ml-24 flex'>
                            <img className='h-20 w-24' src={shoe} alt="shoe" />
                            <span className='m-auto pl-5'>Nike Airmax 270 react</span>
                        </div>
                        <div className='ml-auto mr-16 flex'>
                            <span className='m-auto'>$998</span>
                            <div className='flex gap-3 ml-48 bg-gray-300 px-3 h-1/2 m-auto'>
                                <button className='text-blue-500 font-bold' type='button' onClick={() => { handleMinus() }}>-</button>
                                <span className='m-auto'>{num}</span>
                                <button className='text-blue-500 font-bold' type='button' onClick={() => { handlePluse() }}>+</button>
                            </div>
                            <span className='m-auto ml-56'>$499</span>
                        </div>
                    </div>

                    <div className='flex border-b-2 border-gray-200 py-8'>
                        <div className='ml-24 flex'>
                            <img className='h-20 w-24' src={shoe} alt="shoe" />
                            <span className='m-auto pl-5'>Nike Airmax 270 react</span>
                        </div>
                        <div className='ml-auto mr-16 flex'>
                            <span className='m-auto'>$998</span>
                            <div className='flex gap-3 ml-48 bg-gray-300 px-3 h-1/2 m-auto'>
                                <button className='text-blue-500 font-bold' type='button' onClick={() => { handleMinus() }}>-</button>
                                <span className='m-auto'>{num}</span>
                                <button className='text-blue-500 font-bold' type='button' onClick={() => { handlePluse() }}>+</button>
                            </div>
                            <span className='m-auto ml-56'>$499</span>
                        </div>
                    </div>

                </div>
                <div className='float-right mr-32 my-20'>
                    <div>
                        Subtotal
                        <span className='float-right'>$988</span>
                    </div>
                    <div className='mt-1'>
                        Shipping fee
                        <span className='float-right'>$20</span>
                    </div>
                    <div className='mt-1'>
                        Coupon
                        <span className='float-right'>No</span>
                    </div>
                    <div className='font-bold text-2xl flex gap-40 mt-2'>
                        <span>Total</span>
                        <span className='float-right'>$118</span>
                    </div>
                    <button className='text-white bg-blue-400 w-full py-2 mt-2' type='button'
                        onClick={() => { handleOnClickCheckOut() }}
                    >Check out</button>
                </div>
                <Footer />
            </div >
        </div>
    )
}

export default Cart;