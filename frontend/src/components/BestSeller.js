import shoe from '../images/shoe.jpg';

const BestSeller = () => {
    return (
        <div className="">
            <div className="text-center text-3xl mb-5">
                <span>BEST SELLER</span>
            </div>

            <div className="flex gap-12 mt-5 pl-12">
                <div className="w-48 border-2 border-gray-200">
                    <img className="h-48" src={shoe} alt="shoe" />
                    <div className="text-center bg-gray-100">
                        <span>Nike Air Max 270 React</span>
                        <span> $299,43</span>
                    </div>
                </div>

                <div className="w-48 border-2 border-gray-200">
                    <img className="h-48" src={shoe} alt="shoe" />
                    <div className="text-center bg-gray-100">
                        <span>Nike Air Max 270 React</span>
                        <span> $299,43</span>
                    </div>
                </div>

                <div className="w-48 border-2 border-gray-200">
                    <img className="h-48" src={shoe} alt="shoe" />
                    <div className="text-center bg-gray-100">
                        <span>Nike Air Max 270 React</span>
                        <span> $299,43</span>
                    </div>
                </div>

                <div className="w-48 border-2 border-gray-200">
                    <img className="h-48" src={shoe} alt="shoe" />
                    <div className="text-center bg-gray-100">
                        <span>Nike Air Max 270 React</span>
                        <span> $299,43</span>
                    </div>
                </div>

                <div className="w-48 border-2 border-gray-200">
                    <img className="h-48" src={shoe} alt="shoe" />
                    <div className="text-center bg-gray-100">
                        <span>Nike Air Max 270 React</span>
                        <span> $299,43</span>
                    </div>
                </div>

                <div className="w-48 border-2 border-gray-200">
                    <img className="h-48" src={shoe} alt="shoe" />
                    <div className="text-center bg-gray-100">
                        <span>Nike Air Max 270 React</span>
                        <span> $299,43</span>
                    </div>
                </div>
            </div>

            <div className='mt-3 font-bold text-center cursor-pointer hover:underline hover:text-blue-500'><span>LOAD MORE</span></div>

        </div>
    )
}

export default BestSeller;