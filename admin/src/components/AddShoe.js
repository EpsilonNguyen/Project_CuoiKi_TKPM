import { useState } from 'react';
import { TbShoe } from 'react-icons/tb';
import { toast } from 'react-toastify';
import axios from '../hooks/axios';

const AddShoe = () => {
    const [image, setImage] = useState(null);
    // const [size, setSize] = useState(0);
    const [data, setData] = useState({
        name: '',
        description: '',
        brand: 'Nike',
        quantity: '',
        price: '',
        sizes: [],
    });
    const [brand, setBrand] = useState(['Nike', 'Adidas', 'Vans', 'Balenciaga', 'Converse', 'Puma']);

    const handleChange = (e) => {
        setData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };
    const handleUpload = (event) => {
        const files = event.target.files; // Lấy danh sách tệp tin đã chọn
        const arr = [];
        for (let i = 0; i < files.length; i++) {
            arr.push(files[i]);
        }
        setImage(arr);
    };
    const [selectedSizes, setSelectedSizes] = useState([]);
    const handleSizeClick = (sizes) => {
        // setSize(sizes);
        if (selectedSizes.includes(sizes)) {
            const newSelectedSizes = selectedSizes.filter((s) => s !== sizes);
            setSelectedSizes(newSelectedSizes);
            setData({ ...data, size: newSelectedSizes });
        } else if (selectedSizes.length < 3) {
            // nếu size chưa được chọn và số lượng size đã chọn < 3, ta sẽ thêm size vào mảng selectedSizes và cập nhật lại data.size
            const newSelectedSizes = [...selectedSizes, sizes];
            setSelectedSizes(newSelectedSizes);
            setData({ ...data, sizes: newSelectedSizes });
        }
    };
    const handleSubmit = async () => {
        const formData = new FormData();
        image.forEach((i) => {
            formData.append('images', i);
        });
        formData.append('name', data.name);
        formData.append('description', data.description);
        formData.append('brand', data.brand);
        formData.append('quantity', data.quantity);
        formData.append('price', data.price);
        data.sizes.forEach((i) => {
            formData.append('sizes', i);
        });
        if (data.price > 0 || data.quantity > 0) {
            try {
                await axios.post('shoe/new', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
            } catch (err) {
                console.log(err.message);
            }
        } else {
            toast.error('Vui lòng không nhập giá trị âm');
        }
    };
    const inputClassName = (size) => {
        let className = 'rounded-2xl border-2 border-gray-400 py-2 px-3  w-[80px] text-center';
        if (selectedSizes.includes(size)) {
            className = ' rounded-2xl py-2 px-3  w-[80px] text-center bg-teal-400 text-white font-bold';
        }
        return className;
    };
    const handleCheck = () => {
        if (data.price < 0 || data.quantity < 0) {
            toast.error('Vui lòng không nhập giá trị âm');
        }
    };
    return (
        <div className="flex flex-col gap-3 bg-white px-72">
            <div className="flex flex-col mt-4 gap-2">
                <label>Name</label>
                <input
                    type="text"
                    id="name"
                    placeholder="Air Force 1"
                    className="rounded-2xl border-2 border-gray-400 py-2 px-3"
                    onChange={(e) => handleChange(e)}
                    c
                />
            </div>
            <div className="flex justify-center">
                <input
                    type="file"
                    id="images"
                    multiple
                    accept="image/png, image/jpeg"
                    onChange={handleUpload}
                    className="h-[120px] rounded-2xl border-2 border-gray-400 pt-10 pl-16"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label>Description</label>
                <textarea
                    placeholder="Description for shoe"
                    className="pl-3 py-2 rounded-2xl border-2 border-gray-400 h-[120px]"
                    rows="4"
                    cols="50"
                    id="description"
                    onChange={(e) => handleChange(e)}
                ></textarea>
            </div>
            <div className="flex justify-center gap-8">
                <div className="flex flex-col">
                    <label>Brand</label>
                    <select
                        onChange={(e) => handleChange(e)}
                        id="brand"
                        value={data.brand}
                        className="border-2 border-gray-400 rounded-2xl py-2 px-3 w-[150px]"
                    >
                        {brand.map((item) => (
                            <option id="brand" value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col">
                    <label>Quantity</label>
                    <input
                        type="text"
                        placeholder=""
                        id="quantity"
                        onBlur={handleCheck}
                        onChange={(e) => handleChange(e)}
                        className="rounded-2xl border-2 border-gray-400 py-2 px-3 w-[150px]"
                    />
                </div>
                <div className="flex flex-col">
                    <label>Price</label>
                    <input
                        type="text"
                        placeholder=""
                        id="price"
                        onBlur={handleCheck}
                        onChange={(e) => handleChange(e)}
                        className="rounded-2xl border-2 border-gray-400 py-2 px-3 w-[150px]"
                    />
                </div>
            </div>
            <div className="flex flex-col">
                <label>Sizes</label>
                <div className="flex gap-5">
                    <input
                        type="button"
                        value="35"
                        onClick={() => handleSizeClick(35)}
                        className={inputClassName(35)}
                    />
                    <input
                        type="button"
                        value="36"
                        onClick={() => handleSizeClick(36)}
                        className={inputClassName(36)}
                    />
                    <input
                        type="button"
                        value="37"
                        onClick={() => handleSizeClick(37)}
                        className={inputClassName(37)}
                    />
                    <input
                        type="button"
                        value="38"
                        onClick={() => handleSizeClick(38)}
                        className={inputClassName(38)}
                    />
                    <input
                        type="button"
                        value="39"
                        onClick={() => handleSizeClick(39)}
                        className={inputClassName(39)}
                    />
                    <input
                        type="button"
                        value="40"
                        onClick={() => handleSizeClick(40)}
                        className={inputClassName(40)}
                    />
                    <input
                        type="button"
                        value="41"
                        onClick={() => handleSizeClick(41)}
                        className={inputClassName(41)}
                    />
                    <input
                        type="button"
                        value="42"
                        onClick={() => handleSizeClick(42)}
                        className={inputClassName(42)}
                    />
                    <input
                        type="button"
                        value="43"
                        onClick={() => handleSizeClick(43)}
                        className={inputClassName(43)}
                    />
                    <input
                        type="button"
                        value="44"
                        onClick={() => handleSizeClick(44)}
                        className={inputClassName(44)}
                    />
                    <input
                        type="button"
                        value="45"
                        onClick={() => handleSizeClick(45)}
                        className={inputClassName(45)}
                    />
                </div>
            </div>
            <button
                onClick={handleSubmit}
                type="button"
                className="flex justify-center gap-3 rounded-2xl bg-teal-400 py-1 px-2 text-white w-[180px] mx-auto mb-3 hover:scale-110"
            >
                <TbShoe size={25} />
                <span>Add Shoe</span>
            </button>
        </div>
    );
};

export default AddShoe;
