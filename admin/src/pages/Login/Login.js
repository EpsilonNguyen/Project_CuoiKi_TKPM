import logo from '../../images/logo.png';
import { useHistory } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import axios from '../../hooks/axios';

const Login = () => {
    const history = useHistory();
    const { dispatch } = useContext(AuthContext);

    const [empty, setEmpty] = useState({
        email: false,
        password: false,
    });
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });
    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
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
        }
        if (!flag) return flag;
        setEmpty({
            password: false,
            email: false,
        });
        return flag;
    };
    const handleLogin = async (e) => {
        e.preventDefault();
        if (checkForm() === false) return;
        try {
            const { data } = await axios.post('auth/loginAdmin', credentials);
            dispatch({ type: 'LOGIN_SUCCESS', payload: data });
            history.push('/admin');
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
                    <div className="flex">
                        <div>
                            <input type="checkbox" value="" />
                            <label> Nhớ mật khẩu</label>
                        </div>
                        <span className="ml-auto font-bold cursor-pointer">Quên mật khẩu</span>
                    </div>
                    <button
                        onClick={(e) => handleLogin(e)}
                        className="item-center bg-black text-white py-2 rounded-md"
                        type="button"
                    >
                        Đăng nhập
                    </button>
                </div>
            </div>
            <div className="w-[50%] flex justify-center">
                <img className="h-screen py-2" src={logo} alt="logo" />
            </div>
        </div>
    );
};

export default Login;