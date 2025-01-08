import Logo from '../assets/Logo.svg'
import Menu from '../assets/Menu.svg'

export default function Header() {
    return (
        <>
            <header className='header'>
                <section className='left-block__header'>
                    <a href="#">About us</a>
                    <a href="#">Payment</a>
                    <a href="#">FAQ</a>
                    <a href="#">Blog</a>
                    <a href="#">Rewiews</a>
                    <a href="#">Contacts</a>
                </section>

                <section className='center-block'>
                    <a href="#">
                        <img className='header__logo'
                            src={Logo} alt="Beauteque" />
                    </a>
                </section>

                <section className='right-block'>
                    <p>Work Graph: Mn-St from 8 to 20</p>
                    <a href="#">+380-11-111-11-11</a>
                </section>

            </header>

            <header className='under__header'>
                <section className='left-block__under__header'>
                    <button className='under__header__button-menu'>
                        <img src={Menu} alt="menu" />
                    </button>
                    <a href="#">Brand</a>
                    <a href="#">Stock</a>
                    <a href="#">News</a>
                </section>

                <section className='center-block'></section>

                <section className='right-block__under__header'>
                    <a href="#">Login</a>
                    <a href="#">Register</a>
                </section>
            </header>
        </>
    )
}