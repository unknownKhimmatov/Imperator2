import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCountPlus, removeItem } from './store/slice/card'
import { addCountMinus } from './store/slice/card'

export default function () {

    const basket = useSelector((state) => state.cart.basket)
    console.log({ basket });
    const dispatch = useDispatch()


    return (
        <>
            {(basket ?? []).map((e, index) => (<div className="product_card " key={index} >
                <div className="left_product_img">
                    <img src={e.img_url} alt="" />
                </div>
                <div className="center_product_desc">
                    <div className="top_product_desc">
                        <h3>{e.desc_main}</h3><i title='remove product' onClick={() => dispatch(removeItem(e.id))} class='bx bx-x remove_icone'></i>
                    </div>
                    <p id='subtitle_card' >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                        tellus purus, id pretium viverra rutrum. Et blandit nunc a pellentesque in cras facilisis sapien,
                        dictum. At vel egestas urna morbi tortor leo ut. In curabitur at pretium vulputate in.
                        Porta bibendum feugiat congue id rhoncus. Vel semper enim, eget.
                    </p>
                    <div className="bottom_product_desc">
                        <div className="size_and_price">
                            <div className="price_and_size">
                                <p className='price_bold'> <div className="price_card">{e.prise} {e.prise_type} </div></p> <p className='sizeAll'>Size: <span className='size_bold'>28</span></p>
                            </div>
                            <div className="size_dn">
                                <p>Size: 28</p>
                            </div>
                        </div>
                        <div className="size_and_counterBtn">
                            <div className="counter_product">
                                <div className="trash_btn">
                                    <i onClick={() => dispatch(removeItem(e.id))} id='trashIcone' class='bx bx-trash'></i>
                                </div>
                                <div className="btn_counter">
                                    <button title='minus' onClick={() => dispatch(addCountMinus(e))}>-</button>
                                    <p title='product length'> {e.counter || 1}  </p>
                                    <button title='pilus' onClick={() => dispatch(addCountPlus(e))}>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>))}

        </>
    )
}
