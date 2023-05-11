import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import axios from '../hooks/axios';

const EditProfile = () => {
    const [info, setInfo] = useState();
    const [address, setAddress] = useState();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`cart/get/user/${user._id}`);
            setAddress(data.shipAddress);
        };
        fetchData();
    }, [user._id]);
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`user/profile/${user._id}`);
            setInfo(data.data);
        };
        fetchData();
    }, [user._id]);
    console.log(address);
    const handleChange = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };
    return (
        <div className="flex flex-col gap-5">
            <div className="flex mt-8 mb-3">
                <div className="font-bold text-3xl flex flex-col justify-center">Edit Profile</div>
                <div className="border-2 border-gray-500 h-24 w-24 rounded-full ml-auto"></div>
            </div>
            <div className="flex flex-col gap-2">
                <label>Full name</label>
                <input
                    defaultValue={info?.fullname}
                    type="text"
                    placeholder="Full name"
                    className="border-2 border-gray-500 px-3 py-1"
                />
            </div>
            <div className="flex gap-5">
                <div className="flex flex-col gap-2 w-[50%]">
                    <label>Email</label>
                    <input
                        defaultValue={info?.email}
                        disabled
                        type="text"
                        placeholder="Email"
                        className="border-2 border-gray-500 px-3 py-1"
                    />
                </div>
                <div className="flex flex-col gap-2 w-[50%]">
                    <label>Password</label>
                    <input
                        disabled
                        type="password"
                        placeholder="*******"
                        className="border-2 border-gray-500 px-3 py-1"
                    />
                </div>
            </div>
            <div className="flex gap-5">
                <div className="flex flex-col gap-2">
                    <label>Gender</label>
                    <select
                        id="gender"
                        value={info?.gender}
                        onChange={(e) => handleChange(e)}
                        className="w-24 border-2 border-gray-500 py-1"
                    >
                        <option value="male" selected={info?.gender === 'male'}>
                            Nam
                        </option>
                        <option value="female" selected={info?.gender === 'female'}>
                            Nữ
                        </option>
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label>Wallet</label>
                    <input
                        disabled
                        defaultValue={info?.wallet}
                        type="text"
                        placeholder="Wallet"
                        className="border-2 border-gray-500 px-3 py-1"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <label>Address</label>
                <input
                    defaultValue={address && address?.address + ',' + address?.city + ',' + address?.province}
                    disabled
                    type="text"
                    placeholder="Address"
                    className="border-2 border-gray-500 px-3 py-1"
                />
            </div>

            <div className="flex gap-5">
                <button type="button" className="border-2 border-teal-400 w-24 h-10 hover:bg-teal-300 hover:text-white">
                    Save
                </button>
            </div>
        </div>
    );
};

export default EditProfile;
