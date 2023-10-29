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
                            <input type="text" placeholder="Ключевые слова" className="search-input__row"></input>
                            <button type="button" className="btn btn-primary search-form__btn">Поиск</button>
                        </div>
                    </form>
                </div>
                <div className="docs">
                    <div className="docs-wrapper">
                        <div className="docs-row">
                            <div className="row justify-content-between">
                                <div className="col-1 col-md-1 oder-0">
                                    <div className="docs-col">1</div>
                                </div>
                                <div className="col-5 col-md-2 order-3">
                                    <div className="docs-col">
                                        ГОСТ (гос. стандарт)
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 order-4">
                                    <div className="docs-col">
                                        <a href="#">Информационные технологии. Комплекс стандартов на автоматизированные системы управления</a>
                                    </div>
                                </div>
                                <div className="col-5 col-md-3 order-1">
                                    <div className="docs-col">
                                        34.602-2020
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="docs-row">
                            <div className="row justify-content-between">
                                <div className="col-1 col-md-1 oder-0">
                                    <div className="docs-col">1</div>
                                </div>
                                <div className="col-5 col-md-2 order-3">
                                    <div className="docs-col">
                                        ГОСТ (гос. стандарт)
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 order-4">
                                    <div className="docs-col">
                                        <a href="#">Информационные технологии. Комплекс стандартов на автоматизированные системы управления</a>
                                    </div>
                                </div>
                                <div className="col-5 col-md-3 order-1">
                                    <div className="docs-col">
                                        34.602-2020
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default SearchForm;
