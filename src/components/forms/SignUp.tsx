import React, { useEffect, useRef, useState } from 'react'
import {
  faCheck,
  faTimes,
  faInfoCircle,
  faEye,
  faEyeSlash,
  faCheckCircle,
  faArrowRightToBracket,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './signup.css'
import { Link } from 'react-router-dom'


const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_.]{3,23}$/
const EMAIL_REGEX = /^[a-zA-Z][a-zA-Z0-9-_](?=.*[.]).{3,23}$/
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/


const SignUp: React.FC = () => {
  const userRef = useRef<HTMLInputElement>(null)
  const errRef = useRef<HTMLInputElement>(null)
  const [user, setUser] = useState<string>('')
  const [validUser, setValidUser] = useState<boolean>(false)
  const [userFocus, setUserFocus] = useState<boolean>(false)

  const [email, setEmail] = useState<string>('')
  const [validEmail, setValidEmail] = useState<boolean>(false)
  const [emailFocus, setEmailFocus] = useState<boolean>(false)

  const [password, setPassword] = useState<string>('')
  const [validPassword, setValidPassword] = useState<boolean>(false)
  const [passwordFocus, setPasswordFocus] = useState<boolean>(false)

  const [passwordType, setPasswordType] = useState<string>('password')
  const [passwordInput, setPasswordInput] = useState<string>('')

  const [error, setError] = useState<boolean>(false)

  const [errMssg, setErrMssg] = useState<string>('')
  const [success, setSuccess] = useState<boolean>(false)

  useEffect(() => {
    userRef.current?.focus()
  }, [])

  //* an effect that tests if the username matches the regex requirements
  useEffect(() => {
    const result = USER_REGEX.test(user)
    setValidUser(result)
  }, [user])

  //* an effect that tests if the email matches the regex requirements
  useEffect(() => {
    const result = EMAIL_REGEX.test(email)
    setValidEmail(result)
  }, [email])

  //* an effect that checks if the password matches the regex requirements
  useEffect(() => {
    const result = PASSWORD_REGEX.test(password)
    setValidPassword(result)
  }, [password])

  //* an effect that clears the error message when either of the dependencies changes
  useEffect(() => {
    setErrMssg('')
  }, [user, email, password])

  // handleSubmit function
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

  }

  //handlePasswordToggle function
  const passwordToggle = () => {
    if (passwordType === 'password') {
      setPasswordType('text')
      return
    }
    setPasswordType('password')
  }

  const handlePasswordToggle = () => {
    passwordToggle()
  }

  return (
    <>
      {success ? (
        <section className="w-72 bg-stone-100 rounded-xl dropShadow-xl m-auto mt-44 p-5 text-center ">
          <span>
            <FontAwesomeIcon
              icon={faCheckCircle}
              style={{
                color: 'green',
                fontSize: '50px',
              }}
            />
          </span>
          <h1>Your Registration is Successful</h1>
          <p>Proceed to the Sign in Page</p>
          <button>
            <a href="/signin">
              Sign in
              <span>
                <FontAwesomeIcon
                  icon={faArrowRightToBracket}
                  style={{
                    color: 'white',
                  }}
                />
              </span>
            </a>
          </button>
        </section>
      ) : (
        <section>
          <div className="flex bg-stone-50 text-black">

            <div className="Registration--form">

              <form onSubmit={handleSubmit} className="Registration--form-area">
                <p
                  ref={errRef}
                  className={errMssg ? 'errmsg' : 'offscreen'}
                  aria-live="assertive"
                >
                  {' '}
                  {errMssg}{' '}
                </p>

                <h1>Create an account</h1>

                <label htmlFor="username">
                  Username:
                  <span className={validUser ? 'valid' : 'hide'}>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  <span className={validUser || !user ? 'hide' : 'invalid'}>
                    <FontAwesomeIcon icon={faTimes} />
                  </span>
                </label>
                <br />
                <input
                  type="text"
                  id="username" //matches the label's htmlFor
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  required
                  aria-invalid={validUser ? 'false' : 'true'}
                  aria-describedby="uidnote" // matches the error paragraph id
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                />
                <p
                  id="uidnote"
                  className={
                    userFocus && user && !validUser
                      ? 'instructions'
                      : 'offscreen'
                  }
                >
                  <FontAwesomeIcon icon={faInfoCircle} />
                  4 to 24 characters. <br />
                  Must begin with a letter. <br />
                  Letters, numbers, underscores hyphens allowed.
                </p>
                <br />
                <br />

                <label htmlFor="email">
                  Email:
                  <span className={validEmail ? 'valid' : 'hide'}>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  <span className={validEmail || !email ? 'hide' : 'invalid'}>
                    <FontAwesomeIcon icon={faTimes} />
                  </span>
                </label>
                <br />
                <input
                  type="text"
                  id="email" // matches the label's htmlFor
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-invalid={validEmail ? 'false' : 'true'}
                  aria-describedby="emailconfirm" // matches the error paragraph id
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                />
                <p
                  id="emailconfirm"
                  className={
                    emailFocus && !validEmail ? 'instructions' : 'offscreen'
                  }
                >
                  <FontAwesomeIcon icon={faInfoCircle} />
                  Enter a valid email address
                </p>
                <br />
                <br />

                <label htmlFor="password">
                  Password:
                  <span className={validPassword ? 'valid' : 'hide'}>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  <span
                    className={validPassword || !password ? 'hide' : 'invalid'}
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </span>
                </label>
                <br />
                <input
                  type="text"
                  id="password" // matches the label's htmlFor
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="false"
                  required
                  aria-invalid={validPassword ? 'false' : 'true'}
                  aria-describedby="pwdnote" // matches the error paragraph id
                  onFocus={() => setPasswordFocus(true)}
                  onBlur={() => setPasswordFocus(false)}
                />

                {/* hide/show password toggle  */}
                <span
                  onClick={handlePasswordToggle}
                  style={{ color: 'red', cursor: 'pointer' }}
                >
                  <span
                    style={{
                      fontSize: '13px',
                    }}
                  >
                    <FontAwesomeIcon icon={faEye} />
                  </span>
                  {/* 
									<span style={{fontSize: '13px'}} >
										<FontAwesomeIcon icon={faEyeSlash}/>
									</span> 
								*/}
                </span>
                {/* ----------------------------- */}

                <p
                  id="pwdnote"
                  className={
                    passwordFocus && !validPassword
                      ? 'instructions'
                      : 'offscreen'
                  }
                >
                  <FontAwesomeIcon icon={faInfoCircle} />
                  4 to 24 characters. <br />
                  Must include uppercase and lowercase letters, a number and a
                  special character <br />
                  Allowed special characters:
                  <span aria-label="exclamation mark">!</span>
                  <span aria-label="at symbol">@</span>
                  <span aria-label="hashtag">#</span>
                  <span aria-label="dollar sign">$</span>
                  <span aria-label="percent">%</span>
                </p>
                <br />
                <br />

                <Link to='/'>
                  <input
                    type="submit"
                    value="Create Account"
                    className="submit"
                  />
                </Link>
                <br />
                <p>
                  Already have an account? <Link to='/' className='underline'>Sign In</Link>
                </p>
                <p>
                  By proceeding, you agree to the
                  <a href="/">Terms of Services</a> and
                  <a href="/">Privacy Notice</a>
                </p>
              </form>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default SignUp;  