import { Link, useLocation } from 'react-router-dom';

function Header({ loggedIn, userEmail, handleSingOut }) {
  const location = useLocation();

  const title = location.pathname === '/sign-up' ? 'Вход' : 'Регистрация';
  const path = location.pathname === '/sign-up' ? '/sign-in' : '/sign-up';

  return (
    <header className='header'>
      <div className='header__logo'></div>
      {loggedIn ? (
        <div className='header__wrap'>
          <p className='header__email'>{userEmail}</p>
          <button onClick={handleSingOut} className='header__link'>
            Выйти
          </button>
        </div>
      ) : (
        <Link className='header__link' to={path}>
          {title}
        </Link>
      )}
    </header>
  );
}

export default Header;
