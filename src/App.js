import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";
import Grid from '@mui/material/Grid';


/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const [totalPrice, setPrice] = useState(0);
  const [itemList, addItem] = useState([]);
  const [cartDict, addCart] = useState({});
  const add_to_cart_price = (item_price) => {setPrice(totalPrice + item_price)};
  const add_to_cart_item = (item_name) => {addItem(itemList.concat(item_name))}
  const add_to_cart = (item_name, item_price) => {
    add_to_cart_price(item_price);
    add_to_cart_item(item_name);
  };
  // const add_cart_dict = (item_ind) => {
  //   const prevCart = {...cartDict};
  //   const item_count = prevCart[item_ind] || 0;
  //   const new_item = {item_ind: item_count + 1};
  //   addCart(
  //     {
  //       ... prevCart,
  //       ... new_item
  //     }
  //   )
  // }

  return (
    <div className="App">
      <div className="main_content">
        <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

        <div className = "items">
          <Grid container spacing={4}>
            {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
              // <p>Bakery Item {index}</p> // replace with BakeryItem component
              <Grid item xs={6}>
                <BakeryItem name={item.name} desc={item.description} price={item.price} img={item.image} addToCart={add_to_cart}></BakeryItem>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>

      <div className = "cart">
        <h2>My Cart</h2>
        {/* TODO: render a list of items in the cart */}
        <p>Items: </p>
        {itemList.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
          <p>{item}</p>
        ))}
        <p>Total Price: ${totalPrice}</p>
      </div>
    </div>
  );
}

export default App;
