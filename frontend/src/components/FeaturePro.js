import shoe from '../images/shoe.jpg';
import Search from './Search';

const FeaturePro = () => {
    return (
        <div className="mt-3">
            <div className="text-center text-3xl">
                <span>FEATURED PRODUCTS</span>
            </div>

            <div className="mt-8 pl-8 flex gap-10">
                <div className="flex border-2 border-gray-200">
                    <img className='h-32 w-32' src={shoe} alt="shoe" />
                    <div className="w-32 bg-gray-100 flex flex-col">
                        <span>Nike Air Max 270 React</span>
                        <span>$299,43</span>
                    </div>
                </div>

                <div className="flex border-2 border-gray-200">
                    <img className='h-32 w-32' src={shoe} alt="shoe" />
                    <div className="w-32 bg-gray-100 flex flex-col">
                        <span>Nike Air Max 270 React</span>
                        <span>$299,43</span>
                    </div>
                </div>

                <div className="flex border-2 border-gray-200">
                    <img className='h-32 w-32' src={shoe} alt="shoe" />
                    <div className="w-32 bg-gray-100 flex flex-col">
                        <span>Nike Air Max 270 React</span>
                        <span>$299,43</span>
                    </div>
                </div>

                <div className="flex border-2 border-gray-200">
                    <img className='h-32 w-32' src={shoe} alt="shoe" />
                    <div className="w-32 bg-gray-100 flex flex-col">
                        <span>Nike Air Max 270 React</span>
                        <span>$299,43</span>
                    </div>
                </div>

                <div className="flex border-2 border-gray-200">
                    <img className='h-32 w-32' src={shoe} alt="shoe" />
                    <div className="w-32 bg-gray-100 flex flex-col">
                        <span>Nike Air Max 270 React</span>
                        <span>$299,43</span>
                    </div>
                </div>
            </div>

            <Search />
        </div>
    )
}

export default FeaturePro;