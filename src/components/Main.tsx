import arrowl from '../assets/ArrowL.svg';
import arrowr from '../assets/ArrowR.svg';
import banner from '../assets/banner.jpg';
import banner1 from '../assets/banner1.jpg';

import { motion } from "motion/react"
import { useState } from 'react';


export default function Main() {

    const [currentBanner, setCurrentBanner] = useState(banner);
    const [banners] = useState([banner, banner1]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [title, setTitle] = useState('Hit of the month!');

    function onClickArrowLeft() {
        const prevSlide = currentSlide === 1 ? 0 : 1;
        setCurrentSlide(prevSlide);
        switch (prevSlide) {
            case 0:
                setTitle('Hit of the month!');
                setCurrentBanner(banner);
                break;
            case 1:
                setTitle('New Collection!');
                setCurrentBanner(banner1);
                break;
            default:
                break;
        }
    }

    function onClickArrowRight() {
        const nextSlide = currentSlide === 0 ? 1 : 0;
        setCurrentSlide(nextSlide);
        switch (nextSlide) {
            case 0:
                setTitle('Hit of the month!');
                setCurrentBanner(banner);
                break;
            case 1:
                setTitle('New Collection!');
                setCurrentBanner(banner1);
                break;
            default:
                break
        }
    }


    return (
        <>
            <main className="main">
                <section className="main__banner">
                    <motion.img
                        onClick={onClickArrowLeft}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className='arrow-left margin-left' src={arrowl} alt="" />
                    <i>
                        {banners.map((_, index) => {
                            {
                                if (index === currentSlide) {
                                    return (
                                        <>
                                            <motion.img
                                                initial={{ opacity: 0, scale: 0.5 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 1.1, ease: "easeInOut" }}
                                                key={index}
                                                className='main__banner__img'
                                                src={currentBanner}
                                                alt=""
                                            />

                                            <motion.section
                                                initial={{  y: -1000 }}
                                                animate={{  y: 0 }}
                                                transition={{ duration: 1.1, ease: "easeInOut" }}
                                                className='main-banner__container'>
                                                <h1 className='main-banner__title'>{title}</h1>
                                                <span className='gline'></span>
                                                <button className='main-banner__button'>Shop</button>
                                            </motion.section >
                                        </>
                                    )
                                }
                            }
                        })}
                    </i>
                    <motion.img
                        onClick={onClickArrowRight}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="arrow-right margin-right" src={arrowr} alt="" />
                </section>
                <section className='main__circles'>
                    {[0, 1].map((index) => {
                        return ((
                            <div
                                key={index}
                                className='main-circle'
                                style={index === currentSlide ? { backgroundColor: '#8C4205' } : { backgroundColor: '#E97313' }}
                            >
                            </div>
                        ))
                    })}
                </section>
            </main >
        </>
    )
}