import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/61wzhjq9-0L._SX3000_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            title="Rich Dad Poor Dad - 20Th Anniversary Edition - Hindi"
            price={192}
            productImage="https://images-na.ssl-images-amazon.com/images/I/51IEoP4W-8L._SX324_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            title="Samsung Galaxy Tab A7 26.31 cm (10.4 inch)"
            price={18403}
            productImage="https://m.media-amazon.com/images/I/71iufehf0XL._AC_UY218_.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            title="OnePlus Nord 2 5G (Gray Sierra, 8GB RAM, 128GB Storage)"
            price={9999}
            productImage="https://m.media-amazon.com/images/I/71KVeQql77S._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            title="Infinix Note 10 Pro (Nordic Secret, 8GB RAM, 256GB Storage)"
            price={19999}
            productImage="https://m.media-amazon.com/images/I/61Wy3cJIbDL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            title="Moto E40 (Carbon Gray, 64 GB) (4 GB RAM)"
            price={10990}
            productImage="https://m.media-amazon.com/images/I/31KdgI1kErL._AC_UY218_.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            title="Samsung 34-inch (86.40cm) Curved Monitor- 21:9 Ultrawide QLED, Thunderbolt 3 Port- LC34J791WTWXXL, Gray"
            price={86150}
            productImage="https://m.media-amazon.com/images/I/91pi34PiUPL._AC_UY218_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
