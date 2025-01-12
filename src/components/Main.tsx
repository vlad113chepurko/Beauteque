import arrowl from '../assets/ArrowL.svg';
import arrowr from '../assets/ArrowR.svg';
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';

import balsam from '../assets/balsam.png'
import gift from '../assets/gift.png'
import parfume from '../assets/parfume.png'
import sivorotka from '../assets/sivorotka.png'
import tush from '../assets/tush.png'

import girl_face from '../assets/girl-face.jpg'
import girl_lips from '../assets/girl-lips.jpg'
import girl_parfume from '../assets/girl-parfume.jpg'
import girl_acsesuars from '../assets/acsesuars.jpg'

import { nanoid } from 'nanoid';
import { motion } from "motion/react"
import { useState, useEffect } from 'react';



export default function Main({ itemCount, setItemCount }: any) {
    const [currentBanner, setCurrentBanner] = useState(banner1);
    const [banners] = useState([banner1, banner2]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [itemAddedContainer, setItemAddedContainer] = useState(false);
    const [items] = useState([
        { name: 'Balsam Lip Glow', src: balsam, price: `3$`, id: nanoid() },
        { name: 'Gift Set Victoria Secret', src: gift, price: `20$`, id: nanoid() },
        { name: 'Parfume Sur La Lande', src: parfume, price: `10$`, id: nanoid() },
        { name: 'Hair oil MinoX', src: sivorotka, price: `20$`, id: nanoid() },
        { name: 'Mascara Victoria Secret', src: tush, price: `5$`, id: nanoid() }
    ]);
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

    function handleItemAdd() {
        setItemCount(itemCount + 1)
        setItemAddedContainer(true)
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

                    <h1 className='vertical-text'>COSMETICS AND PARFUMES</h1>

                    <section className='container-categories__products '>
                        <motion.i className='products-container'
                            initial={{ x: -200, }}
                            whileInView={{ x: 0 }}
                            transition={{ duration: 1, ease: "easeInOut" }}>
                            <span className='inside-container' >
                                <h1 className='inside-container__title '>Parfumes</h1>
                            </span>
                            <img src={girl_parfume}
                                alt="girl_parfume" />
                        </motion.i>
                        <motion.i
                            initial={{ y: 200 }}
                            whileInView={{ y: 0 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
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
                            transition={{ duration: 1, ease: "easeInOut" }}>
                            <span className='inside-container'>
                                <h1 className='inside-container__title '>Lips</h1>
                            </span>
                            <img src={girl_lips}
                                alt="girl_lips" />
                        </motion.i>
                        <motion.i
                            initial={{ x: -200 }}
                            whileInView={{ x: 0 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            className='products-container'>
                            <span className='inside-container'>
                                <h1 className='inside-container__title '>Acsesuars</h1>
                            </span>
                            <img src={girl_acsesuars}
                                alt="girl_acsesuars" />
                        </motion.i>
                        <motion.i
                            initial={{ y: 200 }}
                            whileInView={{ y: 0 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            className='products-container'>
                            <span className='inside-container'>
                                <h1 className='inside-container__title '>Acsesuars</h1>
                            </span>
                            <img src={girl_acsesuars}
                                alt="girl_acsesuars" />
                        </motion.i>
                        <motion.i
                            initial={{ x: 200 }}
                            whileInView={{ x: 0 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            className='products-container'>
                            <span className='inside-container'>
                                <h1 className='inside-container__title '>Acsesuars</h1>
                            </span>
                            <img src={girl_acsesuars}
                                alt="girl_acsesuars" />
                        </motion.i>
                    </section>
                </div>

                <div className='items-container'>
                    <h1 className='items-container__title'>New Items</h1>
                    <span className='items-container__line'></span>
                    <section className='items-container__products'>
                        <section className='items-wrapper'>
                            {items.map((item) =>
                                <i key={item.id} className='items-container__product__container'>
                                    <img className='item' src={item.src} alt={`Item: ${item}`} />
                                    <h1 className='margin-bottom '>{`${item.name || `Unknown`} `}</h1>
                                    <h2 className='margin-bottom '>{`${item.price || `ERROR`} `}</h2>
                                    <button
                                        key={item.id}
                                        className='items-container__button'
                                        onClick={handleItemAdd}
                                    >Add To Basket</button>
                                </i>
                            )}
                        </section>
                    </section>
                    {itemAddedContainer ? (
                        <motion.div
                            initial={{ x: 1000 }}
                            animate={{ x: 0 }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                            className='item-added'>{`Item was added in basket!`}
                            <p
                                onClick={() => { setItemAddedContainer(false) }}
                                className='item-added__close '>X</p>
                        </motion.div>
                    ) : null}
                </div>
            </main >
        </>
    )
}