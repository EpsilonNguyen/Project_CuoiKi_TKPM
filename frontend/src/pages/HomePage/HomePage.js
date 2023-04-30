import Header from '../../components/Header';
import BestSeller from '../../components/BestSeller';
import LatestNew from '../../components/LatestNew';
import FeaturePro from '../../components/FeaturePro';
import Footer from '../../components/Footer';
import MainLogo from '../../components/MainLogo';
import ContentLogo from '../../components/ContentLogo';

const HomePage = () => {
    return (
        <div className="h-full text-black bg-white">
            <Header />
            <MainLogo />
            <BestSeller />
            <ContentLogo />
            <LatestNew />
            <FeaturePro />
            <Footer />
        </div>
    )
}

export default HomePage;