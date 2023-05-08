import Footer from '../../components/Footer';
import Header from '../../components/Header';
import BestSeller from '../../components/BestSeller';
import { useHistory } from 'react-router-dom';
import shoe from '../../images/shoe.jpg';
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ProductInfo = () => {
    const history = useHistory();
    const [num, setNum] = useState(0);

    const handlePluse = () => {
        if (num >= 15) {
            setNum(15);
        } else {
            let newNum = num + 1;
            setNum(newNum);
        }
    }

    const handleMinus = () => {
        if (num === 0) {
            setNum(0);
        } else {
            let newNum = num - 1;
            setNum(newNum);
        }
    }

    return (
        <div className="h-full text-black bg-white" >
            <Header />
            <div className='flex gap-8 mb-5'>
                <div className='w-56 ml-12'>
                    <img className="h-48 w-56 shadow-xl" src={shoe} alt="shoe" />
                </div>

                <div className='w-[400px] flex flex-col gap-5'>
                    <div className='font-bold text-xl border-b-2 py-3'>
                        Nike Air Max 270 React
                    </div>

                    <div className='flex flex-col gap-3 border-b-2 pb-3'>
                        <div className='flex'>
                            <span className='text-blue-400 font-bold text-xl'>$299.43</span>
                            <span className='text-blue-300 ml-auto mr-16'>Quantity: 1000</span>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <span>Availability:</span>
                            <span>Category:</span>
                            <span>Free Shipping</span>
                        </div>
                    </div>
                    <div className='border-b-2 pb-3'>
                        <div className="flex gap-5">
                            <label>Size</label>
                            <select name="cars" id="cars"
                                className="border-2 border-gray-400 px-3 w-[100px]">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="opel">Opel</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex border-b-2 pb-3'>
                        <div className='flex gap-3 bg-gray-300 px-3 h-8 w-[80px]'>
                            <button className='text-blue-500 font-bold' type='button' onClick={() => { handleMinus() }}>-</button>
                            <span className='m-auto'>{num}</span>
                            <button className='text-blue-500 font-bold' type='button' onClick={() => { handlePluse() }}>+</button>
                        </div>
                        <button className="bg-blue-200 h-8 w-32 ml-auto">
                            <i class="fa fa-cart-plus" aria-hidden="true"></i>
                            <span className="ml-2">Add To Cart</span>
                        </button>
                    </div>
                </div>

                <div className='border-2 border-gray-300 w-[750px]'>
                    <Tabs>
                        <TabList>
                            <Tab>Product Information</Tab>
                            <Tab>Reviews</Tab>
                            <Tab>Another tab</Tab>
                        </TabList>

                        <TabPanel>
                            <h2>Any content 1</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 2</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 3</h2>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
            <BestSeller />
            <Footer />
        </div>
    )
}

export default ProductInfo;