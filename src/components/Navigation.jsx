import React from 'react';
import { Link } from 'react-router-dom';


function Navigation() {
  return (
    <nav>
      <h1>Seuss Treasurey</h1>
      <ul>
        <li className='menu'>
          <Link to="/">Books</Link>
        </li>
        <li className='menu'>
          <Link to="/quotes">Quotes</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
