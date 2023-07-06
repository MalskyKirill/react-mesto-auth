function Login() {
  return (
    <main className='content'>
      <section aria-label='Регистрация' className='sign'>
        <h2 className='sign__title'>Вход</h2>
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
          <button className="sign__submit" type="submit">Войти</button>
        </form>
      </section>
    </main>
  );
}

export default Login;
