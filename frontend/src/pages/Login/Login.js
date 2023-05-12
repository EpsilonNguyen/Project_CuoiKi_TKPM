import logo from '../../images/logo.png';
import { useHistory } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import axios from '../../hooks/axios';
import { toast } from 'react-toastify';
import { AiFillEye } from 'react-icons/ai';

const Login = () => {
    const history = useHistory();

    const [empty, setEmpty] = useState({
        email: false,
        password: false,
    });
    const { dispatch } = useContext(AuthContext);
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });
    const [check, setCheck] = useState(false);
    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const checkForm = () => {
        let flag = true;
        if (credentials.password === '') {
            setEmpty((prev) => ({
                ...prev,
                password: true,
            }));
            flag = false;
        } else if (credentials.email.trim() === '') {
            setEmpty((prev) => ({
                ...prev,
                email: true,
            }));
            flag = false;
        } else if (check === true) {
            flag = false;
        }
        if (!flag) return flag;
        setEmpty({
            password: false,
            email: false,
        });
        return flag;
    };
    const handleCheck = () => {
        if (!isValidEmail(credentials.email)) {
            setCheck(true);
            toast.error('Vui lòng nhập đúng định dạng email');
        } else setCheck(false);
    };
    const handleLogin = async (e) => {
        e.preventDefault();
        if (checkForm() === false) {
            return;
        };
        try {
            const { data } = await axios.post('auth/login', credentials);
            // Cookies.set("userInfo", JSON.stringify(data));
            console.log(data)
            if (!data.success) {
                toast.error(data.message);
                return;
            }
            dispatch({ type: 'LOGIN_SUCCESS', payload: data });
            history.push('/');
        } catch (err) {
            dispatch({ type: 'LOGIN_FAILURE', payload: err.message });
        }
    };
    return (
        <div className="relative flex">
            <div className="w-[50%] h-full flex justify-center mt-32">
                <div className="flex flex-col gap-8 w-[300px]">
                    <div className="text-3xl">Chào mừng bạn trở lại</div>
                    <div className="flex flex-col">
                        <label className="font-bold">Địa chỉ Email</label>
                        <input
                            className="border-2 border-gray-400 rounded-md mt-2 p-1"
                            type="text"
                            placeholder="abc@gmail.com"
                            id="email"
                            onBlur={handleCheck}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-bold">Mật khẩu</label>
                        <input
                            className="border-2 border-gray-400 rounded-md mt-2 p-1"
                            type="password"
                            placeholder="**********"
                            id="password"
                            onChange={(e) => handleChange(e)}
                        />

                    </div>

                    <button
                        onClick={(e) => handleLogin(e)}
                        className="item-center bg-black text-white py-2 rounded-md"
                        type="button"
                    >
                        Đăng nhập
                    </button>
                    <div className="flex justify-center gap-2">
                        <p>Bạn chưa có tài khoản</p>
                        <span
                            className="font-bold cursor-pointer"
                            onClick={() => {
                                history.push('/register');
                            }}
                        >
                            Đăng kí ngay
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

export default Login;
