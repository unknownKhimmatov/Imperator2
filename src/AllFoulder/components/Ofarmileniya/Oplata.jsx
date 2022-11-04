import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Zakaz from './Zakaz'


export default function Oplata() {

    let Obj = {
        isCardName: false,
        isCardNumber: false,
        isCardData: false
    }

    const [CardNAme, setCardNAme] = useState()
    const NameCArdValidation = new RegExp("^[a-zA-Z]{1,}$")
    const NameCard = (n) => {
        if (NameCArdValidation.test(n.target.value)) {
            setCardNAme('2px solid green')
            Obj.isCardName = true
        }
        else {
            setCardNAme('2px solid red')
            Obj.isCardName = false
        }
    }

    const [CardNumber, setCardNumber] = useState()
    const NumberCArdValidation = new RegExp("^[0-9]{16,}$")
    const NumberCard = (n) => {
        if (NumberCArdValidation.test(n.target.value)) {
            setCardNumber('2px solid green')
            Obj.isCardNumber = true
        }
        else {
            setCardNumber('2px solid red')
            Obj.isCardNumber = false


        }
    }
    const [CardData, setCardData] = useState()
    const DataCArdValidation = new RegExp("^[0-9]{4,}$")
    const DataCard = (n) => {
        if (DataCArdValidation.test(n.target.value)) {
            setCardData('2px solid green')
            Obj.isCardData = true
        }
        else {
            setCardData('2px solid red')
            Obj.isCardData = false
        }
    }
    const navigeta = useNavigate()
    const OnclickZakaz = (item) => {
        navigeta('/Zakaz')
    }



    return (
        <div className='oplata'>
            <div className="title">
                <h2>
                    Оплата
                </h2>
            </div>
            <div className="item_oplata">
                <div className="letf_oplata">
                    <img src="./images/ofarmileniya/humo.png" alt="" />
                </div>
                <div className="right_ofarmileniya">
                    <div className="inputs">
                        <input type="text" onChange={(n) => NameCard(n)} style={{ border: CardNAme }} placeholder='Имя на карте' />
                        <input type="text" onChange={(n) => NumberCard(n)} style={{ border: CardNumber }} placeholder='Номер карты' />
                        <label htmlFor="txt">
                            Cрок хранения
                        </label>
                        <input type="text" id='txt' onChange={(n) => DataCard(n)} style={{ border: CardData }} placeholder='MM/YY' />
                    </div>
                    <div className="button_crads">
                        <button onClick={OnclickZakaz}>Оплатить</button>
                    </div>
                </div>
            </div>
            <Routes>
                <Route path='/Zakaz' element={<Zakaz />} ></Route>
            </Routes>
        </div>
    )
}
