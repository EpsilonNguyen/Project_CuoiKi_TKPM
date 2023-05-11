const EditPayment = () => {
    return (
        <div className='flex flex-col gap-5'>
            <div className='font-bold text-3xl flex flex-col justify-center  mt-8 mb-3'>Edit Payment</div>
            <div className='flex flex-col gap-2'>
                <label>Enter the amount to deposit</label>
                <input type='text' placeholder='' className='border-2 border-gray-500 px-3 py-1' />
            </div>
            <div className='flex gap-5'>
                <button type='button' className='border-2 border-teal-400 w-24 h-10 hover:bg-teal-300 hover:text-white'>
                    Cancel
                </button>
                <button type='button' className='border-2 border-teal-400 w-24 h-10 hover:bg-teal-300 hover:text-white'>
                    Recharge
                </button>
            </div>
        </div>
    )
}

export default EditPayment;