import React, { Component } from 'react';
import hotel1 from "./hotel-1.jpg";
import hotel2 from "./hotel-2.jpg";
import hotel3 from "./hotel-3.jpg";
import IconStar from "./IconStar";
import IconLocation from "./IconLocation";
import user1 from "./user-1.jpg";
import user2 from "./user-2.jpg";
import user3 from "./user-3.jpg";
import user4 from "./user-4.jpg";
import user5 from "./user-5.jpg";
import user6 from "./user-6.jpg";

class HotelView extends Component {
  render() {
    return (
      <div className="hotel-view">
        <main>
          <div className="gallery">
            <figure className="gallery__item">
              <img className="gallery__photo" src = {hotel1} alt="hotel1"/>
            </figure>
            <figure className="gallery__item">
              <img className="gallery__photo" src = {hotel2} alt="hotel2"/>
            </figure>
            <figure className="gallery__item">
              <img className="gallery__photo" src = {hotel3} alt="hotel3"/>
            </figure>
          </div>

          <div className="overview">
            <h1 className="overview__heading">
              Hotel Las Palmas
            </h1>
            
            <div className="overview__stars">
              <IconStar width="1.75rem" height="1.75rem" fill="#eb2f64"/>
              <IconStar width="1.75rem" height="1.75rem" fill="#eb2f64"/>
              <IconStar width="1.75rem" height="1.75rem" fill="#eb2f64"/>
              <IconStar width="1.75rem" height="1.75rem" fill="#eb2f64"/>
              <IconStar width="1.75rem" height="1.75rem" fill="#eb2f64"/>
            </div>

            <div className="overview__location">
              <IconLocation width="1.75rem" height="1.75rem" fill="#eb2f64"/>
              <button className="btn-inline">Albufeira, Portugal</button>
            </div>

            <div className="overview__rating">
              <div className="overview__rating-average">
                8.6
              </div>
              <div className="overview__rating-count">
                429 votes
              </div>
            </div>
          </div>


          <div className="detail">
            <div className="description">
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipiscing elit lobortis vestibulum porttitor luctus, penatibus natoque non litora sociis nam nisl eros curae rhoncus. Vitae vehicula ligula laoreet aliquam pulvinar sociosqu justo, inceptos metus gravida nisl himenaeos aenean massa,
              </p>
              <p className="paragraph">
                Aptent tellus quisque orci hac rhoncus, augue tincidunt purus enim viverra conubia. Ad placerat mauris elementum senectus scelerisque rhoncus dictum, facilisi pretium praesent porttitor congue eleifend fusce, nam blandit eget tincidunt nibh sagittis.
              </p>
              <ul className="list">
                <li className="list__item">Close to the Beach</li>
                <li className="list__item">Breakfast Included</li>
                <li className="list__item">Pre airport shuttle</li>
                <li className="list__item">Free Wifi in all rooms</li>
                <li className="list__item">Air conditioning and heating</li>
                <li className="list__item">Pets allowed</li>
                <li className="list__item">We speak all languages</li>
                <li className="list__item">Perfect of families</li>
              </ul>
              
              <div className="recommend">
                <p className="recommend__count">
                  Lucy and 3 other friends recommend this hotel.
                </p>
                <div className="recommend__friends">
                  <img src={user3} alt="user 1" className="recommend__photo"/>
                  <img src={user4} alt="user 2" className="recommend__photo"/>
                  <img src={user5} alt="user 3" className="recommend__photo"/>
                  <img src={user6} alt="user 4" className="recommend__photo"/>
                </div>
              </div>
            </div>

            <div className="user-reviews">

              <figure className="review">
                <blockquote className="review__text">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit lobortis vestibulum 
                  porttitor luctus, penatibus natoque non litora sociis nam nisl eros curae.
                </blockquote>
                <figcaption className="review__user">
                  <img src = {user1} alt = "user 1" className="review__photo"/>
                  <div className="review__user-box">
                    <p className="review__user-name"> Nick Smith</p>
                    <p className="review__user-date"> Feb 23rd, 2017</p>
                  </div>
                  <div className="review__rating"> 7.8 </div>
                </figcaption>
              </figure>


              <figure className="review">
                <blockquote className="review__text">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit lobortis vestibulum 
                  porttitor luctus, penatibus natoque non litora sociis nam nisl eros curae.
                </blockquote>
                <figcaption className="review__user">
                  <img src = {user2} alt = "user 2" className="review__photo"/>
                  <div className="review__user-box">
                    <p className="review__user-name"> Mary Thomas</p>
                    <p className="review__user-date"> Sep 13th, 2017</p>
                  </div>
                  <div className="review__rating"> 9.3 </div>
                </figcaption>
              </figure>

              <button className="btn-inline">
                Show all <span>&rarr;</span>
              </button>

            </div>
          </div>

          <div className="cta">
              <h2 className="cta__book-now">
                Good News! We have 4 free rooms for your selected dates!
              </h2>

              <button className="btn">
               <span className="btn__visible"> Book now </span>
               <span className="btn__invisible"> Only 4 rooms left </span>
               </button>
          </div>

        </main>
      </div>
    );
  }
}

export default HotelView;