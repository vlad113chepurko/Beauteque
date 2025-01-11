import arrowl from '../assets/ArrowL.svg';
import arrowr from '../assets/ArrowR.svg';
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';

import girl_face from '../assets/girl-face.jpg'
import girl_lips from '../assets/girl-lips.jpg'
import girl_parfume from '../assets/girl-parfume.jpg'
import girl_acsesuars from '../assets/acsesuars.jpg'


import { motion } from "motion/react"
import { useState, useEffect } from 'react';



export default function Main() {
    const [currentBanner, setCurrentBanner] = useState(banner1);
    const [banners] = useState([banner1, banner2]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [title, setTitle] = useState('Hit of the month!');

    useEffect(() => {
        const interval = setInterval(() => {
            const nextSlide = currentSlide === 0 ? 1 : 0;
            setCurrentSlide(nextSlide);
            switch (nextSlide) {
                case 0:
                    setTitle('Hit of the month!');
                    setCurrentBanner(banner1);
                    break;
                case 1:
                    setTitle('New Collection!');
                    setCurrentBanner(banner2);
                    break;
                default:
                    break
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [currentSlide]);

    function onClickArrowLeft() {
        const prevSlide = currentSlide === 1 ? 0 : 1;
        setCurrentSlide(prevSlide);
        switch (prevSlide) {
            case 0:
                setTitle('Hit of the month!');
                setCurrentBanner(banner1);
                break;
            case 1:
                setTitle('New Collection!');
                setCurrentBanner(banner2);
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
                setCurrentBanner(banner1);
                break;
            case 1:
                setTitle('New Collection!');
                setCurrentBanner(banner2);
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
                                                initial={{ y: -1000 }}
                                                animate={{ y: 0 }}
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

                <div className='container-categories'>

                    <section className='container-vertical-text'>
                        <h1 className='vertical-text'>COSMETICS AND PARFUMES</h1>
                    </section>

                    <section className='container-categories__products '>
                        <motion.i className='products-container'
                            initial={{ x: -200, }}
                            whileInView={{ x: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}>
                            <span className='inside-container' >
                                <h1 className='inside-container__title '>Parfumes</h1>
                            </span>
                            <img src={girl_parfume}
                                alt="girl_parfume" />
                        </motion.i>
                        <motion.i
                            initial={{ y: 200 }}
                            whileInView={{ y: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className='products-container'>
                            <span className='inside-container'>
                                <h1 className='inside-container__title '>Face</h1>
                            </span>
                            <img src={girl_face}
                                alt="girl_face" />
                        </motion.i>
                        <motion.i className='products-container'
                            initial={{ x: 200, }}
                            whileInView={{ x: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}>
                            <span className='inside-container'>
                                <h1 className='inside-container__title '>Lips</h1>
                            </span>
                            <img src={girl_lips}
                                alt="girl_lips" />
                        </motion.i>
                        <motion.i
                            initial={{ y: 200 }}
                            whileInView={{ y: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className='products-container'>
                            <span className='inside-container'>
                                <h1 className='inside-container__title '>Acsesuars</h1>
                            </span>
                            <img src={girl_acsesuars}
                                alt="girl_acsesuars" />
                        </motion.i>
                    </section>
                </div>
            </main >
        </>
    )
}