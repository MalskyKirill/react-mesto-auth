function Registration() {
  return (
    <main className='content'>
      <section aria-label='Регистрация' className='sign'>
        <h2 className='sign__title'>Регистрация</h2>
        <form className='sign__form' name='signForm'>
          <label className='sign__field-wrap'>
            <input
              className='sign__field'
              name='email'
              type='email'
              placeholder='Email'
              minlength='2'
              maxlength='30'
              required
            />
          </label>
          <label className='sign__field-wrap'>
            <input
              className='sign__field'
              name='password'
              type='password'
              placeholder='Пароль'
              minlength='2'
              maxlength='30'
              required
            />
          </label>
          <button className="sign__submit" type="submit">Зарегистрироваться</button>
        </form>
        <p className="sign__subtitle">Уже зарегистрированы? <a className="sign__link">Войти</a></p>
      </section>
    </main>
  );
}

export default Registration;
