import React from 'react'
import Mybutton from '../Components/UI/Button/MyButton'
import MyImput from '../Components/UI/input/MyInput'
import MyModal from '../Components/UI/Modal/MyModal'

function Login() {
    return (
        <MyModal>
            <h3>Enter login and pass</h3>
            <form action="">
                <MyImput type="text" name="login" placeholder='Login' />
                <MyImput type="password" name="login" placeholder='password' />
                <Mybutton>Sign</Mybutton>
            </form>

        </MyModal>
    )
}

export default Login