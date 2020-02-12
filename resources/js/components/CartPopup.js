import React, { Component } from "react";
import { connect } from "react-redux";
import { closingCart } from "../actions/allActions";
class CartPopup extends Component {
  constructor() {
    super();
    this.state = {
      name: "Joe"
    };
  }
  componentDidUpdate() {
    if (this.props.globalState.popupCartOpen == true) {
      console.log(this.props.globalState.popupCartOpen);
      const cartPopupElement = document.getElementById("cart-popup");
      document.addEventListener("click", event => {
        var clickedInside = cartPopupElement.contains(event.target);
        if (clickedInside) {
          console.log("you clicked inside");
        } else {
          this.props.closingCart();
          console.log("you clicked outside");
        }
      });
    }
  }
  render() {
    return (
      <section
        id="cart-popup"
        className={this.props.globalState.popupCartOpen == true ? "active" : ""}
      >
        <div className="cart-title">
          <div className="title">My Cart</div>
        </div>
        <div className=" cart-items">
          <div className="item-container">
            <div className="item">
              <img
                src="https://www.stadiumgoods.com/cdn-cgi/image/fit%3Dcontain%2Cformat%3Dauto%2Cwidth%3D720/media/catalog/product/f/u/fu9161_1_1_1.png"
                alt=""
              />
              <div className="delete-btn">
                <div className="circle">X</div>
              </div>
            </div>
          </div>
          <div className="item-container">
            <div className="item">
              <img
                src="https://www.stadiumgoods.com/cdn-cgi/image/fit%3Dcontain%2Cformat%3Dauto%2Cwidth%3D720/media/catalog/product/f/u/fu9161_1_1_1.png"
                alt=""
              />
              <div className="delete-btn">
                <div className="circle">X</div>
              </div>
            </div>
          </div>
          <div className="item-container">
            <div className="item">
              <img
                src="https://www.stadiumgoods.com/cdn-cgi/image/fit%3Dcontain%2Cformat%3Dauto%2Cwidth%3D720/media/catalog/product/f/u/fu9161_1_1_1.png"
                alt=""
              />
              <div className="delete-btn">
                <div className="circle">X</div>
              </div>
            </div>
          </div>
          <div className="item-container">
            <div className="item">
              <img
                src="https://www.stadiumgoods.com/cdn-cgi/image/fit%3Dcontain%2Cformat%3Dauto%2Cwidth%3D720/media/catalog/product/f/u/fu9161_1_1_1.png"
                alt=""
              />
              <div className="delete-btn">
                <div className="circle">X</div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-total">
          <div className="inside-container">
            <div className="title">Total</div>
            <div className="number">x4</div>
          </div>
        </div>
        <div className="price-total">
          <div className="inside-container">
            <div className="title">Total</div>
            <div className="number">$3,000</div>
          </div>
        </div>
        <div className="checkout">
          <div className="title">checkout</div>
          <span className="ti-shopping-cart"></span>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, {
  closingCart
})(CartPopup);
