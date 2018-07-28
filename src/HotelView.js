import React, { Component } from 'react';
import hotel1 from "./hotel-1.jpg";
import hotel2 from "./hotel-2.jpg";
import hotel3 from "./hotel-3.jpg";
import IconStar from "./IconStar";
import IconLocation from "./IconLocation";

class HotelView extends Component {
  render() {
    return (
      <div className="hotel-view">
        <main>
          <div className="gallery">
            <figure className="gallery__item">
              <img className="gallery__photo" src = {hotel1}/>
            </figure>
            <figure className="gallery__item">
              <img className="gallery__photo" src = {hotel2}/>
            </figure>
            <figure className="gallery__item">
              <img className="gallery__photo" src = {hotel3}/>
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
        </main>
      </div>
    );
  }
}

export default HotelView;