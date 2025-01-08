import Logo from '../assets/Logo.svg'
import Menu from '../assets/Menu.svg'
import Basket from '../assets/Basket.svg'
import Search from '../assets/Search.svg'

import { motion } from "motion/react"

import { useState, useEffect } from 'react'

interface HeaderProps {
    itemCount: number;
}

export default function Header({ itemCount }: HeaderProps) {
    const [width, setWidth] = useState(window.innerWidth);
    const [isInputVisible, setIsInputVisible] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    return (
        <>
            {width > 500 ? (
                <header className='header'>

                    <section>
                        <a href="#">About us</a>
                        <a href="#">Payment</a>
                        <a href="#">FAQ</a>
                        <a href="#">Blog</a>
                        <a href="#">Rewiews</a>
                        <a href="#">Contacts</a>
                    </section>

                    <section>
                        <a href="#">
                            <img className='header__logo'
                                src={Logo} alt="Beauteque" />
                        </a>
                    </section>

                    <section>
                        <a href="#">+380-11-111-11-11</a>
                    </section>

                </header>
            ) : (
                <header className='header'>
                    <a href="#">+380-11-111-11-11</a>
                    <p>Graph of work: Mn-Sat from 8 to 20</p>
                    <a href="#">
                        <img className='header__logo'
                            src={Logo} alt="Beauteque" />
                    </a>
                </header>
            )}

            {width > 500 ? (
                <header className='under__header'>
                    <button className='under__header__button-menu'>
                        <img src={Menu} alt="menu" />
                    </button>

                    <section>
                        <a href="#">Brand</a>
                        <a href="#">Stock</a>
                        <a href="#">News</a>
                    </section>

                    <section className='under__header-flex-end'>
                        <a href="#">Login/Sign Up</a>
                        <motion.input
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            type="text"
                            hidden={isInputVisible}
                            placeholder='What do you search?' />
                        <button className='under__header__button-search'
                            onClick={() => setIsInputVisible(!isInputVisible)}>
                            <img src={Search} alt="" />
                        </button>
                        <button className='under__header__button-basket'>
                            <img src={Basket} alt="" />
                            <span className='basket-count'>{itemCount}</span>
                        </button>
                    </section>
                </header>
            ) : (
                <header className='under__header'>

                    <section className='under__header-container'>
                        <button className='under__header__button-menu'>
                            <img src={Menu} alt="menu" />
                        </button>
                        <a href="#">Login/Sign Up</a>
                        <span className='vline'></span>

                        <motion.input
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            type="text"
                            hidden={isInputVisible}
                            placeholder='What do you search?' />

                        <button className='under__header__button-search'
                            onClick={() => setIsInputVisible(!isInputVisible)}>
                            <img src={Search} alt="" />
                        </button>
                        <span className='vline'></span>
                        <button className='under__header__button-basket'>
                            <img src={Basket} alt="" />
                            <span className='basket-count'>{itemCount}</span>
                        </button>
                    </section>
                </header>
            )}
        </>
    )
}