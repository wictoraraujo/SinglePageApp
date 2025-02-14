import Logo from '../../assets/logo.svg'
import SearchIcon from '../../assets/search-icon.svg'
import CartIcon from '../../assets/cart-icon.svg'

function Header() {
    return (
        <header className='landing-page__header'>
        <div className='landing-page__logo'>
          <img src={Logo} alt="logo-svg" />
        </div>
        <nav className='landing-page__navbar'>
          <ul>
            <li>Loja</li>
            <li>Login</li>
            <li>Sobre</li>
            <li>Contato</li>
          </ul>
        </nav>
        <div className='landing-page__searchbar'>
          <input type="search" placeholder='Digite aqui sua busca' />
          <img src={SearchIcon} alt="search-icon-svg" />
        </div>
        <div className='landing-page__cart'>
          <img src={CartIcon} alt="cart-icon-svg" />
        </div>
      </header>
    )
}

export default Header; 