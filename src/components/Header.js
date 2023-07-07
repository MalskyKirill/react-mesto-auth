import { Link, useLocation } from 'react-router-dom';

function Header({ loggedIn }) {
  const location = useLocation();

  console.log(location.pathname);

  const title = location.pathname === '/sign-up' ? 'Вход' : 'Регистрация';
  const path = location.pathname === '/sign-up' ? '/sign-in' : '/sign-up';

  return (
    <header className='header'>
      <div className='header__logo'></div>
      {loggedIn ? (
        <Link className='header__link' to='/'>
          Выйти
        </Link>
      ) : (
        <Link className='header__link' to={path}>
          {title}
        </Link>
      )}
    </header>
  );
}

export default Header;
