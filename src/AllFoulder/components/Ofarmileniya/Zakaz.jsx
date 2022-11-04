import React from 'react'
import CarcItem from '../CarcItem'
export default function Zakaz() {




    return (
        <div className='zakaz'>
            <div className="title">
                <h2>
                    Оформление заказа
                </h2>
            </div>
            <div className="card_item_zakaz">
                <CarcItem />
            </div>

            <div className="bottom_zakaz">
                <div className="button_zakaz">
                    <button >Оформить заказ</button>
                </div>
                <div className="danger">
                    <div className="danger_item">
                        <p> Θ Для того что бы оформить заказ вы должны зарегестрироваться на нашем сайте.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
