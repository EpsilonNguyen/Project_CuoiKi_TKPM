import { BsPencilFill } from 'react-icons/bs';
import { BiLogOut } from 'react-icons/bi';
import { useHistory } from "react-router-dom";

const DropdownProfile = () => {
    const history = useHistory();

    return (
        <div className="absolute left-[760px] top-10 border-2 w-40 bg-white">
            <div onClick={() => { history.push("/profile") }}
                className='flex gap-4 pl-5 py-2 border-b-2 cursor-pointer hover:text-white hover:bg-blue-300'>
                <BsPencilFill size={20} />
                <span>Edit Profile</span>
            </div>
            <div
                className='flex gap-4 pl-5 py-2 border-b-2 cursor-pointer hover:text-white hover:bg-blue-300'>
                <BiLogOut size={25} />
                <span>Logout</span>
            </div>
        </div>
    )
}

export default DropdownProfile;