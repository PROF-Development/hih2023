import React, { useState } from 'react';
import  '../styles/reset.css';
import '../styles/bootstrap-grid.min.css';
import '../styles/style.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const PopUp = () => {
    const initialState = {
        type: '',
        name: '',
        number: '',
        release_date: '',
        effective_date: '',
    }
    const [searchForm, setSearchForm]  = useState(initialState)
    const obj = ['ГОСТ','Указ президента']
  return (
      <Popup trigger=
                {<div className="search-label__filt" onClick={open}>
                  <img src="../../img/Filter.png" alt="filter"></img>
                  <p>фильтр</p>
                </div>}modal nested>
                {close => (
                    <div className="modal">
                      <div className="modal-container">
                          <div className="modal-close" onClick={close}><span></span></div>
                          <form action="" className="modal-form" onSubmit={e => e.preventDefault()}>
                              <h2 className="modal-title">Фильтр</h2>
                              <div className="modal-form__group">
                                  <label htmlFor="typeDoc">Тип документа</label>
                                  <select id="typeDoc" value={searchForm.type} onChange={e => {
                                    setSearchForm({...searchForm, type: e.target.options[e.target.selectedIndex].text})}
                                    }>
                                        <option></option>
                                        {obj.map((e,j) => {return <option key={j}>{e}</option>})}
                                  </select>
                              </div>
                              <div className="modal-form__group">
                                  <label htmlFor="nameDoc">Название документа</label>
                                  <input type="text" id="nameDoc" value={searchForm.name} onChange={e => 
                                    setSearchForm({...searchForm, name: e.target.value})
                                  }></input>
                              </div>
                              <div className="modal-form__group">
                                  <label htmlFor="numDoc" >Номер документа</label>
                                  <input type="text" id="numDoc" value={searchForm.number} onChange={e => 
                                    setSearchForm({...searchForm, number: e.target.value})
                                  }></input>

                              </div>
                              <div className="modal-form__row">
                                  <div className="row">
                                      <div className="col-12 col-md-6">
                                          <div className="modal-form__group">
                                              <label htmlFor="" >Дата выхода документа</label>
                                              <input type="date" value={searchForm.release_date} onChange={e => 
                                                setSearchForm({...searchForm, release_date: e.target.value})
                                              }></input>
                                          </div>
                                      </div>
                                      <div className="col-12 col-md-6">
                                          <div className="modal-form__group">
                                              <label htmlFor="">Дата ввода действия</label>
                                              <input type="date" value={searchForm.effective_date} onChange={e => 
                                                setSearchForm({...searchForm, effective_date: e.target.value})
                                              }></input>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="modal-form__row">
                                  <div className="row">
                                      <div className="col-12 col-md-6">
                                          <div className="modal-form__check">
                                              <input type="checkbox" id="isKeyWord"></input>
                                              <label htmlFor="isKeyWord">Поиск по ключевым словам</label>
                                          </div>
                                      </div>
                                      <div className="col-12 col-md-6">
                                          <div className="modal-form__check">
                                              <input type="checkbox" id="isEnter"></input>
                                              <label htmlFor="isEnter">Поиск по внутренностям документа</label>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="modal-form__buttons">
                                  <button className="modal-form__btn btn btn-trans-primary"
                                  onClick={() => setSearchForm(initialState)}>Сбросить</button>
                                  <button className="modal-form__btn btn btn-primary">Применить</button>
                              </div>
                          </form>
                      </div>
                    </div>
                    )
                }
            </Popup>
  );
}

export default PopUp;