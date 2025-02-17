import './HeaderMobile.scss'

function HeaderMobile() {
    return (
        <nav className='header-section__navbar'>
            <ul className='navbar-list'>
                <li className='navbar-list__item'>
                <a className='navbar-list__link' href="/">Loja</a>
                </li>
                <li className='navbar-list__item'>
                <a className='navbar-list__link' href="/">Login</a>
                </li>
                <li className='navbar-list__item'>
                <a className='navbar-list__link' href="/">Sobre</a>
                </li>
                <li className='navbar-list__item'>
                <a className='navbar-list__link' href="/">Contato</a>
                </li>
            </ul>
        </nav>
    )
}

export default HeaderMobile;