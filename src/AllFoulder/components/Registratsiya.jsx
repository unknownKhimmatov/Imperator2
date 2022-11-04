import React, { useState } from 'react'
import { useNavigate, Route, Routes } from 'react-router-dom'
import Contact from './Contact'
export default function Registratsiya() {


    const [CardNAme, setCardNAme] = useState()
    const NameCArdValidation = new RegExp("^[a-zA-Z]{1,}$")
    const NameCard = (n) => {
        if (NameCArdValidation.test(n.target.value)) {
            setCardNAme('2px solid green')

        }
        else {
            setCardNAme('2px solid red')

        }
    }


    const [PhoneNumber, setPhoneNumber] = useState();
    const validatePhoneNumberRegex = /^\+?[9-9][9-9][8-8][0-9]{9,9}$/;
    const PhoneNumberChange = (n) => {
        if (validatePhoneNumberRegex.test(n.target.value)) {
            setPhoneNumber('2px solid green')
        }
        else {
            setPhoneNumber('2px solid red')
        }
    }


    const [addres, setAddres] = useState();
    const AddresValidRegExp = new RegExp('^[a-zA-Z]{1,}$')
    const AddresVAlidChange = (n) => {
        if (AddresValidRegExp.test(n.target.value)) {
            setAddres('2px solid green')
        }
    }
    const [EmailValidState, setEmailValidState] = useState()
    const EmailVaid = new RegExp("^[^]+@[^]+\.[a-z]{3,3}$")
    const EmailValidChange = (n) => {
        if (EmailVaid.test(n.target.value)) {
            setEmailValidState('2px solid green')
        } else {
            setEmailValidState('2px solid red')
        }
    }


    const navigate = useNavigate()
    const PushClickContact = () => {
        navigate("/Contact")
    }


    return (
        <>
            <div className="title_reg">
                <h2>
                    Регистрация
                </h2>
            </div>
            <div className='registratsiya'>
                <div className="item_register">
                    <div className="left_register_img">
                        <img src="./images/contact/registratsiya.png" alt="" />
                    </div>
                </div>
                <div className="right_item_register">
                    <div className="inp_register">
                        <input type="text" placeholder='Имя' onChange={(n) => NameCard(n)} style={{ border: CardNAme }} />
                        <input type="number" placeholder='Номер телефона' onChange={(n) => PhoneNumberChange(n)} style={{ border: PhoneNumber }} />
                        <input type="text" placeholder='Адрес' onChange={(n) => AddresVAlidChange(n)} style={{ border: addres }} />
                        <input type="text" placeholder='E-mail' onChange={(n) => EmailValidChange(n)} style={{ border: EmailValidState }} />
                        <div className="pass_reg">
                            <label htmlFor="pass">
                                Пароль
                            </label>
                            <input type="password" id='pass' placeholder='Пароль' />
                        </div>
                        <div className="button_reg">
                            <button onClick={PushClickContact}>
                                Войти
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Routes>
                <Route path='/Contact' element={<Contact />}></Route>
            </Routes>

        </>
    )
}
