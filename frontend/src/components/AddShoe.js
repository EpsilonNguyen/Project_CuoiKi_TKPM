import { TbShoe } from "react-icons/tb";

const AddShoe = () => {
    return (
        <div className="flex flex-col gap-3 bg-white px-72">
            <div className="flex flex-col mt-4 gap-2">
                <label>Name</label>
                <input type="text" placeholder="Air Force 1" className="rounded-2xl border-2 border-gray-400 py-2 px-3" />
            </div>
            <div className="flex justify-center">
                <input type="file"
                    accept="image/png, image/jpeg"
                    className="h-[120px] rounded-2xl border-2 border-gray-400 pt-10 pl-16" />
            </div>
            <div className="flex flex-col gap-2">
                <label>Description</label>
                <textarea placeholder="Description for shoe"
                    className="pl-3 py-2 rounded-2xl border-2 border-gray-400 h-[120px]" rows="4" cols="50">
                </textarea>
            </div>
            <div className="flex justify-center gap-8">
                <div className="flex flex-col">
                    <label>Brand</label>
                    <select name="cars" id="cars"
                        className="border-2 border-gray-400 rounded-2xl py-2 px-3 w-[150px]">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <label>Quantity</label>
                    <input type="text" placeholder="" className="rounded-2xl border-2 border-gray-400 py-2 px-3 w-[150px]" />
                </div>
                <div className="flex flex-col">
                    <label>Price</label>
                    <input type="text" placeholder="" className="rounded-2xl border-2 border-gray-400 py-2 px-3 w-[150px]" />
                </div>
            </div>
            <div className="flex flex-col">
                <label>Sizes</label>
                <div className="flex gap-5">
                    <input type="button" value="32" className="rounded-2xl border-2 border-gray-400 py-2 px-3  w-[80px] text-center" />
                    <input type="button" value="33" className="rounded-2xl border-2 border-gray-400 py-2 px-3  w-[80px] text-center" />
                    <input type="button" value="34" className="rounded-2xl border-2 border-gray-400 py-2 px-3  w-[80px] text-center" />
                    <input type="button" value="35" className="rounded-2xl border-2 border-gray-400 py-2 px-3  w-[80px] text-center" />
                    <input type="button" value="36" className="rounded-2xl border-2 border-gray-400 py-2 px-3  w-[80px] text-center" />
                </div>
            </div>
            <button type="button" className="flex justify-center gap-3 rounded-2xl bg-teal-400 py-1 px-2 text-white w-[180px] mx-auto mb-3">
                <TbShoe size={25} />
                <span>Add Shoe</span>
            </button>
        </div>
    )
}

export default AddShoe;