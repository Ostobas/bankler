import React, { Component } from 'react'

import { connect } from 'react-redux'
import { login, logout } from '../store/actions'

import { InputText } from '../components/UI/Inputs';
import { Button } from '../components/UI/Button';

class LoginPage extends Component {
    
    auth = () => {
        this.props.history.push('/accounts')
        this.props.loginUser()
    }
    
    render() {

        return (
            <div className='content-center'>
                <form>
                    <InputText type='email' name='userEmail' placeholder='Email' required/>
                    <InputText type='password' name='userPassword' placeholder='Password' required/>
                    {/* <div><a className='small'>Forgot your password?</a></div> */}
                    <Button text='Get Started' onClick={this.auth}/>
                    {/* <div><a className='small'>Create account</a></div> */}
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginUser: () => dispatch(login()),
        logoutUser: () => dispatch(logout())
    }
}

export default connect(null, mapDispatchToProps)(LoginPage)