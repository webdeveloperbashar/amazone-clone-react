import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import homeSlider1 from "../../image/homeSlider1.jpg";
import homeSlider2 from "../../image/homeSlider2.jpg";
import homeSlider3 from "../../image/homeSlider3.jpg";
import homeSlider4 from "../../image/homeSlider4.jpg";
import homeSlider5 from "../../image/homeSlider5.jpg";
import classes from "./Shop.module.css";
import Slider from "./Slider";
import Data from "../../fakeData";
import Product from "./Product";
// import Header from "../Header/Header";

const Shop = () => {
  let item = Data.slice(0, 12);
  const [product, setProduct] = useState(item);

  const [cart, setCart] = useState([]);
  // let crt = cart.length;
  const handleProduct = (products) => {
    setCart([...cart, products]);
  };
  // <Header cartCount={crt} />;

  return (
    <section className={classes.homeWrapper}>
      <div id="slider">
        <Slider
          slider1={homeSlider1}
          slider2={homeSlider2}
          slider3={homeSlider3}
          slider4={homeSlider4}
          slider5={homeSlider5}
        />
      </div>
      <div className={classes.productItems}>
        <div className="container">
          <div id="items" style={{ marginTop: "-160px" }}>
            <div className="row">
              {product.map((item) => (
                <Product product={item} handleProduct={handleProduct} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={classes.shoppingCart}>
          <span className={classes.cartCount}>{cart.length}</span>
          <i className="fas fa-shopping-cart"></i>
        </div>
      </div>
    </section>
  );
};

export default Shop;
