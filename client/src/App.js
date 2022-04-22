import { Route, Routes } from "react-router-dom";
import ProductPage from "./components/ProductPage/ProductPage";
import {
  orderColumns,
  orderRows,
  productColumns,
  productRows,
  userColumns,
  userRows,
} from "./datatablesource";
import { productInputs, userInputs } from "./formSource";
import Adminhome from "./Pages/adminpages/adminhome/Adminhome.jsx";
import Edit from "./Pages/adminpages/edit/Edit.jsx";
import List from "./Pages/adminpages/list/List.jsx";
import Adminlogin from "./Pages/adminpages/login/Adminlogin";
import New from "./Pages/adminpages/new/New.jsx";
import Single from "./Pages/adminpages/single/Single.jsx";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Search from "./Pages/Search";

function App() {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<Home />} />

        <Route path='products'>
          <Route index element={<Search />} />
          <Route path=':productId' element={<ProductPage />} />
        </Route>

        <Route path='cart' element={<Cart />} />

        <Route path='admin'>
          <Route index element={<Adminhome />} />
          <Route path='login' element={<Adminlogin />} />

          <Route path='users'>
            <Route
              index
              element={
                <List
                  rows={userRows}
                  columns={userColumns}
                  btn='Add New User'
                  title='Add New User'
                  type='users'
                />
              }
            />
            <Route path=':userId'>
              <Route index element={<Single type='users' />} />
              <Route path='edit' element={<Edit inputs={userInputs} />} />
            </Route>
          </Route>
          <Route path='products'>
            <Route
              index
              element={
                <List
                  rows={productRows}
                  columns={productColumns}
                  btn='Create New Product'
                  title='Add New Product'
                  type='products'
                />
              }
            />
            <Route path=':productId'>
              <Route index element={<Single type='products' />} />
              <Route path='edit' element={<Edit inputs={productInputs} />} />
            </Route>

            <Route
              path='new'
              element={<New type='products' title='Add New Product' />}
            />
          </Route>
          <Route path='orders'>
            <Route
              index
              element={
                <List
                  rows={orderRows}
                  columns={orderColumns}
                  btn='Create New Order'
                  type='orders'
                />
              }
            />
            <Route path=':orderId' element={<Single />} />
            <Route path='edit' element={<Edit />} />
          </Route>
          <Route path='category'>
            <Route
              index
              element={
                <List
                  rows={userRows}
                  columns={userColumns}
                  btn='Add New Category'
                  title='Add New Category'
                  type='category'
                />
              }
            />
            <Route path=':categoryId'>
              <Route index element={<Single />} />
              <Route path='edit' element={<Edit />} />
            </Route>

            <Route
              path='new'
              element={<New type='category' title='Add New Category' />}
            />
          </Route>
          <Route path='brand'>
            <Route
              index
              element={
                <List
                  rows={userRows}
                  columns={userColumns}
                  btn='Add New Brand'
                  title='Add New Brand'
                  type='brand'
                />
              }
            />
            <Route path=':brandId'>
              <Route index element={<Single type='brand' />} />
              <Route path='edit' element={<Edit inputs={userInputs} />} />
            </Route>

            <Route
              path='new'
              element={<New type='brand' title='Add New Brand' />}
            />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
