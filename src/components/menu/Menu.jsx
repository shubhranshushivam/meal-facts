import React from 'react'
import './menu.scss';

export default function Menu({menuOpen, setMenuOpen}) {
  return (
    <div className={"menu "+(menuOpen && 'active') }>
        <ul>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#home">Home</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#scan">Scan Now</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#instruction">How to Use</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#about">About Us</a>
            </li>
            
        </ul>
    </div>
  )
}
