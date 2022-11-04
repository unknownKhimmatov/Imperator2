import React, { useState } from 'react'
import CardItem from '../CarcItem'
import AllShop from './AllShop'
import Oplata from './Oplata'
import { useNavigate, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
export default function Ofarmileniya() {



  let Obj = {
    isName: true,
    isAddres: true,
    isNumber: true,
  }

  const [AddresState, setAddresState] = useState()
  const AddresValidation = new RegExp("^[a-zA-Z]{1,}$")
  const Addresofarmileniya = (n) => {
    if (AddresValidation.test(n.target.value)) {
      setAddresState('2px solid green')
      Obj.isAddres = true
    }
    else {
      setAddresState('2px solid red')
      Obj.isAddres = false
    }
  }


  const [addres, setAddres] = useState()
  const NameValidation = new RegExp("^[a-zA-Z]{1,}$")
  const NameValidationChange = (n) => {
    if (NameValidation.test(n.target.value)) {
      setAddres('2px solid green')
      Obj.isAddres = true
    }
    else {
      setAddres("2px solid red")
      Obj.isAddres = false
    }
  }


  const [number, setNumber] = useState()
  const NumberValidation = new RegExp("^[0-9]{16,}$")
  const NumberChange = (n) => {
    if (NumberValidation.test(n.target.value)) {
      setNumber("2px solid green")
      Obj.isAddres = true
    }
    else {
      setNumber("2px solid red")
      Obj.isAddres = false
    }
  }

  const basket = useSelector((state) => state.cart.basket)

  const navigeta = useNavigate()
  const OnclickOplata = (item) => {
    if (basket.length >= 1) {
      if (Obj.isAddres && Obj.isName && Obj.isNumber) {
        navigeta('/Oplata')
      }
    } if (basket.length == 0) {
      alert("sizning savatingiz bo`sh nimadur xarid qiling")
    }
  }

  let total = basket.reduce((p, c) => (p + (c.counter || 1) * c.prise), 0)


  return (
    <div>
      <div className="ofarmileniya">
        <div className="main_ofarmileniya">
          <div className="title">
            <h2>
              Оформление заказа
            </h2>
          </div>
          <div className="contact_ofarmileniya">
            <div className="left_ofarmileniya">
              <div className="product_and_all_price">
                <div className="all_price_product">
                  <div className="top_all_price">
                    <p>Товаров: ({basket.length})</p><p>Сумма: $ {total} </p>
                  </div>
                  <div className="bottom_all_price">
                    <p>Общая сумма к оплате: </p><p>$ {total} </p>
                  </div>
                </div>
              </div>
              <div className="cards_type">
                <div className="card_name">
                  <div className="left_cards">
                    <input type="radio" name='chexbox' id='radio' /> <img src="./images/Afarmileniya/payme.png " alt="" />
                  </div>
                  <div className="left_cards">
                    <input type="radio" name='chexbox' /> <img src="./images/Afarmileniya/click.png " alt="" />
                  </div>
                </div>
                <div className="card_name">
                  <div className="left_cards">
                    <input type="radio" name='chexbox' id='radio' /> <img src="./images/Afarmileniya/uzkard.png " alt="" />
                  </div>
                  <div className="left_cards">
                    <input type="radio" name='chexbox' /> <img src="./images/Afarmileniya/nalechi.png " alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="right_ofarmileniya">
              <div className="inputs">
                <input type="text" placeholder='Адресс доставки' onChange={(n) => Addresofarmileniya(n)} style={{ border: AddresState }} />
                <input type="text" placeholder='Имя' onChange={(n) => NameValidationChange(n)} style={{ border: addres }} />
                <input type="text" placeholder='Номер телефона' onChange={(n) => NumberChange(n)} style={{ border: number }} />
              </div>
              <div className="button_crads">
                <button onClick={OnclickOplata}>Перейти к оплате</button>
              </div>
            </div>
          </div>
        </div>
        <div className="title">
          <h2>Ваш заказ</h2>
        </div>
        <div className="card_item_ofarmileniya">
          <CardItem />
        </div>
        <div className="all_shop_ofarmileniya">
          <AllShop />
        </div>
      </div>
      <Routes>
        <Route path='/Oplata' element={<Oplata />} > </Route>
      </Routes>
    </div>
  )
}
