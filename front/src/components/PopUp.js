import React, { useState } from 'react';
import  '../styles/reset.css';
import '../styles/bootstrap-grid.min.css';
import '../styles/style.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function PopUp() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Popup trigger=
                {<div className="search-label__filt" onClick={handleShow}>
                  <img src="img/Filter.png" alt="filter"></img>
                  <p>фильтр</p>
                </div>}modal nested>
                {close => (
                    <div class="modal">
                      <div class="modal-container">
                          <div class="modal-close" onClick={() => close()}><span></span></div>
                          <form action="" class="modal-form">
                              <h2 class="modal-title">Фильтр</h2>
                              <div class="modal-form__group">
                                  <label for="typeDoc">Тип документа</label>
                                  <select id="typeDoc">
                                      <option value=""></option>
                                      <option value="1">asd</option>
                                      <option value="2">fiv</option>
                                  </select>
                              </div>
                              <div class="modal-form__group">
                                  <label for="nameDoc">Название документа</label>
                                  <input type="text" id="nameDoc"></input>
                              </div>
                              <div class="modal-form__group">
                                  <label for="numDoc">Номер документа</label>
                                  <input type="text" id="numDoc"></input>
                              </div>
                              <div class="modal-form__row">
                                  <div class="row">
                                      <div class="col-12 col-md-6">
                                          <div class="modal-form__group">
                                              <label for="">Дата выхода документа</label>
                                              <input type="date"></input>
                                          </div>
                                      </div>
                                      <div class="col-12 col-md-6">
                                          <div class="modal-form__group">
                                              <label for="">Дата ввода действия</label>
                                              <input type="date"></input>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="modal-form__row">
                                  <div class="row">
                                      <div class="col-12 col-md-6">
                                          <div class="modal-form__check">
                                              <input type="checkbox" id="isKeyWord"></input>
                                              <label for="isKeyWord">Поиск по ключевым словам</label>
                                          </div>
                                      </div>
                                      <div class="col-12 col-md-6">
                                          <div class="modal-form__check">
                                              <input type="checkbox" id="isEnter"></input>
                                              <label for="isEnter">Поиск по внутренностям документа</label>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="modal-form__buttons">
                                  <button class="modal-form__btn btn btn-trans-primary">Отменить</button>
                                  <button class="modal-form__btn btn btn-primary">Применить</button>
                              </div>
                          </form>
                      </div>
                    </div>
                    )
                }
            </Popup>
    </>
  );
}

export default PopUp;
