import React, {useState} from 'react'
import getClass from 'getclass.react'
import Image from 'next/image'
import {NAVBAR_SECTIONS, NAVBAR_RIGHT_SECTIONS} from '../../constants/appConstants'

const NavbarLink = ({onClick, text, navbarToggle, hideOnDesktop, domain, actions}) => {
  const handleClick = () => onClick(actions, domain)
  return (
    <a
      className={getClass('navbar-item is-expanded ', {
        'is-hidden-desktop': hideOnDesktop,
        'button is-dark has-text-white': !navbarToggle,
        'navbar-item has-text-dark': navbarToggle,
      })}
      onClick={handleClick}
    >
      <strong>{text}</strong>
    </a>
  )
}

const Navbar = (props) => {
  const [navbarToggle, setNavbarToggle] = useState(false)

  const handleClickBurgerMenu = () => {
    setNavbarToggle(!navbarToggle)
  }
  return (
    <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item">
          <Image alt="logo" src="/static/logo.png" width={500} height={500} />
          <span className="user-title ml-3">{`Bienvenido ${props.session.username}!`}</span>
        </a>

        <a
          role="button"
          className={getClass('navbar-burger is-white', {
            'is-active': navbarToggle,
          })}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={handleClickBurgerMenu}
        >
          <span className="is-white" aria-hidden="true"></span>
          <span className="is-white" aria-hidden="true"></span>
          <span className="is-white" aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        className={getClass('navbar-menu', {'is-active': navbarToggle})}
      >
        <div className="navbar-end">
          {NAVBAR_RIGHT_SECTIONS.map(({text, onClick, ...restProps}) => (
            <NavbarLink
              text={text}
              onClick={onClick}
              navbarToggle={navbarToggle}
              {...restProps}
              {...props}
            />
          ))}
          {NAVBAR_SECTIONS.map(({text, onClick, ...restProps}) => (
            <NavbarLink
              text={text}
              hideOnDesktop
              onClick={onClick}
              navbarToggle={navbarToggle}
              {...restProps}
              {...props}
            />
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
