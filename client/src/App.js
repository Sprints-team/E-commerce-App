import { Container, MantineProvider } from "@mantine/core";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Header/Navbar";
import ProductPage from "./components/ProductPage/ProductPage";
import ProductsList from "./components/Productslist/ProductsList";
import products from "./data.json";
import Home from "./Pages/Home";

function App() {
  return (
    <MantineProvider
      defaultProps={{
        Container: {
          sizes: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
          },
        },
      }}>
      <Header>
        <Container size='xl'>
          <Navbar />
        </Container>
      </Header>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='products'>
            <Route index element={<ProductsList products={products} />} />
            <Route path=':productId' element={<ProductPage />} />
          </Route>
        </Route>
      </Routes>
    </MantineProvider>
  );
}

export default App;
