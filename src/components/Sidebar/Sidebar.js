import React from 'react'
import InputNewForm from '../inputNewForm/inputNewForm'

import odinLogo from '../../assets/img/odin-logo.svg'
import reactLogo from '../../assets/img/react-logo.svg'
import bootstrapLogo from '../../assets/img/bootstrap-logo.svg'
import sassLogo from '../../assets/img/sass-logo.svg'

const Sidebar = () => {
  const iconStyle = {
    width: '36px',
    height: '36px',
    marginRight: '12px',
    padding: '3px',
  }

  return (
    <nav className="navbar bg-light m-0 p-0 g-0 vh-100" id="sidebar">
      <div className=" w-100 min-vh-100 m-0 g-0 p-0 shadow">
        <p className="fs-2 fw-bold text-dark pl-0">My Library Project</p>

        <InputNewForm />

        <p></p>

        <ul className="navbar-nav d-flex flex-column m-0 p-2 w-100">
          <li className="nav-item">
            <a href="mmh" className="nav-link text-dark ml-0">
              <img src={odinLogo} alt="logo" style={iconStyle} />
              Built for Odin Project
            </a>
          </li>

          <li className="nav-item">
            <a href="mmh" className="nav-link text-dark">
              <img src={reactLogo} alt="logo" style={iconStyle} />
              React JS
            </a>
          </li>
          <li className="nav-item">
            <a
              href="jijij"
              className="nav-link text-dark pl-4 dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                style={iconStyle}
                src="https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png"
                alt="firebase"
              />
              Firebase
            </a>

            <ul className="dropdown-menu w-100" aria-labelledby="navbarDropdown">
              <li>
                <a href="rte" className="dropdown-item text-dark pl-4 p-2">
                  Sub1
                </a>
              </li>
              <li>
                <a href="rte" className="dropdown-item text-dark pl-4 p-2">
                  Sub2
                </a>
              </li>
              <li>
                <a href="rte" className="dropdown-item text-dark pl-4 p-2">
                  Sub3
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item w-100">
            <a href="mmh" className="nav-link text-dark pl-4">
              <img src={bootstrapLogo} alt="logo" style={iconStyle} />
              Bootstrap
            </a>
          </li>
          <li className="nav-item w-100">
            <a href="mmh" className="nav-link text-dark pl-4">
              <img style={iconStyle} src={sassLogo} alt="sass-logo" />
              SASS
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Sidebar
