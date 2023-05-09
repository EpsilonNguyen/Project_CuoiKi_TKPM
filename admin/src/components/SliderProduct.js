import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';
import shoe from "../images/shoe.jpg";

const SliderProduct = () => {
    return (
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={43}
            totalSlides={3}
        >
            <Slider>
                <Slide index={0}>
                    <div className='flex flex-col gap-5'>
                        <div className='flex justify-center gap-5 pt-5'>
                            <div className='border-2 w-56'>
                                <img className="h-48 w-56 border-b-2 hover:scale-105 hover:border-2 cursor-pointer" src={shoe} alt="shoe" />
                                <div className='font-bold text-center'>
                                    Nike Air Max 270 React
                                </div>
                                <div className='flex gap-8 justify-center'>
                                    <span className='text-blue-400 font-bold'>$299.43</span>
                                    <span className='text-blue-300'>Quantity: 1000</span>
                                </div>
                            </div>
                            <div className='border-2 w-56'>
                                <img className="h-48 w-56 border-b-2" src={shoe} alt="shoe" />
                                <div className='font-bold text-center'>
                                    Nike Air Max 270 React
                                </div>
                                <div className='flex gap-8 justify-center'>
                                    <span className='text-blue-400 font-bold'>$299.43</span>
                                    <span className='text-blue-300'>Quantity: 1000</span>
                                </div>
                            </div>
                            <div className='border-2 w-56'>
                                <img className="h-48 w-56 border-b-2" src={shoe} alt="shoe" />
                                <div className='font-bold text-center'>
                                    Nike Air Max 270 React
                                </div>
                                <div className='flex gap-8 justify-center'>
                                    <span className='text-blue-400 font-bold'>$299.43</span>
                                    <span className='text-blue-300'>Quantity: 1000</span>
                                </div>
                            </div>
                            <div className='border-2 w-56'>
                                <img className="h-48 w-56 border-b-2" src={shoe} alt="shoe" />
                                <div className='font-bold text-center'>
                                    Nike Air Max 270 React
                                </div>
                                <div className='flex gap-8 justify-center'>
                                    <span className='text-blue-400 font-bold'>$299.43</span>
                                    <span className='text-blue-300'>Quantity: 1000</span>
                                </div>
                            </div>
                            <div className='border-2 w-56'>
                                <img className="h-48 w-56 border-b-2" src={shoe} alt="shoe" />
                                <div className='font-bold text-center'>
                                    Nike Air Max 270 React
                                </div>
                                <div className='flex gap-8 justify-center'>
                                    <span className='text-blue-400 font-bold'>$299.43</span>
                                    <span className='text-blue-300'>Quantity: 1000</span>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-center gap-5 pb-5'>
                            <div className='border-2 w-56'>
                                <img className="h-48 w-56 border-b-2" src={shoe} alt="shoe" />
                                <div className='font-bold text-center'>
                                    Nike Air Max 270 React
                                </div>
                                <div className='flex gap-8 justify-center'>
                                    <span className='text-blue-400 font-bold'>$299.43</span>
                                    <span className='text-blue-300'>Quantity: 1000</span>
                                </div>
                            </div>
                            <div className='border-2 w-56'>
                                <img className="h-48 w-56 border-b-2" src={shoe} alt="shoe" />
                                <div className='font-bold text-center'>
                                    Nike Air Max 270 React
                                </div>
                                <div className='flex gap-8 justify-center'>
                                    <span className='text-blue-400 font-bold'>$299.43</span>
                                    <span className='text-blue-300'>Quantity: 1000</span>
                                </div>
                            </div>
                            <div className='border-2 w-56'>
                                <img className="h-48 w-56 border-b-2" src={shoe} alt="shoe" />
                                <div className='font-bold text-center'>
                                    Nike Air Max 270 React
                                </div>
                                <div className='flex gap-8 justify-center'>
                                    <span className='text-blue-400 font-bold'>$299.43</span>
                                    <span className='text-blue-300'>Quantity: 1000</span>
                                </div>
                            </div>
                            <div className='border-2 w-56'>
                                <img className="h-48 w-56 border-b-2" src={shoe} alt="shoe" />
                                <div className='font-bold text-center'>
                                    Nike Air Max 270 React
                                </div>
                                <div className='flex gap-8 justify-center'>
                                    <span className='text-blue-400 font-bold'>$299.43</span>
                                    <span className='text-blue-300'>Quantity: 1000</span>
                                </div>
                            </div>
                            <div className='border-2 w-56'>
                                <img className="h-48 w-56 border-b-2" src={shoe} alt="shoe" />
                                <div className='font-bold text-center'>
                                    Nike Air Max 270 React
                                </div>
                                <div className='flex gap-8 justify-center'>
                                    <span className='text-blue-400 font-bold'>$299.43</span>
                                    <span className='text-blue-300'>Quantity: 1000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slide>

                <Slide index={1}>
                    <div className='flex flex-col gap-5'>
                        <div className='flex justify-center gap-5 pt-5'>
                            <div className='border-2 w-56'>
                                <img className="h-48 w-56 border-b-2" src={shoe} alt="shoe" />
                                <div className='font-bold text-center'>
                                    Nike Air Max 270 React
                                </div>
                                <div className='flex gap-8 justify-center'>
                                    <span className='text-blue-400 font-bold'>$299.43</span>
                                    <span className='text-blue-300'>Quantity: 1000</span>
                                </div>
                            </div>
                            <div className='border-2 w-56'>
                                <img className="h-48 w-56 border-b-2" src={shoe} alt="shoe" />
                                <div className='font-bold text-center'>
                                    Nike Air Max 270 React
                                </div>
                                <div className='flex gap-8 justify-center'>
                                    <span className='text-blue-400 font-bold'>$299.43</span>
                                    <span className='text-blue-300'>Quantity: 1000</span>
                                </div>
                            </div>
                            <div className='border-2 w-56'>
                                <img className="h-48 w-56 border-b-2" src={shoe} alt="shoe" />
                                <div className='font-bold text-center'>
                                    Nike Air Max 270 React
                                </div>
                                <div className='flex gap-8 justify-center'>
                                    <span className='text-blue-400 font-bold'>$299.43</span>
                                    <span className='text-blue-300'>Quantity: 1000</span>
                                </div>
                            </div>
                            <div className='border-2 w-56'>
                                <img className="h-48 w-56 border-b-2" src={shoe} alt="shoe" />
                                <div className='font-bold text-center'>
                                    Nike Air Max 270 React
                                </div>
                                <div className='flex gap-8 justify-center'>
                                    <span className='text-blue-400 font-bold'>$299.43</span>
                                    <span className='text-blue-300'>Quantity: 1000</span>
                                </div>
                            </div>
                            <div className='border-2 w-56'>
                                <img className="h-48 w-56 border-b-2" src={shoe} alt="shoe" />
                                <div className='font-bold text-center'>
                                    Nike Air Max 270 React
                                </div>
                                <div className='flex gap-8 justify-center'>
                                    <span className='text-blue-400 font-bold'>$299.43</span>
                                    <span className='text-blue-300'>Quantity: 1000</span>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-center gap-5 pb-5'>
                            <div className='border-2 w-56'>
                                <img className="h-48 w-56 border-b-2" src={shoe} alt="shoe" />
                                <div className='font-bold text-center'>
                                    Nike Air Max 270 React
                                </div>
                                <div className='flex gap-8 justify-center'>
                                    <span className='text-blue-400 font-bold'>$299.43</span>
                                    <span className='text-blue-300'>Quantity: 1000</span>
                                </div>
                            </div>
                            <div className='border-2 w-56'>
                                <img className="h-48 w-56 border-b-2" src={shoe} alt="shoe" />
                                <div className='font-bold text-center'>
                                    Nike Air Max 270 React
                                </div>
                                <div className='flex gap-8 justify-center'>
                                    <span className='text-blue-400 font-bold'>$299.43</span>
                                    <span className='text-blue-300'>Quantity: 1000</span>
                                </div>
                            </div>
                            <div className='border-2 w-56'>
                                <img className="h-48 w-56 border-b-2" src={shoe} alt="shoe" />
                                <div className='font-bold text-center'>
                                    Nike Air Max 270 React
                                </div>
                                <div className='flex gap-8 justify-center'>
                                    <span className='text-blue-400 font-bold'>$299.43</span>
                                    <span className='text-blue-300'>Quantity: 1000</span>
                                </div>
                            </div>
                            <div className='border-2 w-56'>
                                <img className="h-48 w-56 border-b-2" src={shoe} alt="shoe" />
                                <div className='font-bold text-center'>
                                    Nike Air Max 270 React
                                </div>
                                <div className='flex gap-8 justify-center'>
                                    <span className='text-blue-400 font-bold'>$299.43</span>
                                    <span className='text-blue-300'>Quantity: 1000</span>
                                </div>
                            </div>
                            <div className='border-2 w-56'>
                                <img className="h-48 w-56 border-b-2" src={shoe} alt="shoe" />
                                <div className='font-bold text-center'>
                                    Nike Air Max 270 React
                                </div>
                                <div className='flex gap-8 justify-center'>
                                    <span className='text-blue-400 font-bold'>$299.43</span>
                                    <span className='text-blue-300'>Quantity: 1000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slide>

                <Slide index={2}>
                    <div className='flex flex-col gap-5'>
                        <div className='flex justify-center gap-5 pt-5'>
                            <div className='border-2 w-56'>
                                <img className="h-48 w-56 border-b-2" src={shoe} alt="shoe" />
                                <div className='font-bold text-center'>
                                    Nike Air Max 270 React
                                </div>
                                <div className='flex gap-8 justify-center'>
                                    <span className='text-blue-400 font-bold'>$299.43</span>
                                    <span className='text-blue-300'>Quantity: 1000</span>
                                </div>
                            </div>
                            <div className='border-2 w-56'>
                                <img className="h-48 w-56 border-b-2" src={shoe} alt="shoe" />
                                <div className='font-bold text-center'>
                                    Nike Air Max 270 React
                                </div>
                                <div className='flex gap-8 justify-center'>
                                    <span className='text-blue-400 font-bold'>$299.43</span>
                                    <span className='text-blue-300'>Quantity: 1000</span>
                                </div>
                            </div>
                            <div className='border-2 w-56'>
                                <img className="h-48 w-56 border-b-2" src={shoe} alt="shoe" />
                                <div className='font-bold text-center'>
                                    Nike Air Max 270 React
                                </div>
                                <div className='flex gap-8 justify-center'>
                                    <span className='text-blue-400 font-bold'>$299.43</span>
                                    <span className='text-blue-300'>Quantity: 1000</span>
                                </div>
                            </div>
                            <div className='border-2 w-56'>
                                <img className="h-48 w-56 border-b-2" src={shoe} alt="shoe" />
                                <div className='font-bold text-center'>
                                    Nike Air Max 270 React
                                </div>
                                <div className='flex gap-8 justify-center'>
                                    <span className='text-blue-400 font-bold'>$299.43</span>
                                    <span className='text-blue-300'>Quantity: 1000</span>
                                </div>
                            </div>
                            <div className='border-2 w-56'>
                                <img className="h-48 w-56 border-b-2" src={shoe} alt="shoe" />
                                <div className='font-bold text-center'>
                                    Nike Air Max 270 React
                                </div>
                                <div className='flex gap-8 justify-center'>
                                    <span className='text-blue-400 font-bold'>$299.43</span>
                                    <span className='text-blue-300'>Quantity: 1000</span>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-center gap-5 pb-5'>
                            <div className='border-2 w-56'>
                                <img className="h-48 w-56 border-b-2" src={shoe} alt="shoe" />
                                <div className='font-bold text-center'>
                                    Nike Air Max 270 React
                                </div>
                                <div className='flex gap-8 justify-center'>
                                    <span className='text-blue-400 font-bold'>$299.43</span>
                                    <span className='text-blue-300'>Quantity: 1000</span>
                                </div>
                            </div>
                            <div className='border-2 w-56'>
                                <img className="h-48 w-56 border-b-2" src={shoe} alt="shoe" />
                                <div className='font-bold text-center'>
                                    Nike Air Max 270 React
                                </div>
                                <div className='flex gap-8 justify-center'>
                                    <span className='text-blue-400 font-bold'>$299.43</span>
                                    <span className='text-blue-300'>Quantity: 1000</span>
                                </div>
                            </div>
                            <div className='border-2 w-56'>
                                <img className="h-48 w-56 border-b-2" src={shoe} alt="shoe" />
                                <div className='font-bold text-center'>
                                    Nike Air Max 270 React
                                </div>
                                <div className='flex gap-8 justify-center'>
                                    <span className='text-blue-400 font-bold'>$299.43</span>
                                    <span className='text-blue-300'>Quantity: 1000</span>
                                </div>
                            </div>
                            <div className='border-2 w-56'>
                                <img className="h-48 w-56 border-b-2" src={shoe} alt="shoe" />
                                <div className='font-bold text-center'>
                                    Nike Air Max 270 React
                                </div>
                                <div className='flex gap-8 justify-center'>
                                    <span className='text-blue-400 font-bold'>$299.43</span>
                                    <span className='text-blue-300'>Quantity: 1000</span>
                                </div>
                            </div>
                            <div className='border-2 w-56'>
                                <img className="h-48 w-56 border-b-2" src={shoe} alt="shoe" />
                                <div className='font-bold text-center'>
                                    Nike Air Max 270 React
                                </div>
                                <div className='flex gap-8 justify-center'>
                                    <span className='text-blue-400 font-bold'>$299.43</span>
                                    <span className='text-blue-300'>Quantity: 1000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slide>
            </Slider>
            <ButtonBack className='absolute top-[400px] left-48 opacity-75'>
                <BiLeftArrow size={35} />
            </ButtonBack>
            <ButtonNext className='absolute top-[400px] right-16 opacity-75'>
                <BiRightArrow size={35} />
            </ButtonNext>
        </CarouselProvider>
    );
}

export default SliderProduct;