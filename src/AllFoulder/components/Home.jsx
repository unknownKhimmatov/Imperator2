import React from 'react'
import Product from './Product'

export default function Home() {
  return (
    <div>

      {/* <Woman /> */}

      <div className="container">
        <div className="home">
          <div className="container_home">

            {/* home */}

            <div className="all_product__home">
              <div className="item_all__product">
                <h2 className='desc_main'>
                  Быстрый и удобный шоппинг, не выходя из дома.
                </h2>
                <p className='desc'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis lectus odio vitae, duis nec ut velit, fermentum. Diam sollicitudin arcu euismod morbi. Adipiscing bibendum elementum, fermentum amet quis erat.
                </p>
                <div className="all_product__button">
                  <i class='bx bxs-right-arrow'></i><p>Все товары</p>
                </div>
              </div>
              <div className="img_home">
                <img src="./images/home.png" alt="" />
              </div>
            </div>

            {/* servises */}

            <div className="xizmatlar">
              <div className="title ser_title">
                <h2>Наши преимущества</h2>
              </div>
              <div className="item_all">
                <div className=" ser_item__parent" id='ser_parent'>
                  <div className="servises_item">
                    <i class='bx bxs-star' ></i>
                    <p>Лучший сервис</p>
                  </div>
                  <div className="servises_item" id='ser_it'>
                    <i class='bx bxs-car'></i>
                    <p>Экспресс доставка </p>
                  </div>
                  <div className="servises_item">
                    <i class='bx bx-like' ></i>
                    <p>Лучшее качество в стране</p>
                  </div>
                </div>
              </div>
            </div>

            {/*the best product*/}
            <Product />

            {/* Категории */}

            <div className="shoesPage">
              <h1 className="title">
                Категории
              </h1>
              <div className="image_shoes">
                <div className="item_shoes">
                  <img src="./images/shoes1.png" alt="" />
                  <h1 className='obuv'>Женская обувь</h1>
                </div>
                <div className="item_shoes">
                  <img src="./images/shoes2.png" alt="" />
                </div>
                <div className="item_shoes">
                  <img src="./images/shoes3.png" alt="" />
                </div>
                <div className="item_shoes">
                  <img src="./images/shoes4.png" alt="" />
                </div>
              </div>
            </div>

            {/* downdland */}

            <div className="downdland">
              <div className="down_item">
                <div className="left_down">
                  <img src='./images/12promax.png' alt="" />
                </div>
                <div className="rigth_dow">
                  <h3>Скачай приложение и получай призы каждый день</h3>
                  <p>Скачав наш приложение вы получаете возможность играть в призовые игры каждый день и выигровать разного рода подарки для себя.
                    В нашем приложении призовые игры проходят аблолютно каждый день и всё это совершенно бесплатно.
                  </p>
                  <div className="down_link">
                    <img src="./images/apple.png" alt="" />
                    <img src="./images/android.png" alt="" />
                  </div>
                </div>
              </div>
            </div>

            {/* new product  */}

            <Product />


            {/* all model */}
            <div className="all_model">
              <div className="left_model">
                <img src="./images/allshoes.png" alt="" />
              </div>
              <div className="rigth_model">
                <h1>Создай свой лук на все случаи жизни в “Imperia”</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam sollicitudin a cursus in. Vel sit donec semper magna dignissim. Amet, mi justo at metus vestibulum sollicitudin lacus. Nunc vel egestas fermentum pellentesque sed vitae vel.</p>
                <button>начать покупки</button>
              </div>
            </div>
            {/* konkurs  */}
            <div className="konkurs">
              <div className="item_kon">
                <h1>Скидка <span>30% </span>на первую покупку обслютно для всех</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

