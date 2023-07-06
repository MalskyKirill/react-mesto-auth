import {useState} from 'react'

function Login() {

  const [email, setEmail] = useState('')

  const handleSubmit = (evt) => {
    evt.preventDefault()
    console.log('submit')
  }

  const onChange = (e) => {
    console.log(e.target)
    console.log(e.target.value)
    setEmail(e.target.value)
  }

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
              onChange={onChange}
              value={email}
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
            />
          </label>
          <button className="sign__submit" type="submit">Войти</button>
        </form>
      </section>
    </main>
  );
}

export default Login;
