// TODO: create a component that displays a single bakery item
import * as React from 'react';
import Button from '@mui/material/Button';
import Item from '@mui/material/Grid';

function BakeryItem(props) {
    return (
        <Item>
            <div className="BakeryItem">
                <div className="item_pic">
                    <img src = {props.img}/>
                </div>
                <div className="item_description">
                    <div className="header">
                        <div className="name">
                            <p>{props.name}</p>
                        </div>
                        <div className="desc">
                            <p>{props.desc}</p>
                        </div>
                    </div>
                    <div className = "footer">
                        <div className="price">
                            <p>${props.price}</p>
                        </div>

                        <div className="add_to_cart_button">
                            <Button variant="outlined" onClick={() => props.addToCart(props.name, props.price)}>Add to Cart</Button>
                            {/* <button variant="outlined" onClick={props.addToCart()}>Add to Cart</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </Item>
    );
}

export default BakeryItem;
