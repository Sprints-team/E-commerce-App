import { Container } from "@mantine/core";
import classes from "../../styles/ProductsList/ProductsList.module.scss";
import Product from "./ProductCard";
const ProductsList = ({ products }) => {
  return (
    <Container size='lg'>
      <ul className={classes.container}>
        {products.map((product) => (
          <Product product={product} key={product._id} />
        ))}
      </ul>
    </Container>
  );
};

export default ProductsList;
