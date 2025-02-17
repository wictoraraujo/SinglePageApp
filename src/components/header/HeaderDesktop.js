import './HeaderDesktop.scss'

function HeaderDesktop() {
    return (
        <nav className='header-section__navbar-desktop'>
          <ul className='navbar-list__desktop'>
            <li className='navbar-list__desktop__item'>
              <a className='navbar-list__desktop__link' href="/">Loja</a>
            </li>
            <li className='navbar-list__desktop__item-'>
              <a className='navbar-list__desktop__link' href="/">Login</a>
            </li>
            <li className='navbar-list__desktop__item'>
              <a className='navbar-list__desktop__link' href="/">Sobre</a>
            </li>
            <li className='navbar-list__desktop__item'>
              <a className='navbar-list__desktop__link' href="/">Contato</a>
            </li>
          </ul>
        </nav>
    )
}

export default HeaderDesktop;