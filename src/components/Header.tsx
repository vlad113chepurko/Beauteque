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
    const [isInputVisible, setIsInputVisible] = useState(false);
    const [isMenuVisible, setIsMenuVisible] = useState(false);

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
                    <button
                        onClick={() => {
                            setIsMenuVisible(!isMenuVisible);
                            if (isInputVisible) setIsInputVisible(false)
                        }}
                        className='under__header__button-menu'>
                        <img src={Menu} alt="menu" />
                    </button>

                    {isMenuVisible && (<MenuList />)}

                    <section>
                        <a href="#">Brand</a>
                        <a href="#">Stock</a>
                        <a href="#">News</a>
                    </section>

                    <section className='under__header-flex-end'>
                        <a href="#">Login/Sign Up</a>

                        {isInputVisible && (<SearchInput />)}

                        <button className='under__header__button-search'
                            onClick={() => {
                                setIsInputVisible(!isInputVisible);
                                if (isMenuVisible) setIsMenuVisible(false); 
                            }}>
                            <img src={Search} alt="" />
                        </button>
                        <button className='under__header__button-basket'>
                            <img src={Basket} alt="" />
                            <span className='basket-count'>{itemCount}</span>
                        </button>
                    </section>
                </header >
            ) : (
                <header className='under__header'>

                    <section className='under__header-container'>
                        <button
                            className='under__header__button-menu'
                            onClick={() => {
                                setIsMenuVisible(!isMenuVisible);
                                if (isInputVisible) setIsInputVisible(false)}}>
                            <img src={Menu} alt="menu" />
                        </button>

                        {isMenuVisible && (<MenuList />)}

                        <a href="#">Login/Sign Up</a>
                        <span className='vline'></span>

                        {isInputVisible && (<SearchInput />)}

                        <button className='under__header__button-search'
                            onClick={() => {
                                setIsInputVisible(!isInputVisible);
                                if (isMenuVisible) setIsMenuVisible(false); 
                            }}>
                            <img src={Search} alt="" />
                        </button>
                        <span className='vline'></span>
                        <button className='under__header__button-basket'>
                            <img src={Basket} alt="" />
                            <span className='basket-count'>{itemCount}</span>
                        </button>
                    </section>
                </header>
            )
            }
        </>
    )

    function MenuList() {
        return (
            isMenuVisible && (
                <motion.section
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: isMenuVisible ? 1 : 0, x: isMenuVisible ? 0 : -100 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className='under__header__button-menu-open'>
                    <nav>
                        <li className='list-container'><a href="#">Facial cosmetics</a></li>
                        <li className='list-container'><a href="#">Eye cosmetics</a></li>
                        <li className='list-container'><a href="#">Lip cosmetics</a></li>
                        <li className='list-container'><a href="#">Skin care product</a></li>
                        <li className='list-container'><a href="#">Perfumery</a></li>
                    </nav>
                </motion.section>
            )
        );
    }

    function SearchInput() {
        return (
            <motion.input
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: isInputVisible ? 1 : 0, x: isInputVisible ? 0 : 100 }}
                type="text"
                placeholder='What do you search?'
            />
        );
    }

}