import React, { useState }  from 'react';
import  '../styles/reset.css';
import '../styles/bootstrap-grid.min.css';
import '../styles/style.css';
import PopUp from './PopUp.js';


const SearchForm = () => {

    return(
        <section className="section search">
            <div className="container">
                <div className="search-wrapper">
                    <form action="" className="search-form">
                        <div className="search-form__label search-label">
                            <h2 className="search-label__title">Поиск документации</h2>
                            <PopUp/>
                        </div>
                        <div className="search-form__input search-input">
                            <input type="text" placeholder="Введите запрос" className="search-input__row"></input>
                            <button type="button" className="btn btn-primary search-form__btn">Поиск</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )

}

export default SearchForm;
