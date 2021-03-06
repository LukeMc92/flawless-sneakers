import React, { Component } from "react";
import ReactDOM from 'react-dom';

class ProductAddToCart extends Component {
  constructor() {
    super();
    this.state = {
      selectedSize: '',
      sizes: [4,
              4.5,
              5,
              5.5,
              6,
              6.5,
              7,
              7.5,
              8,
              8.5,
              9,
              9.5,
              10,
              10.5,
              11,
              11.5,
              12,
              12.5
            ]
    };
  }
  showAllSizes = () => {
    return this.state.sizes.map((size)=>{
      return <div key={size}
      className="option">{size}</div>
    })
  }

  render() {
    return (
      <div className="add-to-cart">
        <div className="detail-section">
          <div className="detail">
            <input type="checkbox"
            id="size-dropdown" className="toggle" />
            <label className="title size-title" htmlFor="size-dropdown">Size</label>
            <div className="content">
              <div className="size">
                {this.showAllSizes()}
              </div>
        </div>
        </div>
        </div>
        <div className="button-area">
          <div className="button">
            Add to Cart
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
    <ProductAddToCart/>
  document.getElementById("ProductAddToCartRoot")
);
