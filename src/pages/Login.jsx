import React, { useContext } from 'react'
import Mybutton from '../Components/UI/Button/MyButton'
import MyImput from '../Components/UI/input/MyInput'
import AuthContext from '../Context'

function Login() {
    const { setIsAuth } = useContext(AuthContext)
    const Login = (event) => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('Auth', 'true')
    }
    return (
        <div>
            <h3>Enter login and pass</h3>
            <form onSubmit={Login}>
                <MyImput type="text" name="login" placeholder='Login' />
                <MyImput type="password" name="pass1" placeholder='Password' />
                <Mybutton>Sign</Mybutton>
            </form>

        </div>
    )
}

export default Login