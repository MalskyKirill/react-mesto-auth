import { Link, useLocation, useNavigate } from 'react-router-dom';

function Header({ loggedIn, userEmail }) {
  const location = useLocation();
  const navigate = useNavigate();

  const title = location.pathname === '/sign-up' ? 'Вход' : 'Регистрация';
  const path = location.pathname === '/sign-up' ? '/sign-in' : '/sign-up';

  function onSingOut() {
    localStorage.removeItem('token')
    // navigate('/sign-in', { replace: true })
  }

  return (
    <header className='header'>
      <div className='header__logo'></div>
      {loggedIn ? (
        <div className='header__wrap'>
          <p className='header__email'>{userEmail}</p>
          <Link to='/sign-in' onClick={onSingOut} className='header__link'>
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
