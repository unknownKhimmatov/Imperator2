import React from 'react'
import { VscFile } from 'react-icons/vsc'
import { BsTruck } from 'react-icons/bs'
import { BiCheckShield } from 'react-icons/bi'
import { IoMedalOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Card from './Card'

export default function Tavar() {

    const product = useSelector((state) => state.currentProduct)

    const navigeta = useNavigate()
    const OnclickCArd = (item) => {
        navigeta('/Card')
    }





    return (
        <>
            <div className="main_page">
                <div className="left-page">
                    <div className="main_img">
                        <img src={product.img_url} alt="" />
                    </div>
                    <div className="child_imgs">
                        <img src={product.img_url} alt="" />
                        <img src={product.img_url} alt="" />
                        <img src={product.img_url} alt="" />
                        <img src={product.img_url} alt="" />
                    </div>
                </div>
                <div className="rigth_page">
                    <h2 className="title_page">
                        {product.desc_main}
                    </h2>
                    <div className="point">
                        <div className="stars">
                            <i class='bx bxs-star' ></i>
                            <i class='bx bxs-star' ></i>
                            <i class='bx bxs-star' ></i>
                            <i class='bx bxs-star-half' ></i>
                            <i class='bx bx-star' ></i>
                        </div>
                        <div className="point">3.55</div>
                    </div>
                    <div className="desc">
                        <p> {product.subtitle} </p>
                    </div>
                    <div className="price">
                        <h2>{product.prise} {product.prise_type} </h2>
                    </div>
                    <div className="size_all__main">
                        <p className="size">
                            Size
                        </p>
                        <div className="size_all">
                            <button >28</button>
                            <button>30</button>
                            <button>32</button>
                            <button>34</button>
                            <button>36</button>
                        </div>
                    </div>
                    <div className="korzinka_add">
                        <button className='dobav_kr' onClick={OnclickCArd}>Добавить в корзину</button><br />
                        <button >Быстрая покупка</button>
                    </div>
                    <div className="rigth_page_buttom">
                        <h2 className="bottom_title">
                            Быстрая покупка
                        </h2>
                        <div className="item_bottom">
                            <div className="one_servises">
                                <div className="one_ser_top">
                                    <i><BsTruck /></i><p>Delivery in 7 days</p>
                                </div>
                                <div className="one_ser_bottom">
                                    <i> <IoMedalOutline /> </i><p>Trusted seller</p>
                                </div>
                            </div>
                            <div className="two_servises_page">
                                <div className="two_ser_top">
                                    <i><BiCheckShield /></i><p>90-day Buyer Protection</p>
                                </div>
                                <div className="two_ser_bottom">
                                    <i> <VscFile /></i><p>Aviable to order</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Routes>
                    <Route path='/Card' element={<Card />}></Route>
                </Routes>
            </div>
        </>
    )
}
