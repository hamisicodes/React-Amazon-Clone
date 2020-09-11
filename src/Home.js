import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321"
            title="Instant Pot Lux 6-in-1 Electric Pressure Cooker, Sterilizer Slow Cooker, Rice Cooker, Steamer, Saute, and Warmer"
            price={40}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61IzKouqj1L._AC_SL1500_.jpg
            "
          />
          <Product
            title="Kenwood kMix standMixer for Baking,Stylish Kitchen mixer with K-Beater,Dough hook and Whisk,5 litre glass bowl"
            price={239.0}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="12321"
            title="Oculus Rift S PC-Powered VR Gaming Headset 
                    Oculus touch controllers: arm yourself with our updated Oculus touch controllers. Your slashes, throws and grab appear in VR with intuitive, realistic Precision, transporting your hands and gestures right into the game. 
                    "
            price={299.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71vFBR0SMRL._SX522_.jpg"
          />
          <Product
            id="12321"
            title="
                    Apple iPhone 11 Pro (64GB, Midnight Green) [Locked] + Carrier Subscription"
            price={879.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81mxun+6pEL.jpg"
          />
          <Product
            id="12321"
            title="RUNMUS Stereo Gaming Headset"
            price={70.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/81PtEw326aL._AC_SX679_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12321"
            title="Logitech G602 Lag-Free Wireless Gaming Mouse – 11 Programmable Buttons, Upto 2500 DPI 
                                  Upto 250 hours of battery life"
            price={199.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81ZQgWwuVzL._AC_SY741_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
