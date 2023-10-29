import React from 'react';
import {Link} from 'react-router-dom';
import  '../styles/reset.css';
import '../styles/bootstrap-grid.min.css';
import '../styles/style.css';


const InfoForm = () => {
    return(
        <section className="section profile">
            <div className="container">
                <div className="profile-wrapper">
                    <form action="" className="profile-form">
                        <h2 className="profile-form__title">Информация о пользователе</h2>
                        <div className="profile-form__wrapper">
                            <div className="row">
                                <div className="col-12 col-md-2">
                                    <div className="profile-photo">
                                        <div className="profile-photo__img">
                                            <img src="../../img/man.jpg" alt=""></img>
                                        </div>
                                        <div className="profile-photo__buttons">
                                            <Link to="#" className="profile-photo__btn profile-photo__refresh">Обновить</Link>
                                            <Link to="#" className="profile-photo__btn profile-photo__delete">Удалить</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-10">
                                    <div className="profile-edit">
                                        <div className="profile-edit__group">
                                            <label for="lastname">Фамилия</label>
                                            <input type="text" name="" id="lastname" required></input>
                                        </div>
                                        <div className="profile-edit__group">
                                            <label for="name">Имя</label>
                                            <input type="text" name="" id="name" required></input>
                                        </div>
                                        <div className="profile-edit__group">
                                            <label for="middle">Отчество</label>
                                            <input type="text" name="" id="middle"></input>
                                        </div>
                                        <div className="profile-edit__group">
                                            <label for="spec">Должность</label>
                                            <input type="text" name="" id="spec" required></input>
                                        </div>
                                        <div className="profile-edit__group">
                                            <label for="login">Логин</label>
                                            <input type="text" name="" id="login" required></input>
                                        </div>
                                        <div className="profile-edit__group">
                                            <label for="pass">Пароль</label>
                                            <input type="password" id="pass" required></input>
                                        </div>
                                        <div className="profile-edit__group">
                                            <label for="passrep">Подтверждение пароля</label>
                                            <input type="password" id="passrep" required></input>
                                        </div>
                                        <div className="profile-buttons">
                                            <button className="btn btn-trans-primary profile-btn">Отменить</button><button className="btn btn-primary profile-btn">Применить</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )

}

export default InfoForm;