import { BsPencilFill } from 'react-icons/bs';
import { BiLogOut } from 'react-icons/bi';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { toast } from 'react-toastify';

const DropdownProfile = () => {
    const history = useHistory();
    const { user, dispatch } = useContext(AuthContext);

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch({ type: 'LOGIN_START' });
        try {
            dispatch({ type: 'LOGOUT' });
            toast.success('Đăng xuất thành công');
        } catch (err) {
            dispatch({ type: 'LOGIN_FAILURE', payload: err.response.data });
        }
    };

    return (
        <div className="absolute right-[270px] top-10 shadow-md w-40 bg-white">
            <div
                onClick={() => {
                    history.push('/profile');
                }}
                className="flex gap-4 pl-5 py-2 border-b-2 cursor-pointer hover:text-white hover:bg-blue-300 hover:font-bold"
            >
                <BsPencilFill size={20} />
                <span>Edit Profile</span>
            </div>
            <div
                onClick={(e) => handleLogout(e)}
                className="flex gap-4 pl-5 py-2 border-b-2 cursor-pointer hover:text-white hover:bg-blue-300 hover:font-bold"
            >
                <BiLogOut size={25} />
                <span>Logout</span>
            </div>
        </div>
    );
};

export default DropdownProfile;
