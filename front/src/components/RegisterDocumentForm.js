import React, { useState } from 'react';
import '../styles/reset.css';
import '../styles/bootstrap-grid.min.css';
import '../styles/style.css';
import PDFViewer from '../assets/PDFViewer';
import createDocument from '../assets/createDocument';
const RegisterDocumentForm = () => {
    const defaultState = {
        type: '',
        name: '',
        number: '',
        release_date: '',
        start_date: '',
        tags: [
        ]
    }
    const [data, setData] = useState(defaultState)

    const [file, setFile] = useState(null)
    const [errorCreate, setErrorCreate] = useState(null)
    const createHandler = () => {
        setData({...data, tags : data.tags.split(',')})
        createDocument(data).then(e => e === 'Ok?' ? null : setErrorCreate(e))
    }

    const obj = ['test','super']
    return (
        <section className="section add">
            <div className="container">
                <div className="add-wrapper">
                    <form action="" className="add-form" onSubmit={e => e.preventDefault()}>
                        <h2 className="add-form__title">Добавление новых документов</h2>
                        <div className="add-form__group">
                            <label htmlFor="docType">Тип документа</label>
                            <select id="docType" value={data.type} onChange={e => {
                                setData({ ...data, type: e.target.options[e.target.selectedIndex].text })
                            }
                            }>
                                <option></option>
                                {obj.map((e, j) => { return <option key={j}>{e}</option> })}
                            </select>
                        </div>
                        <div className="add-form__group">
                            <label htmlFor="docName">Название документа</label>
                            <input type="text" name="" id="docName" required
                            onChange={e => setData({...data, name: e.target.value})}></input>
                        </div>
                        <div className="add-form__group">
                            <label htmlFor="docNum">Номер документа</label>
                            <input type="text" name="" id="docNum" required
                            onChange={e => setData({...data, number: e.target.value})}></input>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="add-form__group">
                                    <label htmlFor="dateEx">Дата выхода документа</label>
                                    <input type="date" name="" id="dateEx" required
                                    onChange={e => setData({...data, release_date: e.target.value})}></input>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="add-form__group">
                                    <label htmlFor="dateCh">Дата ввода  в действие</label>
                                    <input type="date" name="" id="dateCh" required
                                    onChange={e => setData({...data, start_date: e.target.value})}></input>
                                </div>
                            </div>
                        </div>
                        <div className="add-form__group">
                            <label htmlFor="docKey">Ключевые слова</label>
                            <input type="text" name="" id="docKey" required onChange={e => setData({...data, tags: e.target.value})}></input>
                        </div>
                        <div className="add-form__file">
                            <input type="file" id="upPdf" onChange={e => {
                                const url  = URL.createObjectURL(e.target.files[0])
                                setFile(url)
                            }}></input>
                            <label htmlFor="upPdf" ><span>Выберите файл</span></label>
                            <p>pdf</p>
                        </div>
                        <div className="add-form__buttons">
                            <button className="btn btn-trans-primary add-form__btn" onClick={()=>setData(...data, defaultState)}>Отменить</button>
                            <button className="btn btn-primary add-form__btn" onClick={createHandler}>Применить</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default RegisterDocumentForm;