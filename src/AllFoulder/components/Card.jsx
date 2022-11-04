import React from 'react'
import Product from './Product'
import Ofarmileniya from './Ofarmileniya/Ofarmileniya'
import { useNavigate } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import CarcItem from './CarcItem'
import { useDispatch, useSelector } from 'react-redux'

export default function Card() {

  const basket = useSelector((state) => state.cart.basket)

  const navigeta = useNavigate()
  const OnclickIOfarmileniya = (item) => {
    if (basket.length >= 1) {
      navigeta('/Ofarmileniya')

    }
    else if (basket.length == 0) {
      alert('sizning savatingiz bo`sh nimadur xarid qiling')
    }
  }
  let total = basket.reduce((p, c) => (p + (c.counter || 1) * c.prise), 0)



  return (
    <div className='cardBody'>
      <div className="main_card">
        <div className="card_counter_main">
          <CarcItem />
        </div>
        <div className="allPrice">
          <div className="all_price_main">
            <b>Общая цена: </b> <div className="priceAll"> <p>{total} </p><p>$</p></div>
          </div>
          <div className="tasdiqlash">
            <button onClick={OnclickIOfarmileniya}>Оформить заказ</button>
          </div>
        </div>
        <div className="product_item_card">
          <Product />
        </div>
      </div>
      <Routes>
        <Route path='/Ofarmileniya' element={<Ofarmileniya />} ></Route>
      </Routes>
    </div>
  )
}
