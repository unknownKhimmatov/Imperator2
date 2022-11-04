import React, { useState } from 'react'

export default function Kirish() {

  const [EmailValidState, setEmailValidState] = useState()
  const EmailVaid = new RegExp("^[^]+@[^]+\.[a-z]{3,3}$")
  const EmailValidChange = (n) => {
    if (EmailVaid.test(n.target.value)) {
      setEmailValidState('2px solid green')
    } else {
      setEmailValidState('2px solid red')
    }
  }

  return (
    <div className='kirish'>
      <div className="title">
        <h2>
          Вход
        </h2>
      </div>
      <div className="kirish_item">
        <div className="kirish_main">
          <div className="left_img_kirish">
            <img src="./images/contact/registratsiya.png" alt="" />
          </div>
        </div>
        <div className="rigth_kirish_inp">
          <input type="email" placeholder='E-mail' onChange={(n) => EmailValidChange(n)} style={{ border: EmailValidState }} />
          <div className="pass_kirish">
            <label htmlFor="pass_kirish">
              Пароль
            </label>
            <input type="password" id='pass_kirish' />
          </div>
          <div className="button_kirish">
            <button>
              Войтиа
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
