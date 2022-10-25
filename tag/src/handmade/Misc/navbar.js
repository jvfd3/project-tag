import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick =()=> setClick(!click);
  return(
    <>
      <h1> C </h1>
      <nav className='navbar'>
        <div className='navbar_container'>
          <Link to='/' className='navbar_logo'>
            test *icon*
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
        </div>
      </nav>x'
    </>
  );
}

export default Navbar;