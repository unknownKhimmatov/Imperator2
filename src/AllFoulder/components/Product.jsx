import React from 'react'
import { BestProduct } from '../AllData'
import { useNavigate } from 'react-router-dom'
import CardMini from './CardMini'
import { Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCurrentPoduct } from './store/slice/currentProduct'
import { addToCard } from './store/slice/card'

export default function Product() {



    const navigeta = useNavigate()
    const dispatch = useDispatch()
    const OnclickItem = (item) => {
        dispatch(setCurrentPoduct(item))
        navigeta('/CardMini')
    }



    const AddtoKorzinka = (e) => {
        console.log(e);
        dispatch(addToCard(e))
    }

    return (
        <div>
            <div className="best_product">
                <div className="title res_title">
                    <h2>Лучшие товары</h2>
                    <h2>  </h2>
                </div>
                <div className="item_best__product">
                    {
                        BestProduct.map((e, index) => {
                            return (
                                <>
                                    <div className="item_best" key={index}>
                                        <div className="all_main_desc">
                                            <div onClick={() => OnclickItem(e)} className="card_item_main">
                                                <img src={e.img_url} alt="" className='img_best' />
                                                <h3 className="title_best">
                                                    {e.desc_main}
                                                </h3>
                                                <p className="subtitle_best">
                                                    {e.subtitle}
                                                </p>
                                                <div className="all_about_price">
                                                    <div className="point">
                                                        <div className="stars">
                                                            <i class='bx bxs-star' ></i>
                                                            <i class='bx bxs-star' ></i>
                                                            <i class='bx bxs-star' ></i>
                                                            <i class='bx bxs-star-half' ></i>
                                                            <i class='bx bx-star' ></i>
                                                        </div>
                                                        <div className="point">{e.pint}</div>
                                                    </div>
                                                    <div className="price">
                                                        {e.prise}
                                                        <span> {e.prise_type} </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card_button">
                                                <button className='best_button' id='dobavButton' onClick={() => AddtoKorzinka(e)}  >
                                                    Добавить в корзину
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>

            <Routes>
                <Route path='/CardMini' element={<CardMini />} ></Route>
            </Routes>

        </div>
    )
}
