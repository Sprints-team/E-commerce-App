import { Container } from "@mantine/core";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import classes from "../styles/Cart/Cart.module.scss";

/* const cartItems = {
  src: "pizza.png",
  Name: "CORALZO",
  Extras: "Double ingredient spicy sauce",
  price: 20.0,
  quantity: 2,
  total: 40,
}; */
const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Container size='xl'>
      <div className={classes.container}>
        <div className={classes.table}>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Name</th>
                <th>Extra</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td className={classes.imgContainer}>
                    <img
                      alt=''
                      // loader={myLoader}
                      src={product.img}
                      width={100}
                      height={100}
                    />
                  </td>
                  <td className={classes.name}>{product?.title}</td>
                  <td className={classes.extra}>
                    {product?.extras.map((extra) => `${extra.text}, `)}
                  </td>
                  <td className={classes.price}>{product?.price}</td>
                  <td className={classes.quantity}>{product?.quantity}</td>
                  <td className={classes.total}>{product?.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={classes.cartTotal}>
          <h1>CART TOTAL</h1>
          <div>
            <p>
              <span>Subtotal</span>
              <span>$79.60</span>
            </p>
            <p>
              <span>Discount:</span>
              <span>$0.00</span>
            </p>
            <hr />
            <p>
              <span>Total:</span>
              <span>$79.60</span>
            </p>
          </div>
          <button>CHECKOUT NOW</button>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
