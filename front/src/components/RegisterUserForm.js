import React, { useState } from 'react';
import '../styles/reset.css';
import '../styles/bootstrap-grid.min.css';
import '../styles/style.css';
import registerUser from '../assets/registerUser'
import { useNavigate } from 'react-router-dom';

const RegisterUserForm = () => {
    const defaultState = {
        login: null,
        password: null,
        role: null
    }
    const [errorReg, setErrorReg] = useState(null)
    const [data, setData] = useState(defaultState)
    const navigate = useNavigate()
    const regHandler = () => {
        registerUser(data).then(e => e === 'Ok?' ? null : setErrorReg(e))
        if (!errorReg)
            navigate('/')
    }
    return (
        <section className="section reg">
            <div className="container">
                <div className="reg-wrapper">
                    <div className="row justify-content-end">
                        <div className="col-12 col-md-10 col-lg-8">
                            <form action="" className="reg-form" onSubmit={e => e.preventDefault()}>
                                <h2 className="reg-form__title">Регистрация аккаунтов</h2>
                                <div className="reg-form__group">
                                    <label for="fio">ФИО</label>
                                    <input type="text" id="fio"></input>
                                </div>
                                <div className="reg-form__group">
                                    <label for="spec">Должность</label>
                                    <input type="text" name="" id="spec" required></input>
                                </div>
                                <div className="reg-form__group">
                                    <label for="login">Введите логин</label>
                                    <input type="text" id="login" required onClick={e => setData({...data, login: e.target.value})}></input>
                                </div>

                                <div className="reg-form__group" onSubmit={e => e.preventDefault()}>
                                <label for="login">Выберите роль</label>
                                    <select id = "login" onChange={e => {
                                        setData({ ...data, role: e.target.options[e.target.selectedIndex].text })
                                    }}>
                                        <option></option>
                                        <option value='1'>employee</option>
                                        <option value='2'>manager</option>
                                    </select>
                                </div>
                                <div className="reg-form__group">
                                    <label for="pass">Введите пароль</label>
                                    <input type="password" id="pass" required onChange={e => setData({...data, password: e.target.value})}></input>
                                </div>
                                <div className="reg-form__group">
                                    <label for="reppass">Подвердите пароль</label>
                                    <input type="password" name="" id="reppass" required></input>
                                </div>
                                <div className="reg-form__buttons">
                                    <button className="btn btn-trans-primary reg-form__btn" onClick={e => setData(defaultState)}>Отмена</button>
                                    <button className="btn btn-primary reg-form__btn" onClick={regHandler}>Регистрация</button>
                                    <h2>{errorReg}</h2>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default RegisterUserForm;