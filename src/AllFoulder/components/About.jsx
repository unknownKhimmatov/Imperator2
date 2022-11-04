import React from 'react'
// react router id example
// RangeSilder

export default function About() {
  return (
    <div className='body'>
      <div className="container_main__about">

        {/* about home А */}
        <div className="title">
          <h2>О нас</h2>
        </div>
        <div className="main_about">
          <div className="width_about">
            <div className="left_about">
              <h2>«Потрясающий опыт, мне это нравится
                много. Спасибо команде.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Consequat leo, in sit tellus fermentum donec quisque diam
                molestie. Enim purus ullamcorper ultricies nisi. Eu sit laoreet
                egestas nascetur lacinia donec nunc viverra. Eu nullam cras eget
                egestas dui id platea magna. Massa lorem ultrices mauris tellus, mattis eu leo bibendum lobortis.
              </p>
            </div>
            <div className="rigth_about">
              <img src="./images/about.png" alt="" />
            </div>
          </div>
        </div>

        {/* our servises_about */}
        <div className="our_servises">
          <div className="servises_about">
            <div className="xizmatlar">
              <div className="title">
                <h2>Наши преимущества</h2>
              </div>
              <div className="item_all_about">
                <div className="bgc_about">
                  <div className="servises_item_about">
                    <i class='bx bxs-star' ></i>
                    <p>Лучший сервис</p>
                  </div>
                  <div className="servises_item_about">
                    <i class='bx bxs-car'></i>
                    <p>Экспресс доставка </p>
                  </div>
                  <div className="servises_item_about">
                    <i class='bx bx-like' ></i>
                    <p>Лучшее качество в стране</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* iphone 12 pro max page  */}
        <div className="downdland about_down">
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

        {/* map about page section  */}
        <div className="map_main">
          <div className="item_map">
            <div className="left_section_page">
              <img src="./images/map.png" alt="" />
            </div>
            <div className="right_page_map">
              <div className="right_item_map">
                <h2 className="title_map">
                  Работаем по всему миру.
                </h2>
                <div className="map_list">
                  <div className="top_map">
                    <div>
                      <h3>Bali</h3>
                      <p>508 Bridle Avenue Newnan, GA 30263</p>
                    </div>
                    <div>
                      <h3>London</h3>
                      <p>508 Bridle Avenue Newnan, GA 30263</p>
                    </div>
                  </div>
                  <div className="bottom_map">
                    <div>
                      <h3>Moscow</h3>
                      <p>508 Bridle Avenue Newnan, GA 30263</p>
                    </div>
                    <div>
                      <h3>Prague</h3>
                      <p>508 Bridle Avenue Newnan, GA 30263</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
