import logo from '../images/adidas.jpg';

const ContentLogo = () => {
    return (
        <div className="flex bg-blue-400 bg-opacity-75 my-12">
            <div className='w-[50%] flex flex-col gap-5 justify-center pl-32 text-white'>
                <span className='text-4xl'>Adidas Men Running Sneakers</span>
                <span>Performance and design. Taken right to the edge.</span>
                <span className='cursor-pointer hover:underline uppercase'>Shop now</span>
            </div>
            <div className='w-[50%] flex justify-center'>
                <img className='h-[450px]' src={logo} alt="logo" />
            </div>
        </div>
    )
}

export default ContentLogo;