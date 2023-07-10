import { Link, useLocation } from 'react-router-dom';

function Header({ loggedIn, userEmail }) {
  const location = useLocation();

  console.log(location.pathname);

  const title = location.pathname === '/sign-up' ? 'Вход' : 'Регистрация';
  const path = location.pathname === '/sign-up' ? '/sign-in' : '/sign-up';

  return (
    <header className='header'>
      <div className='header__logo'></div>
      {loggedIn ? (
        <div className='header__wrap'>
          <p className='header__email'>{userEmail}</p>
          <Link className='header__link' to='/'>
            Выйти
          </Link>
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
