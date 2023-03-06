import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu() {
  return (
    <div  className='menu'>
      <NavLink to="/"></NavLink>
        <ul>
        <li><NavLink to="/" className={({isActive}) => (isActive ? "activeLink" : undefined)}>Accueil</NavLink></li>
        {/* <li><NavLink to="/achat" className={({isActive}) => (isActive ? "activeLink" : undefined)}>Acheter</NavLink></li> */}
        <li><NavLink to="/vendre" className={({isActive}) => (isActive ? "activeLink" : undefined)}>Vendre</NavLink></li>
        <li><NavLink to="/offres" className={({isActive}) => (isActive ? "activeLink" : undefined)}>Offres</NavLink></li>
        <li><NavLink to="/panier" className={({isActive}) => (isActive ? "activeLink" : undefined)}>Panier</NavLink></li>
        <li><NavLink to="/contact" className={({isActive}) => (isActive ? "activeLink" : undefined)}>Contact</NavLink></li>
            
      
        </ul>
    </div>
  )
}

export default Menu