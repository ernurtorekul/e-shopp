import React from "react";
import vision from "../img/vision.png";


function Home() {
  return (
    <div className="">
      <div className="banner w-full bg-sky-700 flex text-white flex justify-between items-center">
        <div className="p-16 flex-col justify-center items-center">
          <p className="mb-2">Новые</p>
          <h2 className="mb-3 text-4xl font-bold">Apple Vision Pro</h2>
          <button class="custom_button">Подробнее</button>
        </div>
        <div className="banner_img">
          <img className="md:w-3/4" src={vision} alt="" />
        </div>
      </div>
      <div className="flex-col w-full mt-10 items-center text-center justify-center">
        <h1 className="text-2xl font-bold">Новые Товары</h1>
        <p className="text-md text-sky-600">Посмотреть все </p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 gap-5 ozdorov_products p-10">
        <div class="mb-10 md:mb-10 sm:mb-10 xs:flex xs:justify-center m-auto">
          <div class="products_block md:w-full sm:w-full w-3/4">
            <div class="products_block_img_bg">
              <div class="products_img">
                <img src="#" alt="" />
              </div>
            </div>
            <div class="products_block_content">
              <p class="mb-2 description">
                Iphone 14 pro max - Black 128 GB LLA Black mambo, IPS display
              </p>
              <div class="products_price mb-1.5">
                <p class="font-bold text-2xl text-black mr-2 price_discount">
                  от 450 000 тг
                </p>
              </div>
              <p class="price mb-1.5">Рейтинг: 4.3</p>
              <button class="custom_button" onclick="ScrollToTarget()">
                Добавить в корзину
              </button>
            </div>
          </div>
        </div>
        <div class="mb-10 md:mb-10 sm:mb-10 xs:flex xs:justify-center m-auto">
          <div class="products_block md:w-full sm:w-full w-3/4">
          <div class="products_block_img_bg">
              <div class="products_img">
                <img src="#" alt="" />
              </div>
            </div>
            <div class="products_block_content">
              <p class="mb-2 description">
                Iphone 14 pro max - Black 128 GB LLA Black mambo, IPS display
              </p>
              <div class="products_price mb-1.5">
                <p class="font-bold text-2xl text-black mr-2 price_discount">
                  от 450 000 тг
                </p>
              </div>
              <p class="price mb-1.5">Рейтинг: 4.3</p>
              <button class="custom_button" onclick="ScrollToTarget()">
                Добавить в корзину
              </button>
            </div>
          </div>
        </div>
        <div class="mb-10 md:mb-10 sm:mb-10 xs:flex xs:justify-center m-auto">
          <div class="products_block  md:w-full sm:w-full w-3/4">
          <div class="products_block_img_bg">
              <div class="products_img">
                <img src="#" alt="" />
              </div>
            </div>
            <div class="products_block_content">
              <p class="mb-2 description">
                Iphone 14 pro max - Black 128 GB LLA Black mambo, IPS display
              </p>
              <div class="products_price mb-1.5">
                <p class="font-bold text-2xl text-black mr-2 price_discount">
                  от 450 000 тг
                </p>
              </div>
              <p class="price mb-1.5">Рейтинг: 4.3</p>
              <button class="custom_button" onclick="ScrollToTarget()">
                Добавить в корзину
              </button>
            </div>
          </div>
        </div>
        <div class="mb-10 md:mb-10 sm:mb-10 xs:flex xs:justify-center m-auto">
          <div class="products_block  md:w-full sm:w-full w-3/4">
          <div class="products_block_img_bg">
              <div class="products_img">
                <img src="#" alt="" />
              </div>
            </div>
            <div class="products_block_content">
              <p class="mb-2 description">
                Iphone 14 pro max - Black 128 GB LLA Black mambo, IPS display
              </p>
              <div class="products_price mb-1.5">
                <p class="font-bold text-2xl text-black mr-2 price_discount">
                  от 450 000 тг
                </p>
              </div>
              <p class="price mb-1.5">Рейтинг: 4.3</p>
              <button class="custom_button" onclick="ScrollToTarget()">
                Добавить в корзину
              </button>
            </div>
          </div>
        </div>
        <div class="mb-20 md:mb-20 sm:mb-20 xs:flex xs:justify-center m-auto">
          <div class="products_block  md:w-full sm:w-full w-3/4">
          <div class="products_block_img_bg">
              <div class="products_img">
                <img src="#" alt="" />
              </div>
            </div>
            <div class="products_block_content">
              <p class="mb-2 description">
                Iphone 14 pro max - Black 128 GB LLA Black mambo, IPS display
              </p>
              <div class="products_price mb-1.5">
                <p class="font-bold text-2xl text-black mr-2 price_discount">
                  от 450 000 тг
                </p>
              </div>
              <p class="price mb-1.5">Рейтинг: 4.3</p>
              <button class="custom_button" onclick="ScrollToTarget()">
                Добавить в корзину
              </button>
            </div>
          </div>
        </div>
        <div class="mb-20 md:mb-20 sm:mb-20 xs:flex xs:justify-center m-auto">
          <div class="products_block  md:w-full sm:w-full w-3/4">
          <div class="products_block_img_bg">
              <div class="products_img">
                <img src="#" alt="" />
              </div>
            </div>
            <div class="products_block_content">
              <p class="mb-2 description">
                Iphone 14 pro max - Black 128 GB LLA Black mambo, IPS display
              </p>
              <div class="products_price mb-1.5">
                <p class="font-bold text-2xl text-black mr-2 price_discount">
                  от 450 000 тг
                </p>
              </div>
              <p class="price mb-1.5">Рейтинг: 4.3</p>
              <button class="custom_button" onclick="ScrollToTarget()">
                Добавить в корзину
              </button>
            </div>
          </div>
        </div>
        <div class="mb-20 md:mb-20 sm:mb-20 xs:flex xs:justify-center m-auto">
          <div class="products_block  md:w-full sm:w-full w-3/4">
          <div class="products_block_img_bg">
              <div class="products_img">
                <img src="#" alt="" />
              </div>
            </div>
            <div class="products_block_content">
              <p class="mb-2 description">
                Iphone 14 pro max - Black 128 GB LLA Black mambo, IPS display
              </p>
              <div class="products_price mb-1.5">
                <p class="font-bold text-2xl text-black mr-2 price_discount">
                  от 450 000 тг
                </p>
              </div>
              <p class="price mb-1.5">Рейтинг: 4.3</p>
              <button class="custom_button" onclick="ScrollToTarget()">
                Добавить в корзину
              </button>
            </div>
          </div>
        </div>
        <div class="mb-20 md:mb-20 sm:mb-20 xs:flex xs:justify-center m-auto">
          <div class="products_block  md:w-full sm:w-full w-3/4">
          <div class="products_block_img_bg">
              <div class="products_img">
                <img src="#" alt="" />
              </div>
            </div>
            <div class="products_block_content">
              <p class="mb-2 description">
                Iphone 14 pro max - Black 128 GB LLA Black mambo, IPS display
              </p>
              <div class="products_price mb-1.5">
                <p class="font-bold text-2xl text-black mr-2 price_discount">
                  от 450 000 тг
                </p>
              </div>
              <p class="price mb-1.5">Рейтинг: 4.3</p>
              <button class="custom_button" onclick="ScrollToTarget()">
                Добавить в корзину
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
