import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/calendar">Maand</Link>
            </li>
            <li>
              <Link to="/day">Vandaag</Link>
            </li>
            <li>
              <Link to="/admin">Afspraken maken/wijzigen</Link>
            </li>
            <li>
              <Link to="/personel">Personeel beheer</Link>
            </li>
            <li>
              <Link to="/patients">Patienten beheer</Link>
            </li>
            <li>
              <Link to="/sickness">Ziek melden</Link>
            </li>
          </ul>
        </nav>
    )
}

export default NavBar
