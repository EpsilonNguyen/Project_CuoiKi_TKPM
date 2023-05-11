import { AiOutlineEye, AiOutlineUser } from 'react-icons/ai';
import { TbShoe } from 'react-icons/tb';
import { BiLogOutCircle } from 'react-icons/bi';
import TableUser from '../../components/TableUser';
import SliderProduct from '../../components/SliderProduct';
import AddShoe from '../../components/AddShoe';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from '../../hooks/axios';

const Admin = () => {
    const [label, setLabel] = useState('listShoe');
    const history = useHistory();
    const [revenue, setRevenue] = useState();
    const [revenueMonth, setRevenueMonth] = useState();
    const { user, dispatch } = useContext(AuthContext);
    const today = new Date();
    const currentMonth = today.getMonth() + 1;
    if (user === null) {
        history.push('/');
    }
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get('checkout/revenue/all');
            setRevenue(data.data);
        };
        fetchData();
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get('checkout/revenue/month');
            setRevenueMonth(data.data);
        };
        fetchData();
    }, []);
    console.log(revenueMonth);
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch({ type: 'LOGIN_START' });
        try {
            dispatch({ type: 'LOGOUT' });
            toast.success('Đăng xuất thành công');
            history.push('/');
        } catch (err) {
            dispatch({ type: 'LOGIN_FAILURE', payload: err.response.data });
        }
    };
    return (
        <div className="relative">
            <div className="h-[80px] border-b-2">
                <div className="font-bold text-teal-300 text-4xl pl-24 pt-3">Shoe Shop</div>
                <span>Doanh thu : {revenue}</span>
                <span>
                    Doanh thu tháng {currentMonth} : {revenueMonth}
                </span>
            </div>
            <div className="flex h-[680px]">
                <div className="border-r-2 w-[180px] flex flex-col gap-1 pt-5">
                    {label === 'listShoe' ? (
                        <div
                            onClick={() => {
                                setLabel('listShoe');
                            }}
                            className="flex gap-3 pl-8 text-white bg-teal-300 rounded-xl cursor-pointer py-2"
                        >
                            <AiOutlineEye size={25} />
                            <span>List Shoes</span>
                        </div>
                    ) : (
                        <div
                            onClick={() => {
                                setLabel('listShoe');
                            }}
                            className="flex gap-3 pl-8 hover:text-white hover:bg-teal-300 rounded-xl cursor-pointer py-2"
                        >
                            <AiOutlineEye size={25} />
                            <span>List Shoes</span>
                        </div>
                    )}
                    {label === 'user' ? (
                        <div
                            onClick={() => {
                                setLabel('user');
                            }}
                            className="flex gap-3 pl-8 text-white bg-teal-300 rounded-xl cursor-pointer py-2"
                        >
                            <AiOutlineUser size={25} />
                            <span>Users</span>
                        </div>
                    ) : (
                        <div
                            onClick={() => {
                                setLabel('user');
                            }}
                            className="flex gap-3 pl-8 hover:text-white hover:bg-teal-300 rounded-xl cursor-pointer py-2"
                        >
                            <AiOutlineUser size={25} />
                            <span>Users</span>
                        </div>
                    )}
                    {label === 'shoe' ? (
                        <div
                            onClick={() => {
                                setLabel('shoe');
                            }}
                            className="flex gap-3 pl-8 text-white bg-teal-300 rounded-xl cursor-pointer py-2"
                        >
                            <TbShoe size={25} />
                            <span>Shoes</span>
                        </div>
                    ) : (
                        <div
                            onClick={() => {
                                setLabel('shoe');
                            }}
                            className="flex gap-3 pl-8 hover:text-white hover:bg-teal-300 rounded-xl cursor-pointer py-2"
                        >
                            <TbShoe size={25} />
                            <span>Shoes</span>
                        </div>
                    )}
                    <div
                        onClick={(e) => handleLogout(e)}
                        className="flex gap-3 pl-8 mt-auto hover:text-white hover:bg-teal-300 rounded-xl cursor-pointer py-2"
                    >
                        <BiLogOutCircle size={25} />
                        <span>Logout</span>
                    </div>
                </div>
                <div className="w-full pt-5 bg-gray-100 bg-opacity-25">
                    <div className="flex">
                        <span className="ml-8 font-bold text-teal-300 text-2xl">Shoes</span>
                    </div>
                    <div className="ml-8 mr-16 mt-4 shadow-xl">
                        {label === 'listShoe' && <SliderProduct />}
                        {label === 'user' && <TableUser />}
                        {label === 'shoe' && <AddShoe />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
