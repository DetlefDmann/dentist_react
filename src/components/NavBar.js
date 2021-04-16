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
              <Link to="/calendar">Calendar view</Link>
            </li>
            <li>
              <Link to="/day">Day view</Link>
            </li>
            <li>
              <Link to="/admin">Afspraken maken/wijzigen</Link>
            </li>
            <li>
              <Link to="/personel">Personeel beheer</Link>
            </li>
          </ul>
        </nav>
    )
}

export default NavBar
