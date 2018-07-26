import React, { Component } from 'react';
import hotel1 from "./hotel-1.jpg";
import hotel2 from "./hotel-2.jpg";
import hotel3 from "./hotel-3.jpg";

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
        </main>
      </div>
    );
  }
}

export default HotelView;