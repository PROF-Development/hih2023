import React from 'react';
import  '../styles/reset.css';
import '../styles/bootstrap-grid.min.css';
import '../styles/style.css';

const ChangeForm = () => {
    return(
        <section className="section change">
            <div className="container">
                <div className="change-wrapper">
                    <form action="" className="change-form">
                        <h2 className="change-form__title">Изменение документов</h2>
                        <div className="change-form__group">
                            <label for="docType">Тип документа</label>
                            <select name="" id="docType">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                        <div className="change-form__group">
                            <label for="docName">Название документа</label>
                            <input type="text" name="" id="docName" required></input>
                        </div>
                        <div className="change-form__group">
                            <label for="docNum">Номер документа</label>
                            <input type="text" name="" id="docNum" required></input>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="change-form__group">
                                    <label for="dateEx">Дата выхода документа</label>
                                    <input type="date" name="" id="dateEx" required></input>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="change-form__group">
                                    <label for="dateCh">Дата введения в действие</label>
                                    <input type="date" name="" id="dateCh" required></input>
                                </div>
                            </div>
                        </div>
                        <div className="change-form__group">
                            <label for="docKey">Ключевые слова</label>
                            <input type="text" name="" id="docKey" required></input>
                        </div>
                        <div className="change-form__file">
                            <input type="file" id="upPdf"></input>
                            <label for="upPdf"><span>Выберите файл</span></label>
                            <p>pdf</p>
                        </div>
                        <div className="change-form__buttons">
                            <button class="btn btn-trans-primary change-form__btn">Отменить</button><button class="btn btn-primary change-form__btn">Применить</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ChangeForm;