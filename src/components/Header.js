import { Link, useLocation } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

function Header({ loggedIn, userEmail, handleSingOut }) {
  const [burger, setBurger] = useState(true);

  const location = useLocation();

  const title = location.pathname === '/sign-up' ? 'Вход' : 'Регистрация';
  const path = location.pathname === '/sign-up' ? '/sign-in' : '/sign-up';

  return (
    <>
      <ul className={burger ? 'burger' : 'burger burger_active'}>
        <li>
          <p className='header__email'>{userEmail}</p>
        </li>
        <li>
          <button onClick={handleSingOut} className='header__link-in'>
            Выйти
          </button>
        </li>
      </ul>
      <header className='header'>
        <div className='header__logo'></div>
        {loggedIn ? (
          <>
            <div className='header__wrap'>
              <p className='header__email'>{userEmail}</p>
              <button onClick={handleSingOut} className='header__link-in'>
                Выйти
              </button>
            </div>
            <div
              onClick={() => setBurger(!burger)}
              className='header__mobile-btn'
            >
              {burger ? (
                <AiOutlineMenu size={25} />
              ) : (
                <AiOutlineClose size={25} />
              )}
            </div>
          </>
        ) : (
          <Link className='header__link' to={path}>
            {title}
          </Link>
        )}
      </header>
    </>
  );
}

export default Header;
