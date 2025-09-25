import { useState } from 'react'
import s from './Login.module.css'
import logomeliova from '../assets/logomeliova.png'
import { Link } from 'react-router-dom'

export default function Login() {
  const [form, setForm] = useState({ user: '', pass: '' })

  return (
    <main className={s.wrap} role="main">
      <div className={s.container}>
        <section className={s.left} aria-label="Brand illustration">
          <div className={s.brandCard} aria-hidden="true">
            <img src={logomeliova} alt="Meliova brand illustration" />
          </div>
        </section>

        <section className={s.panel} aria-label="Log in">
        <h1 className={s.h1}>Log in</h1>
        <p className={s.legal}>
          By continuing, you agree to our <a href="#">User Agreement</a> and acknowledge that you
          understand the <a href="#">Privacy and Policy</a>.
        </p>

        <div className={s.hr}><span>OR</span></div>

        <form
          className={s.form}
          onSubmit={(e) => {
            e.preventDefault()
            alert(`username/email: ${form.user}\npassword: ${'*'.repeat(form.pass.length)}`)
          }}
        >
          <label className={s.field}>
            <input
              className={s.input}
              type="text"
              inputMode="email"
              autoComplete="username"
              placeholder="username or Email address"
              value={form.user}
              onChange={(e) => setForm({ ...form, user: e.target.value })}
              aria-label="username or Email address"
              required
            />
          </label>

          <label className={s.field}>
            <input
              className={s.input}
              type="password"
              autoComplete="current-password"
              placeholder="Password"
              value={form.pass}
              onChange={(e) => setForm({ ...form, pass: e.target.value })}
              aria-label="Password"
              required
            />
          </label>

          <div className={s.actions}>
            <div className={s.smallText}>
              <span>forgot your username or password?</span>
              <a className={s.link} href="#">here</a>
            </div>
            <button className={s.button} type="submit">log in</button>
          </div>

          <div className={s.signup}>
            <span>New to Meliova?</span> <Link to="/signup" className={s.link}>Sign Up</Link>
          </div>
        </form>
      </section>
      </div>
    </main>
  )
}
