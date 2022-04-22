import { Center } from "@mantine/core";
import { Loader } from "tabler-icons-react";
import { useGetProductsQuery } from "../../redux/productsSlice";
import classes from "../../styles/Sections/SectionItem.module.scss";
import ProductsList from "../Productslist/ProductsList";
const Cateogres = () => {
  const { data, error, isFetching } = useGetProductsQuery();
  return (
    <div className={classes.container}>
      <h1>Cateogres</h1>
      <h2>Our Top Cateogres</h2>
      {error && (
        <Center style={{ height: 200 }}>
          <div>We can fetch data !</div>
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

export default Cateogres;
