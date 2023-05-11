import { useContext, useEffect, useState } from 'react';
import axios from '../hooks/axios';
import { AuthContext } from '../contexts/AuthContext';
import { toast } from 'react-toastify';

const EditPayment = () => {
    const [money, setMoney] = useState();
    const { user } = useContext(AuthContext);

    const payMoney = async () => {
        try {
            if (money > 0) {
                const { data } = await axios.post(`payment/${user._id}?totalPrice=${money}`);
                window.open(`${data.link}`, '_blank');
            } else toast.error('Vui lòng nhập số tiền lớn hơn 0');
        } catch (err) {}
    };
    const handleCheck = () => {
        if (money < 0) toast.error('Vui lòng nhập số tiền lớn hơn 0');
    };
    return (
        <div className="flex flex-col gap-5">
            <div className="font-bold text-3xl flex flex-col justify-center  mt-8 mb-3">Edit Payment</div>
            <div className="flex flex-col gap-2">
                <label>Enter the amount to deposit</label>
                <input
                    onChange={(e) => setMoney(e.target.value)}
                    onBlur={handleCheck}
                    type="number"
                    placeholder=""
                    className="border-2 border-gray-500 px-3 py-1"
                />
            </div>
            <div className="flex gap-5">
                <button
                    onClick={payMoney}
                    type="button"
                    className="border-2 border-teal-400 w-24 h-10 hover:bg-teal-300 hover:text-white"
                >
                    Recharge
                </button>
            </div>
        </div>
    );
};

export default EditPayment;
