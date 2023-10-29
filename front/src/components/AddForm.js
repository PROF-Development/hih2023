import React from 'react';
import  '../styles/reset.css';
import '../styles/bootstrap-grid.min.css';
import '../styles/style.css';

const AddForm = () => {
    return(
        <section className="section add">
            <div className="container">
                <div className="add-wrapper">
                    <form action="" className="add-form">
                        <h2 className="add-form__title">Добавление новых документов</h2>
                        <div className="add-form__group">
                            <label for="docType">Тип документа</label>
                            <select name="" id="docType">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                        <div className="add-form__group">
                            <label for="docName">Название документа</label>
                            <input type="text" name="" id="docName" required></input>
                        </div>
                        <div className="add-form__group">
                            <label for="docNum">Номер документа</label>
                            <input type="text" name="" id="docNum" required></input>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="add-form__group">
                                    <label for="dateEx">Дата выхода документа</label>
                                    <input type="date" name="" id="dateEx" required></input>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="add-form__group">
                                    <label for="dateCh">Дата введения в действие</label>
                                    <input type="date" name="" id="dateCh" required></input>
                                </div>
                            </div>
                        </div>
                        <div className="add-form__group">
                            <label for="docKey">Ключевые слова</label>
                            <input type="text" name="" id="docKey" required></input>
                        </div>
                        <div className="add-form__file">
                            <input type="file" id="upPdf"></input>
                            <label for="upPdf"><span>Выберите файл</span></label>
                            <p>pdf</p>
                        </div>
                        <div className="add-form__buttons">
                            <button className="btn btn-trans-primary add-form__btn">Отменить</button><button class="btn btn-primary add-form__btn">Применить</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default AddForm;