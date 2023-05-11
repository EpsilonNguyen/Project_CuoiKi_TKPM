import React, { useEffect, useState } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';
import DeleteButton from './DeleteButton';
import axios from '../hooks/axios';

const SliderProduct = () => {
    const [shoe, setShoe] = useState();
    const [hover, setHover] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [totalSlides, setTotalSlides] = useState();
    const [currentRow, setCurrentRow] = useState(0);
    const [nextRow, setNextRow] = useState(2);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get('/shoe/all/item');
            setShoe(data);
            setTotalSlides(Math.ceil(data.length / 10));
        };
        fetchData();
    }, []);
    const splitItems = (items, chunkSize) => {
        let result = [];
        for (let i = 0; i < items.length; i += chunkSize) {
            result.push(items.slice(i, i + chunkSize));
        }
        return result;
    };
    const itemsInRows = shoe ? splitItems(shoe, 5) : [];

    const handleNext = () => {
        if (currentSlide < totalSlides - 1) {
            setCurrentSlide(currentSlide + 1);
            setCurrentRow(currentRow + 2);
            setNextRow(nextRow + 2);
        }
    };
    const handleBack = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
            setCurrentRow(currentRow - 2);
            setNextRow(nextRow - 2);
        }
    };

    return (
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={43}
            totalSlides={totalSlides}
            currentSlide={currentSlide}
        >
            <Slider>
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                    <Slide index={slideIndex} key={slideIndex}>
                        <div className="flex flex-col gap-5">
                            {itemsInRows.slice(currentRow, nextRow).map((items, index) => (
                                <div key={index} className="flex justify-center gap-5 pt-5">
                                    {items &&
                                        items.map((item) => (
                                            <div className="border-2 w-56">
                                                {hover === true &&
                                                    <div className='absolute py-1 px-3 bg-white shadow-md text-xl hover:scale-110 hover:font-bold text-red-500'>
                                                        <button type="button">
                                                            Delete
                                                        </button>
                                                    </div>
                                                }
                                                <img onClick={() => { setHover(!hover) }}
                                                    className="h-48 w-56 border-b-2 hover:border-2 cursor-pointer"
                                                    src={item.images[0]}
                                                    alt="shoe"
                                                />
                                                <div className="font-bold text-center">{item.name}</div>
                                                <div className="flex gap-8 justify-center">
                                                    <span className="text-blue-400 font-bold">${item.price}</span>
                                                    <span className="text-blue-300">Quantity: {item.quantity}</span>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            ))}
                        </div>
                    </Slide>
                ))}
            </Slider>
            <ButtonBack onClick={handleBack} className="absolute top-[400px] left-48 opacity-75">
                <BiLeftArrow size={35} />
            </ButtonBack>
            <ButtonNext onClick={handleNext} className="absolute top-[400px] right-16 opacity-75">
                <BiRightArrow size={35} />
            </ButtonNext>
        </CarouselProvider>
    );
};

export default SliderProduct;
