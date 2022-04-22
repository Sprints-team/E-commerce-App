import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { serverHost } from "../../hooks/axios";
import classes from "../../styles/ProductsList/Product.module.scss";
const Product = ({ product }) => {
  const imageSrc = product?.images[0];

  return (
    <li className={classes.container}>
      <Link to={`/products/${product?._id}`}>
        <div className={classes.image}>
          <img
            src={`${imageSrc.replace(/public/, serverHost)}`}
            alt={product?.title}
          />
        </div>
      </Link>
      <div className={classes.details}>
        <p>{product.title}</p>
        <div>
          <div className={classes.price}>${product.price}</div>
          <div>
            <Rating
              initialValue={product.rate}
              size={25}
              fillColor='red'
              allowHover
              transition
              allowHalfIcon
              readonly
            />
          </div>
        </div>
      </div>
    </li>
  );
};

export default Product;
