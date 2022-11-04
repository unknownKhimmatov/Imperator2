import React, { useState } from 'react'

export default function Profil() {


    const [data,setdata]=useState()


    return (
        <div className='profil'>
            <div className="item_profil">
                <div className="left_profil">
                    <img src alt="" />
                    <div className="labelFile">
                        <label htmlFor="imgs">Изменить</label>
                    </div>
                    <input id="imgs" className='uploderImg' type="file" accept="image/png, image/jpeg"   />
                </div>
                <div className="center_profil">
                    <label htmlFor="name">
                        Имя и фамилия:
                    </label>
                    <input type="text" id='name' placeholder='Александр Сергеевич' />
                    <label htmlFor="number" >
                        Номер телефона:
                    </label>
                    <input type="text" id='number' placeholder='+998 (93) 552-22-22' />
                    <label htmlFor="parol">
                        Пароль
                    </label>
                    <input type="password" className='password' id='parol' placeholder='Пароль' />
                    <a href="#" className='inpIzminit'>Изменить</a>
                </div>
                <div className="right_profil">
                    <label htmlFor="add">
                        Адрес
                    </label>
                    <input type="text" id='add' placeholder='Адрес' />
                </div>
            </div>
        </div>
    )
}
