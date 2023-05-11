const EditProfile = () => {
    return (
        <div className='flex flex-col gap-5'>
            <div className='flex mt-8 mb-3'>
                <div className='font-bold text-3xl flex flex-col justify-center'>Edit Profile</div>
                <div className='border-2 border-gray-500 h-24 w-24 rounded-full ml-auto'>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <label>Full name</label>
                <input type='text' placeholder='Full name' className='border-2 border-gray-500 px-3 py-1' />
            </div>
            <div className='flex gap-5'>
                <div className='flex flex-col gap-2 w-[50%]'>
                    <label>Email</label>
                    <input type='text' placeholder='Email' className='border-2 border-gray-500 px-3 py-1' />
                </div>
                <div className='flex flex-col gap-2 w-[50%]'>
                    <label>Password</label>
                    <input type='password' placeholder='Password' className='border-2 border-gray-500 px-3 py-1' />
                </div>
            </div>
            <div className='flex gap-5'>
                <div className='flex flex-col gap-2'>
                    <label>Gender</label>
                    <select
                        className="w-24 border-2 border-gray-500 py-1"
                    >
                        <option>Nam</option>
                        <option>Nữ</option>
                    </select>
                </div>
                <div className='flex flex-col gap-2'>
                    <label>Wallet</label>
                    <input type='text' placeholder='Wallet' className='border-2 border-gray-500 px-3 py-1' />
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <label>Address</label>
                <input type='text' placeholder='Address' className='border-2 border-gray-500 px-3 py-1' />
            </div>
            <div className='flex flex-col gap-2'>
                <label>Avatar</label>
                <input type='text' placeholder='Avatar' className='border-2 border-gray-500 px-3 py-1' />
            </div>
            <div className='flex gap-5'>
                <button type='button' className='border-2 border-teal-400 w-24 h-10 hover:bg-teal-300 hover:text-white'>
                    Cancel
                </button>
                <button type='button' className='border-2 border-teal-400 w-24 h-10 hover:bg-teal-300 hover:text-white'>
                    Save
                </button>
            </div>
        </div>
    )
}

export default EditProfile;