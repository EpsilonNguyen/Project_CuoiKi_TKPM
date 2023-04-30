import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import creditCard from '../images/creditCard.png';
import { useHistory } from 'react-router-dom';

const TabPayment = () => {
    const history = useHistory();

    return (
        <Tabs>
            <TabList>
                <div className='flex justify-center gap-8'>
                    <Tab><span className="w-8 h-8 flex justify-center text-black">1</span></Tab>
                    <Tab><span className="flex justify-center text-black w-8 h-8">2</span></Tab>
                    <Tab><span className="w-8 h-8 flex justify-center text-black">3</span></Tab>
                </div>
            </TabList>

            <TabPanel>
                <div className='mt-8 text-black'>
                    <div className="flex gap-8 justify-center">
                        <div className="flex flex-col gap-4 w-[300px]">
                            <input className="pl-2 py-2 rounded-md bg-gray-100" type="text" placeholder="First Name" />
                            <input className="pl-2 py-2 rounded-md bg-gray-100" type="text" placeholder="Email Address" />
                            <span className="text-blue-500 font-bold">Select Method For Payment</span>
                            <div className="hover:bg-blue-300 p-3 font-bold">
                                <label>Credit Card Or Debit</label>
                                <input className="float-right" type="checkbox" value="" />
                            </div>
                            <div className="hover:bg-blue-300 p-3 font-bold">
                                <label>Paypal</label>
                                <input className="float-right" type="checkbox" value="" />
                            </div>
                            <div className="hover:bg-blue-300 p-3 font-bold">
                                <label>Bank Transfer</label>
                                <input className="float-right" type="checkbox" value="" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 w-[300px]">
                            <input className="pl-2 py-2 rounded-md bg-gray-100" type="text" placeholder="Last Name" />
                            <input className="pl-2 py-2 rounded-md bg-gray-100" type="text" placeholder="Mobile Phone" />
                            <textarea placeholder="Address for Delivery" className="pl-2 py-2 rounded-md bg-gray-100 h-[100px]" rows="4" cols="50">
                            </textarea>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button
                            onClick={() => { }}
                            className="text-white bg-blue-400 text-center py-3 w-48 mb-12 rounded-md" type="button">
                            Go to Payment
                        </button>
                    </div>
                </div>
            </TabPanel>
            <TabPanel>
                <div className='mt-8 text-black'>
                    <div className="flex gap-8 justify-center">
                        <div className="flex flex-col w-[300px]">
                            <img src={creditCard} alt="credit" />
                        </div>

                        <div className="flex flex-col gap-4 w-[300px]">
                            <input className="pl-2 py-2 rounded-md bg-gray-100" type="text" placeholder="Card Number" />
                            <input className="pl-2 py-2 rounded-md bg-gray-100" type="text" placeholder="Expiry" />
                            <input className="pl-2 py-2 rounded-md bg-gray-100" type="text" placeholder="Holder Number" />
                            <div className="hover:bg-blue-300 p-3 mb-8">
                                <input className="mr-2" type="checkbox" value="" />
                                <label>Save this credit card</label>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button
                            onClick={() => { }}
                            className="text-white bg-blue-400 text-center py-3 w-48 mb-12 rounded-md" type="button">
                            Confirm
                        </button>
                    </div>
                </div>
            </TabPanel>
            <TabPanel>
                <div className='mt-8 text-black'>
                    <div className="flex flex-col gap-3 mb-8">
                        <span className='text-center'>
                            <i className="fa fa-check rounded-full h-16 w-16 text-white bg-blue-400 text-3xl pt-3" aria-hidden="true"></i>
                        </span>
                        <span className='font-bold text-3xl text-center'>Success</span>
                    </div>

                    <div className="flex justify-center">
                        <button
                            onClick={() => { history.push("/") }}
                            className="text-white bg-blue-400 text-center py-3 w-48 mb-12 rounded-md" type="button">
                            Complete
                        </button>
                    </div>
                </div>
            </TabPanel>
        </Tabs>
    )
}

export default TabPayment;