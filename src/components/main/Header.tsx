import React from 'react'
import { Link } from 'react-router-dom'
import '../../style.css'

const header = () => {
  return (
    <header className="header">
      <div className="navtext-container">
        <div className="navtext">AR神戸研</div>
      </div>
      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label htmlFor="menu-btn" className="menu-icon">
        <span className="navicon"></span>
      </label>
      <ul className="menu">
        <li className="top">
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/compass">Compass</Link>
        </li>
        <li>
          <Link to="/rd">model</Link>
        </li>
        <li>
          <Link to="/poster">Poster</Link>
        </li>
        <li>
          <Link to="/explain">Avatar</Link>
        </li>
      </ul>
    </header>
  )
}

export default header;
