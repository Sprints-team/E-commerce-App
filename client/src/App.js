
import New from './pages/adminpages/new/New.jsx';
import Single from './pages/adminpages/single/Single.jsx';
import { userInputs ,productInputs} from './formSource';
import List from './pages/adminpages/list/List.jsx';
import HomePage from './pages/home/HomePage.jsx';
import { userColumns , productRows,productColumns,userRows,orderRows,orderColumns ,users} from './datatablesource';
import{ BrowserRouter, Routes,Route,} from "react-router-dom"
import Edit from './pages/adminpages/edit/Edit.jsx';
import Underprogress from './pages/adminpages/underprogress/Underprogress.jsx'
import Adminhome from './pages/adminpages/adminhome/Adminhome.jsx';
import Adminlogin from './pages/adminpages/login/Adminlogin';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    

  

    <Route path='/' element={<HomePage />} />
    <Route path='admin'>
					<Route index element={<Adminhome />} />
					<Route path='login' element={<Adminlogin />} />
        <Route index element={<Adminhome/>}/>
        <Route path='login' element={<Adminlogin/>}/>
        
        <Route path='users'>
        <Route index element={<List rows={userRows} columns={userColumns} btn='Add New User'  title="Add New User" type='users'/>}/>
        <Route path=':userId'  >
          <Route index element={<Single type='users'/>}/>
          <Route path='edit' element={<Edit inputs={userInputs} />}/>
          </Route>

        <Route path='new' element={<New inputs={userInputs} title="Add New User"/>}/>
       
      </Route>
      <Route path='products'>
        <Route index element={<List rows={productRows} columns={productColumns} btn='Create New Product' title="Add New Product"  type="products"/>}/>
        <Route path=':productId'  >
          <Route index element={<Single type="products" />}/>
          <Route path='edit' element={<Edit inputs={productInputs} />}/>
          </Route>

        
        <Route path='new' element={<New inputs={productInputs} title="Add New Product"/>}/>
        
      </Route>
      <Route path='orders'>
        <Route index element={<List rows={orderRows} columns={orderColumns} btn='Create New Order' />}/>
        <Route path=':orderId' element={<Single/>}/>
        <Route path='edit' element={<Edit/>}/>
        
      </Route>
      </Route>
     
    </Routes>
  </BrowserRouter>
  );
}

export default App;
