import React, { useState, useEffect } from 'react'
import HeaderDesktop from './HeaderDesktop'
import HeaderMobile from './HeaderMobile'
import Logo from '../../assets/logo.svg'
import SearchIcon from '../../assets/search-icon.svg'
import CartIcon from '../../assets/cart-icon.svg'
import './HeaderSection.scss'

function HeaderSection() {
  const [isMobile, setIsMobile] = useState(false)

  const checkIsMobile = () => {
    const mobileBreakpoint = 768
    setIsMobile(window.innerWidth <= mobileBreakpoint)
  }

    useEffect(() => {
      checkIsMobile()
      window.addEventListener('resize', checkIsMobile)

      return () => {
        window.removeEventListener('resize', checkIsMobile)
      }
    }, [])

    return (
        <header className='header-section'>
          <a className='header-section__logo' href="/">
            <img src={Logo} alt="logo-svg" />
          </a>
          {isMobile ? <HeaderMobile /> : <HeaderDesktop />}
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