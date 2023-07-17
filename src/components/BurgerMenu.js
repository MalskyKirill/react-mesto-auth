function BurgerMenu({ burgerOpen, userEmail, handleSingOut }) {
  return (
    <ul className={burgerOpen ? 'burger' : 'burger burger_active'}>
      <li>
        <p className='header__email'>{userEmail}</p>
      </li>
      <li>
        <button onClick={handleSingOut} className='header__link-in'>
          Выйти
        </button>
      </li>
    </ul>
  );
}

export default BurgerMenu;
