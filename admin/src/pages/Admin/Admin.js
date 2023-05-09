import { AiOutlineEye, AiOutlineUser } from "react-icons/ai";
import { TbShoe } from "react-icons/tb";
import { BiLogOutCircle } from "react-icons/bi";
import TableUser from "../../components/TableUser";
import SliderProduct from "../../components/SliderProduct";
import AddShoe from "../../components/AddShoe";
import { useState } from "react";

const Admin = () => {
    const [label, setLabel] = useState('overview');

    return (
        <div className="relative">
            <div className="h-[80px] border-b-2">
                <div className="font-bold text-teal-300 text-4xl pl-24 pt-3">
                    Shoe Shop
                </div>
            </div>
            <div className="flex h-[680px]">
                <div className="border-r-2 w-[180px] flex flex-col gap-1 pt-5">
                    {label === 'overview' ?
                        <div
                            onClick={() => { setLabel('overview') }}
                            className="flex gap-3 pl-8 text-white bg-teal-300 rounded-xl cursor-pointer py-2">
                            <AiOutlineEye size={25} />
                            <span>Overview</span>
                        </div>
                        :
                        <div
                            onClick={() => { setLabel('overview') }}
                            className="flex gap-3 pl-8 hover:text-white hover:bg-teal-300 rounded-xl cursor-pointer py-2">
                            <AiOutlineEye size={25} />
                            <span>Overview</span>
                        </div>
                    }
                    {label === 'user' ?
                        <div
                            onClick={() => { setLabel('user') }}
                            className="flex gap-3 pl-8 text-white bg-teal-300 rounded-xl cursor-pointer py-2">
                            <AiOutlineUser size={25} />
                            <span>Users</span>
                        </div>
                        :
                        <div
                            onClick={() => { setLabel('user') }}
                            className="flex gap-3 pl-8 hover:text-white hover:bg-teal-300 rounded-xl cursor-pointer py-2">
                            <AiOutlineUser size={25} />
                            <span>Users</span>
                        </div>
                    }
                    {label === 'shoe' ?
                        <div
                            onClick={() => { setLabel('shoe') }}
                            className="flex gap-3 pl-8 text-white bg-teal-300 rounded-xl cursor-pointer py-2">
                            <TbShoe size={25} />
                            <span>Shoes</span>
                        </div>
                        :
                        <div
                            onClick={() => { setLabel('shoe') }}
                            className="flex gap-3 pl-8 hover:text-white hover:bg-teal-300 rounded-xl cursor-pointer py-2">
                            <TbShoe size={25} />
                            <span>Shoes</span>
                        </div>
                    }
                    <div className="flex gap-3 pl-8 mt-auto hover:text-white hover:bg-teal-300 rounded-xl cursor-pointer py-2">
                        <BiLogOutCircle size={25} />
                        <span>Logout</span>
                    </div>
                </div>
                <div className="w-full pt-5 bg-gray-100 bg-opacity-25">
                    <div className="flex">
                        <span className="ml-8 font-bold text-teal-300 text-2xl">
                            Shoes
                        </span>
                        <div className="flex gap-3 ml-auto mr-16">
                            <input type="text" placeholder="Search Shoe" className="border-2 border-gray-500 rounded-2xl pl-3 py-1" />
                            <button type="button" className="flex gap-3 rounded-2xl bg-teal-400 py-1 px-2 text-white">
                                <TbShoe size={25} />
                                <span>Add Shoe</span>
                            </button>
                        </div>
                    </div>
                    <div className="ml-8 mr-16 mt-4 shadow-xl">
                        {label === 'overview' && <SliderProduct />}
                        {label === 'user' && <TableUser />}
                        {label === 'shoe' && <AddShoe />}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Admin;