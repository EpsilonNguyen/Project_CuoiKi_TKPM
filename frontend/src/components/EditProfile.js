import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import axios from '../hooks/axios';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const EditProfile = () => {
    const [info, setInfo] = useState();
    const { user } = useContext(AuthContext);
    const [image, setImage] = useState(null);
    const history = useHistory()
    if (user === null) {
        history.push('/login')
    }

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`user/profile/${user._id}`);
            setInfo(data.data);
        };
        fetchData();
    }, [user._id]);
    const handleChange = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };
    const handleFileChange = (event) => {
        setImage(event.target.files[0]);
    };
    const handleFileChoose = () => {
        document.getElementById('fileInput').click();
    };
    const handleSave = async () => {
        try {
            await axios.put(`user/update/${user._id}`, {
                fullname: info?.fullname,
                gender: info?.gender,
                address: info?.address,
            });
            toast.success('Cập nhật user thành công');
        } catch (err) {
            console.log(err.message);
        }
    };
    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('avatar', image);
        try {
            await axios.put(`user/uploadAvatar/${user._id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            toast.success('Cập nhật Avartar thành công');
        } catch (err) {
            console.log(err.message);
        }
    };
    return (
        <div className="flex flex-col gap-5">
            <div className="flex mt-8 mb-3">
                <div className="font-bold text-3xl flex flex-col justify-center">Edit Profile</div>
                <div className="h-24 w-24 rounded-full ml-auto">
                    <img className='h-24 w-24 rounded-full' src={image ? URL.createObjectURL(image) : info?.avatar} alt="" />
                    <input id="fileInput" type="file" style={{ display: 'none' }} onChange={handleFileChange} />
                    <div className='flex gap-3 justify-center mt-2'>
                        <button className='bg-blue-400 text-white cursor-pointer px-2 py-1 hover:scale-110 hover:font-bold' onClick={handleFileChoose}>Choose</button>
                        <button className='bg-teal-400 text-white cursor-pointer px-2 py-1 hover:scale-110 hover:font-bold' onClick={handleUpload}>Upload</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <label>Full name</label>
                <input
                    defaultValue={info?.fullname}
                    type="text"
                    id="fullname"
                    onChange={(e) => handleChange(e)}
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
                        <option value="Male" selected={info?.gender === 'Male'}>
                            Nam
                        </option>
                        <option value="Female" selected={info?.gender === 'Female'}>
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
                    defaultValue={info?.address}
                    id="address"
                    type="text"
                    onChange={(e) => handleChange(e)}
                    placeholder="Address"
                    className="border-2 border-gray-500 px-3 py-1"
                />
            </div>

            <div onClick={handleSave} className="flex gap-5">
                <button type="button" className="border-2 border-teal-400 w-24 h-10 hover:bg-teal-300 hover:text-white">
                    Save
                </button>
            </div>
        </div>
    );
};

export default EditProfile;
