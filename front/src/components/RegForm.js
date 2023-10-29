import React from 'react';
import  '../styles/reset.css';
import '../styles/bootstrap-grid.min.css';
import '../styles/style.css';

const RegForm = () => {
    return(
        <section className="section reg">
            <div className="container">
                <div className="reg-wrapper">
                    <div className="row justify-content-end">
                        <div className="col-12 col-md-10 col-lg-8">
                            <form action="" className="reg-form">
                                <h2 className="reg-form__title">Регистрация аккаунтов</h2>
                                <div className="reg-form__group">
                                    <label for="fio">ФИО</label>
                                    <input type="text" id="fio" required></input>
                                </div>
                                <div className="reg-form__group">
                                    <label for="spec">Должность</label>
                                    <input type="text" name="" id="spec" required></input>
                                </div>
                                <div className="reg-form__group">
                                    <label for="login">Введите логин</label>
                                    <input type="text" id="login" required></input>
                                </div>
                                <div className="reg-form__group">
                                    <label for="pass">Введите пароль</label>
                                    <input type="password" id="pass" required></input>
                                </div>
                                <div className="reg-form__group">
                                    <label for="reppass">Подвердите пароль</label>
                                    <input type="password" name="" id="reppass" required></input>
                                </div>
                                <div className="reg-form__buttons">
                                    <button className="btn btn-trans-primary reg-form__btn">Отмена</button>
                                    <button className="btn btn-primary reg-form__btn">Регистрация</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RegForm;