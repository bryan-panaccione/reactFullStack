import React, { Component } from "react";
// create rating cards 1-5 to pull from
class Dashcard extends Component {
  state = {};
  render() {
    return (
      <section>
        <aside className="card"> 
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/vyqgux63omn-2848%3A3122?alt=media&token=10b85431-755e-43f8-81b9-919acebc4e8e"
          alt="Not Found"
          className="productimage"
        />
        <div className="cardText">
        <div>
            <p className="txt-087">Reagan P</p>
          </div>
          <p className="txt-4106">
            Thrhhc hhgij vfgjhd chjjvfhjj gdghbgghbgj bbjjjgffgh bbhgh
          </p>
          <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/vyqgux63omn-2692%3A3314?alt=media&token=ca9d2a64-a827-4b99-bcd1-9369e09cf79f"
            alt="Not Found"
            className="rating"
          />
          </div>
          <div>
            <p className="txt-817">Add to cart</p>
          </div>
        </div>
        </aside>
      </section>
    );
  }
}

export default Dashcard;
