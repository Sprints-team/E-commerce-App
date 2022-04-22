
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Header/Navbar";
import ProductPage from "./components/ProductPage/ProductPage";
import ProductsList from "./components/Productslist/ProductsList";
import New from './Pages/adminpages/new/New.jsx';
import Single from './Pages/adminpages/single/Single.jsx';
import { userInputs ,productInputs} from './formSource';
import List from './Pages/adminpages/list/List.jsx';

import { userColumns,productColumns,orderColumns,categoryColumns,brandColumns } from './datatablesource';

import Edit from './Pages/adminpages/edit/Edit.jsx';
import Underprogress from './Pages/adminpages/underprogress/Underprogress.jsx'
import Adminhome from './Pages/adminpages/adminhome/Adminhome.jsx';
import Adminlogin from './Pages/adminpages/login/Adminlogin';
import products from "./data.json";



import Cart from "./Pages/Cart";
import Home from "./Pages/Home";

function App() {
  return (
   
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='products'>
            <Route index element={<ProductsList products={products} />} />
            <Route path=':productId' element={<ProductPage />} />
          </Route>
          <Route path='cart' element={<Cart />} />
 

 
          <Route path='adminlogin' element={<Adminlogin />} />
          <Route path='admin'>
					<Route index element={<Adminhome />} />
					
        
        
        
        <Route path='users'>
        <Route index element={<List  columns={userColumns} btn='Add New User'  title="Add New User" type='users'/>}/>
        <Route path=':id'  >
          <Route index element={<Single type='users'/>}/>
          <Route path='edit' element={<Edit inputs={userInputs} type="users" />}/>
          </Route>

        
       
      </Route>
      <Route path='products'>
        <Route index element={<List  columns={productColumns} btn='Create New Product' title="Add New Product"  type="products"/>}/>
        <Route path='id'  >
          <Route index element={<Single type="products" />}/>
          <Route path='edit' element={<Edit inputs={productInputs}  type="products"/>}/>
          </Route>

        
        <Route path='new' element={<New type="products" title="Add New Product"/>}/>
        
      </Route>
      <Route path='orders'>
        <Route index element={<List  columns={orderColumns} btn='Create New Order' type="orders" />}/>
        <Route path=':id' element={<Single/>}/>
        <Route path='edit' element={<Edit type="orders" />}/>
        
      </Route>
      <Route path='category'>
        <Route index element={<List columns={categoryColumns} btn='Add New Category'  title="Add New Category" type='category'/>}/>
        <Route path=':id'  >
          <Route index element={<Single />}/>
          <Route path='edit' element={<Edit  inputs={productInputs} type='category' />}/>
          </Route>

        <Route path='new' element={<New type="category" title="Add New Category"/>}/>
       
      </Route>
      <Route path='brand'>
        <Route index element={<List columns={brandColumns} btn='Add New Brand'  title="Add New Brand" type='brand'/>}/>
        <Route path=':id'  >
          <Route index element={<Single type='brand'/>}/>
          <Route path='edit' element={<Edit inputs={userInputs}  type='brand' />}/>
          </Route>

        <Route path='new' element={<New type="brand" title="Add New Brand"/>}/>
       
      </Route>
        </Route>
          </Route>
      
      </Routes>
   
  );
}

export default App;