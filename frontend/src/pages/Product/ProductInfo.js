import Footer from '../../components/Footer';
import Header from '../../components/Header';
import BestSeller from '../../components/BestSeller';
import { useHistory } from 'react-router-dom';
import shoe from '../../images/shoe.jpg';
import { useContext, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import axios from '../../hooks/axios';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthContext';

const ProductInfo = () => {
    const history = useHistory();
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [num, setNum] = useState(1);
    const [info, setInfo] = useState();
    const [size, setSize] = useState();
    const [image, setImage] = useState();
    const [selectedImage, setSelectedImage] = useState();

    const handlePluse = () => {
        if (num >= info?.quantity) {
            setNum(info?.quantity);
        } else {
            let newNum = num + 1;
            setNum(newNum);
        }
    };

    const handleMinus = () => {
        if (num === 1) {
            setNum(1);
        } else if (num === 0) {
            setNum(0);
        } else {
            let newNum = num - 1;
            setNum(newNum);
        }
    };
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`shoe/${id}`);
            setInfo(data);
            setSize(data.sizes[0]);
            setImage(data.images);
            setSelectedImage(data.images[0]);
        };
        fetchData();
    }, [id]);
    const addToCart = async () => {
        if (info?.quantity > 0 && num <= info?.quantity) {
            try {
                await axios.put(`cart/update/add/${user._id}`, {
                    id: id,
                    name: info?.name,
                    quantity: num,
                    price: info?.price,
                    size: size,
                });
                toast.success('Thêm vào giỏ hàng thành công');
            } catch (err) {
                console.log(err.message);
            }
        } else {
            toast.error('Không đủ sản phẩm để đặt hàng');
        }
    };

    return (
        <div className="h-full text-black bg-white">
            <Header />
            <div className="flex gap-8 mb-5">
                <div className="w-56 ml-12">
                    <div>
                        <img className="h-48 w-56 shadow-xl" src={selectedImage} alt="shoe" />
                    </div>
                    <div className="flex gap-1 mt-8">
                        {(image ?? []).map((item) => (
                            <div onClick={() => setSelectedImage(item)}>
                                <img className="h-24 w-40 border-2" src={item} alt="shoe" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-[400px] flex flex-col gap-5">
                    <div className="font-bold text-xl border-b-2 py-3">{info?.name}</div>

                    <div className="flex flex-col gap-3 border-b-2 pb-3">
                        <div className="flex">
                            <span className="text-blue-400 font-bold text-xl">${info?.price}</span>
                            <span className="text-blue-300 ml-auto mr-16">Quantity: {info?.quantity}</span>
                        </div>
                        <div className="flex flex-col gap-3">
                            <span>Brand: {info?.brand}</span>
                            <span>Free Shipping</span>
                        </div>
                    </div>
                    <div className="border-b-2 pb-3">
                        <div className="flex gap-5">
                            <label>Size</label>
                            <select
                                onChange={(e) => setSize(e.target.value)}
                                name="cars"
                                id="cars"
                                className="border-2 border-gray-400 px-3 w-[100px]"
                            >
                                <option value={info?.sizes[0]}>{info?.sizes[0]}</option>
                                <option value={info?.sizes[1]}>{info?.sizes[1]}</option>
                                <option value={info?.sizes[2]}>{info?.sizes[2]}</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex border-b-2 pb-3">
                        <div className="flex gap-3 bg-gray-300 px-3 h-8 w-[80px]">
                            <button
                                className="text-blue-500 font-bold"
                                type="button"
                                onClick={() => {
                                    handleMinus();
                                }}
                            >
                                -
                            </button>
                            <span className="m-auto">{num}</span>
                            <button
                                className="text-blue-500 font-bold"
                                type="button"
                                onClick={() => {
                                    handlePluse();
                                }}
                            >
                                +
                            </button>
                        </div>
                        <button
                            id="addToCart"
                            onClick={addToCart}
                            className="bg-blue-200 h-8 w-32 ml-auto hover:font-bold hover:scale-110"
                        >
                            <i class="fa fa-cart-plus" aria-hidden="true"></i>
                            <span className="ml-2">Add To Cart</span>
                        </button>
                    </div>
                </div>

                <div className="border-2 border-gray-300 w-[750px]">
                    <Tabs>
                        <TabList className="font-bold">
                            <Tab>Product Information</Tab>
                            <Tab>Reviews</Tab>
                        </TabList>

                        <TabPanel className="px-3 py-1 border-t-2 border-gray-400">
                            <h2>{info?.description}</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>{info?.reviews}</h2>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
            <BestSeller />
            <Footer />
        </div>
    );
};

export default ProductInfo;
