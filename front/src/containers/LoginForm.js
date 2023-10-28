import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "react-redux";
import { superUserAction, setAuthAction } from "../store/actions/auth";
import  '../styles/reset.css';
import '../styles/bootstrap-grid.min.css';
import '../styles/style.css';

const LoginForm = () => {
    const store = useStore()
    const navigate = useNavigate()
    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    });
    const [errorLoginData, setErrorLoginData] = useState(null);

    const loginHandler = () => {
        responseBody = loginUser(loginData)
        if (response.status === 400) {
            setErrorLoginData(response.message)
            return
        }
        response.role === 'manager' ? store.dispatch(superUserAction) : store.dispatch(setAuthAction)
        navigate('/')
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
                            <form method="POST" className="auth-form">
                                <h2 className="auth-form__title">Войти</h2>
                                <div className="auth-form__group form-group">
                                    <label className="auth-form__label" for="login">Логин</label>
                                    <input className="auth-form__input" id="login" name="login" type="text" required></input>
                                </div>
                                <div className="auth-form__group form-group">
                                    <label className="auth-form__label" for="password">Введите пароль</label>
                                    <input className="auth-form__input" id="password" name="password" type="password" required></input>
                                </div>
                                <button type="submit" className="btn btn-primary auth-form__btn">Войти</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginForm;