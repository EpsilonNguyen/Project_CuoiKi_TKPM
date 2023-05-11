import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import creditCard from '../images/creditCard.png';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

const TabPayment = () => {
    const history = useHistory();
    const handleComplete = () => {
        toast.success('Cám ơn bạn đã mua hàng');
        history.push('/');
    };

    return (
        <Tabs>
            <TabList>
                <div className="flex justify-center gap-8">
                    <Tab>
                        <span className="w-8 h-8 flex justify-center text-black">1</span>
                    </Tab>
                </div>
            </TabList>

            <TabPanel>
                <div className="mt-8 text-black">
                    <div className="flex flex-col gap-3 mb-8">
                        <span className="text-center">
                            <i
                                className="fa fa-check rounded-full h-16 w-16 text-white bg-blue-400 text-3xl pt-3"
                                aria-hidden="true"
                            ></i>
                        </span>
                        <span className="font-bold text-3xl text-center">Success</span>
                    </div>

                    <div className="flex justify-center">
                        <button
                            onClick={handleComplete}
                            className="text-white bg-blue-400 text-center py-3 w-48 mb-12 rounded-md"
                            type="button"
                        >
                            Complete
                        </button>
                    </div>
                </div>
            </TabPanel>
        </Tabs>
    );
};

export default TabPayment;
