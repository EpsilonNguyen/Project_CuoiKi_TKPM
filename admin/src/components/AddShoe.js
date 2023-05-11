import { useState } from 'react';
import { TbShoe } from 'react-icons/tb';
import axios from '../hooks/axios';

const AddShoe = () => {
    const [image, setImage] = useState(null);
    const [size, setSize] = useState(0);
    const [data, setData] = useState({
        name: '',
        description: '',
        brand: '',
        quantity: '',
        price: '',
        sizes: [],
    });
    const [brand, setBrand] = useState(['Nike', 'Adidas', 'Vans', 'Balenciaga', 'Converse', 'Puma']);

    const handleChange = (e) => {
        setData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };
    console.log(data);
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
        setSize(sizes);
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
    console.log(image);
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
        try {
            await axios.post('shoe/new', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
        } catch (err) {
            console.log(err.message);
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
                        value="32"
                        onClick={() => handleSizeClick(32)}
                        className={size === 32 ? "rounded-2xl py-2 px-3  w-[80px] text-center bg-teal-400 text-white font-bold"
                            : "rounded-2xl border-2 border-gray-400 py-2 px-3  w-[80px] text-center"
                        }
                    />
                    <input
                        type="button"
                        value="33"
                        onClick={() => handleSizeClick(33)}
                        className={size === 33 ? "rounded-2xl py-2 px-3  w-[80px] text-center bg-teal-400 text-white font-bold"
                            : "rounded-2xl border-2 border-gray-400 py-2 px-3  w-[80px] text-center"
                        }
                    />
                    <input
                        type="button"
                        value="34"
                        onClick={() => handleSizeClick(34)}
                        className={size === 34 ? "rounded-2xl py-2 px-3  w-[80px] text-center bg-teal-400 text-white font-bold"
                            : "rounded-2xl border-2 border-gray-400 py-2 px-3  w-[80px] text-center"
                        }
                    />
                    <input
                        type="button"
                        value="35"
                        onClick={() => handleSizeClick(35)}
                        className={size === 35 ? "rounded-2xl py-2 px-3  w-[80px] text-center bg-teal-400 text-white font-bold"
                            : "rounded-2xl border-2 border-gray-400 py-2 px-3  w-[80px] text-center"
                        }
                    />
                    <input
                        type="button"
                        value="36"
                        onClick={() => handleSizeClick(36)}
                        className={size === 36 ? "rounded-2xl py-2 px-3  w-[80px] text-center bg-teal-400 text-white font-bold"
                            : "rounded-2xl border-2 border-gray-400 py-2 px-3  w-[80px] text-center"
                        }
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
