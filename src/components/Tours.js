import React from 'react'
import Title from './Title'
const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title='featured' subTitle='items' />
      

      <div className="section-center featured-center">
        <article className="tour-card">
          <div className="tour-img-container">
            <img src="https://thumbs.dreamstime.com/b/sweet-dessert-catering-buffet-bakery-restaurant-coffee-shop-cafe-127677930.jpg" className="tour-img" alt="" />
            <p className="item-price"></p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4> Best Of Pestries</h4>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div className="tour-footer">
              
              <p>from 100</p>
            </div>
          </div>
        </article>

        <article className="tour-card">
          <div className="tour-img-container">
            <img src="https://assets.vogue.in/photos/62065c3a94526a483b55a1cf/master/w_1600%2Cc_limit/Red%2520Fruit%2520Tart%2520(Vegetarian)%2520-%2520Cou%2520Cou.jpg" className="tour-img" alt="" />
          
          </div>
          <div className="tour-info">
            <h4>Best of Pan Cakes</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div className="tour-footer">
              <p>from 140</p>
            </div>
          </div>
        </article>

        <article className="tour-card">
          <div className="tour-img-container">
            <img src="https://www.ktchnrebel.com/wp-content/uploads/2022/08/Various_coloured_ice_cream_shutterstock_1678666684.jpg" className="tour-img" alt="" />
            
          </div>
          <div className="tour-info">
            <h4>Explore Ice-Cream</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div className="tour-footer">
              <p>from 120</p>
            </div>
          </div>
        </article>

        <article className="tour-card">
          <div className="tour-img-container">
            <img src="https://cdn.britannica.com/38/230838-050-D0173E79/doughnuts-donuts.jpg" className="tour-img" alt="" />
            
          </div>
          <div className="tour-info">
            <h4>Best of Donuts</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div className="tour-footer">
              <p>from 330</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Tours
