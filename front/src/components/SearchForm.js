import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import '../styles/reset.css';
import '../styles/bootstrap-grid.min.css';
import '../styles/style.css';
import PopUp from './PopUp.js';
import Tags from './TagInput';

const RowItem = (props) => {
    return (
        <div className="docs-row">
            <div className="row justify-content-between">
                <div className="col-1 col-md-1 oder-0">
                    <div className="docs-col">1</div>
                </div>
                <div className="col-5 col-md-2 order-3">
                    <div className="docs-col">
                        {props.type}
                    </div>
                </div>
                <div className="col-12 col-md-6 order-4">
                    <div className="docs-col">
                        <Link to="/">{props.name}</Link>
                    </div>
                </div>
                <div className="col-5 col-md-3 order-1">
                    <div className="docs-col">
                        {props.number}
                    </div>
                </div>
            </div>
        </div>
    )
}


const SearchForm = () => {

    return (
        <section className="section search">
            <div className="container">
                <div className="search-wrapper">
                    <form action="" className="search-form">
                        <div className="search-form__label search-label">
                            <h2 className="search-label__title">Поиск документации</h2>
                            <PopUp />
                        </div>
                        <div className="search-form__input search-input">
                            <Tags><input type="text" placeholder="Ключевые слова" className="search-input__row"></input></Tags>
                            <button type="button" className="btn btn-primary search-form__btn">Поиск</button>
                        </div>
                    </form>
                </div>
                <div className="docs">
                    <div className="docs-wrapper">
                        <RowItem type = 'Гост' name = 'Афганистан' number = 'Номер'/>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default SearchForm;