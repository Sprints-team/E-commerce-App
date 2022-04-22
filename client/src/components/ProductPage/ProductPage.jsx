import { Container } from "@mantine/core";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import classes from "../../styles/ProductPage/ProductPage.module.scss";
import Header from "./../Header/Header";
import Navbar from "./../Header/Navbar";
import ColorSwitch from "./ColorSwitch";
import ProductImageSlider from "./ProductImageSlider";
import Reviews from "./Reviews";

//! DUMMY_DATA
const imageRef = [
  require("../../assets/images/img1.jpg"),
  require("../../assets/images/img2.jpg"),
  require("../../assets/images/img3.jpg"),
  require("../../assets/images/img4.jpg"),
];
const sizes = [
  { size: "M", qty: 2 },
  { size: "L", qty: 2 },
  { size: "XL", qty: 2 },
  { size: "XXL", qty: 2 },
];
const colors = ["#420572", "#A80808", "#000000", "#efefef"];
const reviews = [
  {
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, ipsa!",
    rating: 3.5,
    name: {
      first: "ahmed",
      last: "mamduh",
    },
  },
  {
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, ipsa!",
    rating: 4.5,
    name: {
      first: "khaled",
      last: "elkhoreby",
    },
  },
  {
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, ipsa!",
    rating: 4.5,
    name: {
      first: "mahamed",
      last: "samy",
    },
  },
  {
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, ipsa!",
    rating: 4.5,
    name: {
      first: "aymen",
      last: "mohamed",
    },
  },
];

const ProductPage = () => {
  const [size, setSize] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  console.log(size);
  return (
    <>
      <Header>
        <Container size='xl'>
          <Navbar />
        </Container>
      </Header>
      <Container size='xl'>
        <div className={classes.ProductContainer}>
          <div className={classes.image}>
            <ProductImageSlider images={imageRef} />
          </div>
          <div className={classes.details}>
            <h1>Adjustable Hooded Neck Wool Coat</h1>
            <div className={classes.rating}>
              <Rating
                initialValue={4.5}
                size={30}
                fillColor='red'
                allowHover
                transition
                allowHalfIcon
                readonly
              />
              {/* Total reviews */}
              <span>(15)</span>
            </div>

            <h3 className={classes.price}>$149.00</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi,
              corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Omnis, suscipit?
            </p>
            <h5>
              Category: <span>Casual Shirts</span>
            </h5>
            <select
              name='size'
              id='size'
              value={size}
              onChange={(e) => setSize(e.target.value)}>
              <option value='null' defaultChecked>
                Select Size
              </option>
              {sizes.map((size) => (
                <option key={size.size} value={size.size}>
                  {size.size}
                </option>
              ))}
            </select>
            <ColorSwitch colors={colors} />
            <button className={classes.button}>Add To Cart</button>
          </div>
        </div>
        <Container size='lg'>
          <h2>Customer Reviews</h2>
          <Reviews reviews={reviews} />
        </Container>
      </Container>
    </>
  );
};

export default ProductPage;
