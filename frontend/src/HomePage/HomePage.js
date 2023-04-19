import Header from '../components/Header/Header';
import BestSeller from '../components/BestSeller/BestSeller';
import LatestNew from '../components/LatestNew/LatestNew';
import FeaturePro from '../components/FeaturePro/FeaturePro';
import Footer from '../components/Footer/Footer';

const HomePage = () => {
    return (
        <div className="h-full text-black bg-white">
            <Header />
            <div className="h-64 border-2 border-red-500">
                <div className='inline-flex flex-col'>
                    <span className="">Super Flash Sale</span>
                    <span className="">50% off</span>
                </div>
            </div>
            <BestSeller />
            <div className="mt-3 h-64 border-2 border-red-500">
                <div className="inline-flex flex-col">
                    <span className="">Adidas Men Running</span>
                    <span> Sneakers</span>
                </div>
                <div>
                    <span className="">SHOP NOW</span>
                </div>
            </div>
            <LatestNew />
            <FeaturePro />
            <Footer />
        </div>
    )
}

export default HomePage;