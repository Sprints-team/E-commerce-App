import { Center, Loader } from "@mantine/core";
import { useGetProductsQuery } from "../../redux/productsSlice";
import classes from "../../styles/Sections/SectionItem.module.scss";
import ProductsList from "../Productslist/ProductsList";
const NewArrival = () => {
  const { data, isFetching, error } = useGetProductsQuery();
  return (
    <div className={classes.container}>
      <h1>NewArrival</h1>
      <h2>Our Top NewArrival</h2>
      {error && (
        <Center style={{ height: 200 }}>
          <div>We can't fetch data!</div>
        </Center>
      )}
      {isFetching && (
        <Center style={{ height: 200 }}>
          <Loader
            color='red'
            size={50}
            variant='dots'
            style={{ marginTop: 30 }}
          />
        </Center>
      )}
      <ProductsList products={data} />
    </div>
  );
};

export default NewArrival;
