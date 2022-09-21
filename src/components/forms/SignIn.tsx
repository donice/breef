import './Signin.css'
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  // const { setAuth } = useContext(Authcontext)
  const userRef = useRef<any>()
  const errRef = useRef()

  const [user, setUser] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [errMssg, setErrMssg] = useState<string>('')
  const [success, setSuccess] = useState<boolean>(false)

  useEffect(() => {
    userRef.current?.focus();
  }, [])

  useEffect(() => {
    setErrMssg('')
  }, [user, password])

  // handleSUbmit Function
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // console.log('Hello World')
    // axios({
    //   method: "post",
    //   url: "https://unopass-api.herokuapp.com/login/token",
    //   data: {
    //     username: user,
    //     password
    //   },
    //   headers: { "Content-Type": "multipart/form-data" }
    // })
    //   .then(function (response) {
    //     //handle success
    //     console.log(response.data);
    //   })
    //   .catch(function (response) {
    //     //handle error
    //     console.log(response);
    //   });
  }


  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in</h1>
          <br />
          <p>
            <a href="/">Go to Home</a>
          </p>
        </section>
      ) : (
        <section>
          <div className="SignIn">
            <div className="SignIn-side-bar">
              <a href="/">
                <span className="sr-only">Your Company</span>
                <h1
                  className="logo text-7xl h-8 w-auto sm:h-10 text-teal-700"
                > Breef. </h1>
              </a>
              <h1>
                Welcome <br />
                Back, <br />
                Chief. <br />
              </h1>
              <p>
                You'd never have to worry about the security <br />
                of your accounts, ever again. <br />
                Start today, with a click
              </p>
            </div>
            <div className="SignIn--form">
              <div className='mb-10'>
                <a href="/">
                  <span className="sr-only">Your Company</span>
                  <h1
                    className="logo text-7xl h-8 w-auto sm:h-10 text-teal-700"
                  > Breef. </h1>
                </a>
                <h1> Create an account</h1>
                <p className='text-center text-sm'>
                  Already have an account? <Link to='/' className='underline'>Sign Up</Link>
                </p>
              </div>

              <form onSubmit={handleSubmit} className="SignIn--form-area">
                {/* <p
                  ref={errRef}
                  className={errMssg ? 'errmsg' : 'offscreen'}
                  aria-live="assertive"
                >
                  {errMssg}
                </p> */}
                <h1>Sign in</h1>
                <label htmlFor="username">Username:</label>
                <br />
                <input
                  type="text"
                  id="username"
                  // ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  required
                />
                <br />
                <br />
                <label htmlFor="password">Password:</label>
                <br />

                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
                <br />
                {/* <Link to='/dashboard' > */}
                <input type="submit" value="Sign in" className="submit" />
                {/* </Link> */}
                <span>
                  <a href="/">Cannot sign in?</a>
                </span>
                <p>
                  By proceeding, you agree to the
                  <a href="/">Terms of Services</a> and{' '}
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

export default SignIn
