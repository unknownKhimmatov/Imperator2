import { useState } from 'react'
import About from './components/About'
import Home from './components/Home'
import TopHEader from './components/TopHeader'
import Katigoriya from './components/Katigoriya'
import Kirish from './components/Kirish'
import Card from './components/Card'
import CardMini from './components/CardMini'
import Ofarmileniya from './components/Ofarmileniya/Ofarmileniya'
import { Route, Routes, Link } from 'react-router-dom'
import Oplata from './components/Ofarmileniya/Oplata'
import Zakaz from './components/Ofarmileniya/Zakaz'
import Contact from './components/Contact'
import Registratsiya from './components/Registratsiya'






import Profil from './components/Profil'
import { useSelector } from 'react-redux'

export default function MainApp() {


    const basket = useSelector((state) => state.cart.basket)

    const [classActive, toggleClass] = useState(false);
    const toggleButton = () => {
        toggleClass(!classActive);
    }
    return (
        <div className='header_router'>
            <TopHEader />
            <div className="header_main">
                <header>
                    <nav >
                        <div className="logo">
                            <div className="hamburger">
                                <i onClick={toggleButton} class="fa-solid fa-bars"></i>
                            </div>
                            <img className='res_logo' src="./images/logosite.png" alt="" />
                            <img className='brand' src="./images/brandlogo.png" alt="" />
                        </div>
                        <ul className={classActive ? "active" : ""}>
                            <li>
                                <Link to='/'>Главная</Link>
                            </li>
                            <li>
                                <Link to='/About'>О нас</Link>
                            </li>
                            <li>
                                <Link to='/katigory'>Категории</Link>
                            </li>
                            <li>
                                <Link to='/Filter'>Сотрудничество</Link>
                            </li>
                        </ul>
                        <div className="loginPage">
                            <li className='kirish' id='kirish'>
                                <Link to='/Kirish'>Войти</Link>
                            </li>
                            <li className='register' id='register'>
                                <Link to='/Registratsiya'>Зарегистрироваться</Link>
                            </li>
                            <Link to='/Card'>
                                <div className="korzinka_push">
                                    <i class="fa-solid fa-cart-shopping shop_card"></i> <div className="sms"> {basket.length} </div>
                                </div>
                            </Link>
                        </div>
                    </nav>
                </header>
            </div>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/About' element={<About />}></Route>
                <Route path='/katigory' element={<Katigoriya />}></Route>
                <Route path='/CardMini' element={<CardMini />}></Route>
                <Route path='/Ofarmileniya' element={<Ofarmileniya />}></Route>
                <Route path='/Kirish' element={<Kirish />}></Route>
                <Route path='/Card' element={<Card />}></Route>
                <Route path='/Oplata' element={<Oplata />}></Route>
                <Route path='/Zakaz' element={<Zakaz />} ></Route>
                {/* <Route path='/Woman' element={<Woman />}></Route> */}
                <Route path='/Contact' element={<Contact />} ></Route>
                <Route path='/Profil' element={<Profil />}  ></Route>
                <Route path='/Registratsiya' element={<Registratsiya />} ></Route>
                {/* filter section  */}
                
            </Routes>
            <div className="footer">
                <div className="footer_item">
                    <div className="left_footer">
                        <h2>PRO EMPIRIA</h2>
                        <p>High fidelity wireframes include more real content, specific typography choices, and information on image.</p>
                        <img className='logo_fotr' src="./images/logosite.png" alt="" />
                    </div>
                    <div className="middleone">
                        <h2>KONTAKT</h2>
                        <ul>
                            <li className='location'>
                                <i class="fa-solid fa-location-pin local"></i> Los Angeles,
                                359  Hidden Valley Road
                            </li>
                            <li className='raqam'>
                                +998 93 347 75 05
                            </li>
                            <li className='email-div'>
                                <i class="fa-solid fa-envelope email"></i> firdavs@gmail.com
                            </li>
                        </ul>
                        <h2>ISH VAQTI</h2>
                        <ul className='work-div'>
                            <li>
                                Po  budnuam 9:00 to 18:00
                            </li>
                            <li>
                                Yopilish vaqti 11:00 to 18:00
                            </li>
                        </ul>
                    </div>
                    <div className="middletwo">
                        <h2>MENYU</h2>
                        <ul className='eng_nav'>
                            <li>
                                <Link to='/'>Catalog</Link>
                            </li>
                            <li>
                                <Link to='/About'>Popular</Link>
                            </li>
                            <li>
                                <Link to='/katigory'>Pricing</Link>
                            </li>
                            <li>
                                <Link to='/ProductOne'>Features</Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link to='/'>Главная</Link>
                            </li>
                            <li>
                                <Link to='/About'>О нас</Link>
                            </li>
                            <li>
                                <Link to='/katigory'>Категории</Link>
                            </li>
                            <li>
                                <Link to='/ProductOne'>Сотрудничество</Link>
                            </li>
                        </ul>
                    </div>
                    <br /><br />
                    <div className="rigth_footer">
                        <h2>KATIGORIYA</h2>
                        <ul>
                            <li>Ayollar kiyimlari</li>
                            <li>Erkaklar kiyimlari</li>
                            <li>Bolalar kiyimlari</li>
                            <li>Oyoq kiyimlar </li>
                            <li>Sumkalar </li>
                            <li>Aksesuarlar</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
