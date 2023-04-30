import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const Header = () => {
    const history = useHistory();
    const { user } = useContext(AuthContext);
    console.log(user);
    const handleLogin = () => {
        if (user != null) {
            history.push('/');
        } else history.push('/login');
    };

    return (
        <div>
            <div className="py-3 flex w-full">
                <div>
                    <span className="ml-20 mr-5">EN</span>
                    <span>USD</span>
                </div>
                <div className="ml-auto mr-32 flex gap-8">
                    <span onClick={handleLogin} className="cursor-pointer hover:text-blue-300">
                        <i className="fa fa-user mr-2" aria-hidden="true"></i>My profile
                    </span>
                    <span
                        onClick={() => {
                            history.push('/cart');
                        }}
                        className="cursor-pointer hover:text-blue-300"
                    >
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    </span>
                    <span className="cursor-pointer hover:text-blue-300">Items</span>
                    <span className="cursor-pointer hover:text-blue-300">$0.00</span>
                    <span className="cursor-pointer hover:text-blue-300">
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </span>
                </div>
            </div>

            <div className="py-4 flex w-full bg-white border-gray-100 border-t-2">
                <div>
                    <span className="ml-32 font-bold">E-Comm</span>
                </div>
                <div className="flex ml-auto gap-32 mr-32 font-bold">
                    <span
                        onClick={() => {
                            history.push('/');
                        }}
                        className="cursor-pointer hover:text-blue-300"
                    >
                        HOME
                    </span>
                    <span
                        onClick={() => {
                            history.push('/product');
                        }}
                        className="cursor-pointer hover:text-blue-300"
                    >
                        SNEAKERS
                    </span>
                    <span
                        onClick={() => {
                            history.push('/contact');
                        }}
                        className="cursor-pointer hover:text-blue-300"
                    >
                        CONTACT
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Header;
