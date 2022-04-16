import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import classes from "../../styles/ProductsList/Product.module.scss";
const Product = ({ product }) => {
  return (
    <li className={classes.container}>
      <Link to={`/products/1${product._id}`}>
        <div className={classes.image}>
          <img src={product.imageUrl} alt={product.title} />
        </div>
        <div className={classes.details}>
          <p>{product.desc}</p>
          <div>
            <div className={classes.price}>${product.price}</div>
            <div>
              <Rating
                initialValue={4.5}
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
      </Link>
    </li>
  );
};

export default Product;
