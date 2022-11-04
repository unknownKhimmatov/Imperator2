import React from 'react'
import Profil from './Profil'
import { useNavigate } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
export default function Contact() {

  const navigate = useNavigate()
  const OnlickProfilPush = () => {
    navigate('/Profil')
  }

  return (
    <div className='bodyAddres'>
      <div className="item_contact">
        <div className="left_contact">
          <div className="title_contact">
            <h2>
              Здравствуйте,
              оставьте заявку для сотрудничества
            </h2>
          </div>
          <ul className="adddres_all">
            <li>
              <b>Phone</b>
              +1 848 493 944
            </li>
            <li>
              <b>Address</b>
              508 Bridle Avenue Newnan, GA 30263
            </li>
          </ul>
        </div>
        <div className="adres_input">
          <div className="addres_item_inout">
            <input type="text" placeholder='Имя' />
            <input type="text" placeholder='Номер телефона' />
            <input type="text" placeholder='Компания' />
            <textarea name="" id="" cols="30" rows="10" placeholder='Коротко о вашей компании'></textarea>
            <button onClick={OnlickProfilPush} className="adressButton">
              Отправить
            </button>
          </div>
        </div>
      </div>
      <Routes>
        <Route path='/Profil' element={<Profil />} ></Route>
      </Routes>
    </div>
  )
}
