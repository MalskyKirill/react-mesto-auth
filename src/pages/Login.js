import { useState } from 'react';
import { authorize } from '../utils/authMesto';
import { useNavigate } from 'react-router-dom';

function Login({ handleLogin }) {
  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const { email, password } = formValue;

    authorize(email, password)
      .then((data) => {
        if (data.token) {
          setFormValue({ email: '', password: '' });
          handleLogin();
          navigate('/', { replace: true });
        }
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  return (
    <main className='content'>
      <section aria-label='Регистрация' className='sign'>
        <h2 className='sign__title'>Вход</h2>
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
              onChange={handleChange}
              value={formValue.email}
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
              onChange={handleChange}
              value={formValue.password}
            />
          </label>
          <button className='sign__submit' type='submit'>
            Войти
          </button>
        </form>
      </section>
    </main>
  );
}

export default Login;
