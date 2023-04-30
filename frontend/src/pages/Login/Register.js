import logo from '../../images/logo.png';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

const Register = () => {
    const history = useHistory();

    const [check, setCheck] = useState({
        existedEmail: false,
        errorPwd: false,
    });
    const [info, setInfo] = useState({
        email: '',
        password: '',
        rePassword: '',
        gender: 'male',
        birthday: '',
    });

    return (
        <div className="relative flex">
            <div className="w-[50%] h-full flex justify-center mt-24">
                <div className="flex flex-col gap-6 w-[300px]">
                    <div className="text-4xl">Đăng Ký</div>
                    <div className="flex flex-col">
                        <label className="font-bold">Địa chỉ Email</label>
                        <input
                            className="border-2 border-gray-400 rounded-md mt-2 p-1"
                            type="text"
                            placeholder="abc@gmail.com"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-bold">Họ và tên</label>
                        <input
                            className="border-2 border-gray-400 rounded-md mt-2 p-1"
                            type="text"
                            placeholder="Nguyễn Văn A"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-bold">Mật khẩu</label>
                        <input
                            className="border-2 border-gray-400 rounded-md mt-2 p-1"
                            type="text"
                            placeholder="**********"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-bold">Nhập lại mật khẩu</label>
                        <input
                            className="border-2 border-gray-400 rounded-md mt-2 p-1"
                            type="text"
                            placeholder="**********"
                        />
                    </div>
                    <div className="flex px-6">
                        <div>
                            <input type="checkbox" value="" />
                            <label> Nam</label>
                        </div>
                        <div className="ml-auto">
                            <input type="checkbox" value="" />
                            <label> Nữ</label>
                        </div>
                    </div>
                    <button className="item-center bg-black text-white py-2 rounded-md" type="button">
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
