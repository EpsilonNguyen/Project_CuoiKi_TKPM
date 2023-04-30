import logo from '../images/homepage.jpg';
import FlashSale from './FlashSale';

const MainLogo = () => {
    return (
        <div className="">
            <img className='h-[750px] w-full' src={logo} alt="logo" />
            <div className='text-white font-bold text-6xl flex flex-col gap-5 absolute top-2/3 left-28'>
                <span>Super Flash Sale</span>
                <span>50% off</span>
            </div>
            <FlashSale />
        </div>
    )
}

export default MainLogo;