import logo from '../../images/logo.png';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from '../../hooks/axios';
import { AiFillEye } from 'react-icons/ai';

const Register = () => {
    const history = useHistory();
    const [rePassword, setRePassword] = useState('');
    const [info, setInfo] = useState({
        email: '',
        fullname: '',
        gender: 'Male',
        password: '',
    });

    const handleChange = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };
    const handleChecked = async (e) => {
        setInfo((prev) => ({ ...prev, gender: e.target.value }));
    };

    async function isExistedUser() {
        try {
            const { data } = await axios.get(`user/get-profile?email=${info.email}`);
            if (data.success === false) {
                return false;
            }
            return true;
        } catch (error) { }
    }
    async function register() {
        try {
            const { data } = await axios.post(`auth/register`, info);
            if (data.success === false) {
                return false;
            }
            return true;
        } catch (error) { }
    }

    const handleRegister = async () => {
        if (isEmpty()) {
            toast.error('Vui lòng điền đầy đủ thông tin');
            return;
        }
        if (!isValidEmail(info?.email)) {
            toast.error('Vui lòng nhập đúng định dạng email');
            return;
        }
        if (await isExistedUser()) {
            toast.error('Email đã tồn tại');
            return;
        }
        if (checkPassword() === false) {
            return;
        }
        if (await register()) {
            toast.success('Đăng kí thành công');
            history.push('/login');
        }
    };
    const isValidEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };
    const handleCheckEmail = () => {
        if (!isValidEmail(info.email)) {
            toast.error('Vui lòng nhập đúng định dạng email');
        }
    };
    const checkPassword = () => {
        if (info.password.length < 3 || rePassword.length < 3) {
            toast.error('Mật khẩu ít nhất 3 ký tự');
            return false;
        }
        if (info.password !== rePassword) {
            toast.error('Mật khẩu không hợp lệ');
            return false;
        }
        return true;
    };
    const isEmpty = () => {
        if (
            info.email.length === 0 ||
            info.gender.length === 0 ||
            info.fullname.length === 0 ||
            info.password.length === 0 ||
            rePassword.length === 0
        )
            return true;
        return false;
    };
    return (
        <div className="relative flex">
            <div className="w-[50%] h-full flex justify-center mt-24">
                <div className="flex flex-col gap-6 w-[300px]">
                    <div className="text-4xl">Đăng Ký</div>
                    <div className="flex flex-col">
                        <label className="font-bold">Địa chỉ Email</label>
                        <input
                            id="email"
                            className="border-2 border-gray-400 rounded-md mt-2 p-1"
                            type="text"
                            onBlur={handleCheckEmail}
                            onChange={handleChange}
                            placeholder="abc@gmail.com"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-bold">Họ và tên</label>
                        <input
                            id="fullname"
                            className="border-2 border-gray-400 rounded-md mt-2 p-1"
                            type="text"
                            onChange={handleChange}
                            placeholder="Nguyễn Văn A"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-bold">Mật khẩu</label>
                        <input
                            id="password"
                            className="border-2 border-gray-400 rounded-md mt-2 p-1"
                            type="password"
                            onChange={handleChange}
                            placeholder="**********"
                        />

                    </div>
                    <div className="flex flex-col">
                        <label className="font-bold">Nhập lại mật khẩu</label>
                        <input
                            id="rePassword"
                            onChange={(e) => setRePassword(e.target.value)}
                            className="border-2 border-gray-400 rounded-md mt-2 p-1"
                            type="password"
                            placeholder="**********"
                        />

                    </div>
                    <div className="flex px-6">
                        <div>
                            <input
                                id="gender"
                                type="checkbox"
                                value="Male"
                                onChange={handleChecked}
                                checked={info.gender === 'Male'}
                            />
                            <label>Male</label>
                        </div>
                        <div className="ml-auto">
                            <input
                                id="gender"
                                type="checkbox"
                                value="Female"
                                onChange={handleChecked}
                                checked={info.gender === 'Female'}
                            />
                            <label>Female</label>
                        </div>
                    </div>
                    <button
                        onClick={handleRegister}
                        className="item-center bg-black text-white py-2 rounded-md"
                        type="button"
                    >
                        Đăng ký
                    </button>
                    <div className="flex justify-center gap-2">
                        <p>Bạn đã có tài khoản</p>
                        <span
                            className="font-bold cursor-pointer"
                            onClick={() => {
                                history.push('/login');
                            }}
                        >
                            Đăng nhập ngay
                        </span>
                    </div>
                </div>
            </div>
            <div className="w-[50%] flex justify-center">
                <img className="h-screen py-2" src={logo} alt="logo" />
            </div>
        </div>
    );
};

export default Register;
