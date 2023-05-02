import Footer from '../../components/Footer';
import Header from '../../components/Header';
import BestSeller from '../../components/BestSeller';
import { useHistory } from 'react-router-dom';

const ProductInfo = () => {
    const history = useHistory();

    const handleClickProductItem = () => {
        history.push("/product-items");
    }

    return (
        <div className="h-full text-black bg-white" >
            <Header />
            <div>
                Halo
            </div>
            <BestSeller />
            <Footer />
        </div>
    )
}

export default ProductInfo;