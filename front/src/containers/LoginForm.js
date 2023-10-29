import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "react-redux";
import { superUserAction, setAuthAction } from "../store/actions/auth";
import  '../styles/reset.css';
import '../styles/bootstrap-grid.min.css';
import '../styles/style.css';
import loginUser from "../assets/loginUser";

const LoginForm = () => {
    const store = useStore()
    const navigate = useNavigate()
    const [loginError, setLoginError] = useState('')

    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    })

    const [loginDataError, setLoginDataError] = useState({
        usernameError: null,
        passwordError: null,
    })

    const loginHandler = () => {

        if (!Object.values(loginDataError).every(value => value === null)) {
            setLoginError('Не все поля заполнены корректно')
            return
        }
        loginUser(loginData).then(e => {
            if (e) {
                e === 'manager' ? store.dispatch(superUserAction) : store.dispatch(setAuthAction)
                navigate('/')
            }
            else {
                setLoginError('Неправильный логин и/или пароль')
            }
        })
        
    }

    useEffect(() => {
        validateForm()
    },[loginData])
    const validateForm = () => {
        const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/
        const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
        const errors = {
          usernameError : null,
          passwordError : null,
        }
        if (!loginData.username.match(usernameRegex))
          errors['usernameError'] = 'Длина пароля должна быть от 3 до 16 символов английского алфавита'
        else
          errors['usernameError'] = null
    
        if (!loginData.password.match(passwordRegex))
          errors['passwordError'] = 'Не менее 8 символов. Одна заглавная. Одна цифра. Один из спецсимволов (.*?[#?!@$%^&*-)'
        else
          errors['passwordError'] = null

        setLoginDataError(errors)
      }
    return (
        <section className="section auth">
            <div className="container">
                <div className="auth-wrapper">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-4 col-lg-6">
                            <div className="auth-img">
                                <img src="img/big-logo.png" alt="logo"></img>
                            </div>
                        </div>
                        <div className="col-12 col-md-8 col-lg-6">
                            <form method="POST" className="auth-form" onSubmit={e => e.preventDefault()}>
                                <h2 className="auth-form__title">Войти</h2>
                                <div className="auth-form__group form-group">
                                    <label className="auth-form__label" htmlFor="login">Логин</label>
                                    <input 
                                    className="auth-form__input" id="login" name="login" type="text" required
                                    onChange={e => setLoginData({...loginData, username : e.target.value})}></input>
                                    <span className="auth-form__group">{loginData.username.length > 0 ? loginDataError.usernameError : null}</span>
                                </div>
                                <div className="auth-form__group form-group">
                                    <label className="auth-form__label" htmlFor="password">Введите пароль</label>
                                    <input className="auth-form__input" id="password" name="password" type="password" required
                                    onChange={e => setLoginData({...loginData, password : e.target.value})}></input>
                                    <span className="auth-form__group">{loginData.password.length > 0 ? loginDataError.passwordError : null}</span>
                                </div>
                                <button type="submit" className="btn btn-primary auth-form__btn" onClick={loginHandler}>Войти</button>
                                <h1 >{loginError}</h1>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginForm;