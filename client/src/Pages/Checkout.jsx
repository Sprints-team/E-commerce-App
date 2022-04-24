import { Container } from "@mantine/core";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Navbar from "../components/Header/Navbar";
import classes from "../styles/Cart/Cart.module.scss";
const Checkout = () => {
  let navigate = useNavigate();
  const products = useSelector((state) => state.cart.products);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Header>
        <Container size='xl'>
          <Navbar />
        </Container>
      </Header>
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
                      <img alt='' src={product.img} width={100} height={100} />
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
            <button onClick={() => navigate("/checkout")}>CHECKOUT NOW</button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
