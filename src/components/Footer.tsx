import Logo from '../assets/Logo.svg'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'

function Footer() {
    return (
        <footer className="footer">
            <i className="footer-logo ">
                <i className='footer-soc'>
                    <img src={github} alt="" />
                    <a href="https://github.com/vlad113chepurko">My GitHub</a>
                </i>
                <i className='footer-soc'>
                    <img src={linkedin} alt="" />
                    <a href="https://www.linkedin.com/in/vlad-chepurko-0953b32b0">My LinkedIn</a>
                </i>

                <img className="footer-main-logo" src={Logo} alt="" />
            </i>
        </footer>
    )
}

export default Footer