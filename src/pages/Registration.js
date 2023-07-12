import { useState } from 'react';
import { Link } from 'react-router-dom';

function Registration({ handleRegistration }) {
  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const { email, password } = formValue;
    handleRegistration(email, password);
  };

  return (
    <main className='content'>
      <section aria-label='Регистрация' className='sign'>
        <h2 className='sign__title'>Регистрация</h2>
        <form className='sign__form' name='signForm' onSubmit={handleSubmit}>
          <label className='sign__field-wrap'>
            <input
              className='sign__field'
              name='email'
              type='email'
              placeholder='Email'
              minLength='2'
              maxLength='30'
              required
              value={formValue.email}
              onChange={handleChange}
            />
          </label>
          <label className='sign__field-wrap'>
            <input
              className='sign__field'
              name='password'
              type='password'
              placeholder='Пароль'
              minLength='2'
              maxLength='30'
              required
              value={formValue.password}
              onChange={handleChange}
            />
          </label>
          <button className='sign__submit' type='submit'>
            Зарегистрироваться
          </button>
        </form>
        <p className='sign__subtitle'>
          Уже зарегистрированы?{' '}
          <Link to='/sign-in' className='sign__link'>
            Войти
          </Link>
        </p>
      </section>
    </main>
  );
}

export default Registration;
