import React, { useState } from 'react';
import '../styles/reset.css';
import '../styles/bootstrap-grid.min.css';
import '../styles/style.css';

const RegForm = () => {
    const [formData, setFormData] = useState({
        fio: '',
        spec: '',
        login: '',
        pass: '',
        reppass: '',
    });

    const [errors, setErrors] = useState({
        fio: '',
        login: '',
        pass: '',
        reppass: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!formData.fio) {
            newErrors.fio = 'ФИО должно быть заполнено';
        }

        if (formData.login.length < 3) {
            newErrors.login = 'Логин должен быть не менее 3 символов';
        }

        if (formData.pass.length < 8) {
            newErrors.pass = 'Пароль должен быть не менее 8 символов';
        } else if (formData.pass !== formData.reppass) {
            newErrors.pass = 'Пароли не совпадают';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Submit the form if there are no errors
            // You can add your form submission logic here
        }
    };

    return (
        <section className="section reg">
            <div className="container">
                <div className="reg-wrapper">
                    <div className="row justify-content-end">
                        <div className="col-12 col-md-10 col-lg-8">
                            <form action="" className="reg-form" onSubmit={handleSubmit}>
                                <h2 className="reg-form__title">Регистрация аккаунтов</h2>
                                <div className="reg-form__group">
                                    <label htmlFor="fio">ФИО</label>
                                    <input type="text" id="fio" name="fio" value={formData.fio} onChange={handleChange} required />
                                    {errors.fio && <div className="error">{errors.fio}</div>}
                                </div>
                                <div className="reg-form__group">
                                    <label htmlFor="spec">Должность</label>
                                    <input type="text" id="spec" name="spec" value={formData.spec} onChange={handleChange} required />
                                </div>
                                <div className="reg-form__group">
                                    <label htmlFor="login">Введите логин</label>
                                    <input type="text" id="login" name="login" value={formData.login} onChange={handleChange} required />
                                    {errors.login && <div className="error">{errors.login}</div>}
                                </div>
                                <div className="reg-form__group">
                                    <label htmlFor="pass">Введите пароль</label>
                                    <input type="password" id="pass" name="pass" value={formData.pass} onChange={handleChange} required />
                                    {errors.pass && <div className="error">{errors.pass}</div>}
                                </div>
                                <div className="reg-form__group">
                                    <label htmlFor="reppass">Подтвердите пароль</label>
                                    <input type="password" id="reppass" name="reppass" value={formData.reppass} onChange={handleChange} required />
                                </div>
                                <div className="reg-form__buttons">
                                    <button className="btn btn-trans-primary reg-form__btn">Отмена</button>
                                    <button type="submit" className="btn btn-primary reg-form__btn">Регистрация</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegForm;
