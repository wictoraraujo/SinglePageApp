import Logo from '../../assets/logo.svg'
import SearchIcon from '../../assets/search-icon.svg'
import CartIcon from '../../assets/cart-icon.svg'
import './HeaderSection.scss'

function HeaderSection() {
    return (
        <header className='header-section'>
          <a className='header-section__logo' href="/">
            <img src={Logo} alt="logo-svg" />
          </a>
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
          <div className='header-section__product'>
            <div className='product__search'>
              <input className='search__bar' type="search" placeholder='Digite aqui sua busca' />
              <img className='search__icon' src={SearchIcon} alt="search-icon-svg" />
            </div>
            <div className='product__cart'>
              <a className='cart__link' href="/">
                <img className='cart__icon' src={CartIcon} alt="cart-icon-svg" />
              </a>
            </div>
          </div>
      </header>
    )
}

export default HeaderSection; 