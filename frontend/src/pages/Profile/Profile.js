import { BsPencilFill } from 'react-icons/bs';
import { MdPayment } from 'react-icons/md';
import EditProfile from '../../components/EditProfile';
import EditPayment from '../../components/EditPayment';
import { useState } from 'react';

const Profile = () => {
    const [label, setLabel] = useState('profile');

    return (
        <div className="relative flex">
            <div className="w-56 border-r-2 h-screen">
                {label === 'profile' ?
                    <div onClick={() => { setLabel('profile') }}
                        className='flex gap-4 pl-10 py-3 border-b-2 cursor-pointer bg-teal-300 text-white'>
                        <BsPencilFill size={20} />
                        <span className=''>Edit Profile</span>
                    </div>
                    :
                    <div onClick={() => { setLabel('profile') }}
                        className='flex gap-4 pl-10 py-3 border-b-2 cursor-pointer hover:bg-teal-300 hover:text-white'>
                        <BsPencilFill size={20} />
                        <span className=''>Edit Profile</span>
                    </div>
                }

                {label === 'payment' ?
                    <div onClick={() => { setLabel('payment') }}
                        className='flex gap-4 pl-10 cursor-pointer border-b-2 py-3 bg-teal-300 text-white'>
                        <MdPayment size={25} />
                        <span className=''>Payment</span>
                    </div>
                    :
                    <div onClick={() => { setLabel('payment') }}
                        className='flex gap-4 pl-10 cursor-pointer border-b-2 py-3 hover:bg-teal-300 hover:text-white'>
                        <MdPayment size={25} />
                        <span className=''>Payment</span>
                    </div>
                }
            </div>
            <div className='w-full px-56'>
                {label === 'profile' && <EditProfile />}
                {label === 'payment' && <EditPayment />}
            </div>
        </div>
    )
}

export default Profile;