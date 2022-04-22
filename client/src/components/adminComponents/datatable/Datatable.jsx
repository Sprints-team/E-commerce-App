import React from 'react'
import './Datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios"
import { useSelector ,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Link ,Outlet} from 'react-router-dom';
//import { productActions } from "../../../store/productsSlice"


const Datatable = ({columns,btn,title,type}) => {
  //const [cookies, setCookie] = useCookies(["token", "id"]);
 // const dispatch = useDispatch()
  //const products = useSelector(state => state.products)
  //const users = useSelector(state => state.users.users)
  //delete action 
 // const handleClick = (id) => {
     // const confirm = window.confirm("Are you sure you want to delete this");
    //  if (confirm) {
         // switch (type) {
             
             // case "products":
               //   axios.delete(`/api/product/${id}`,
                   //   {
                        //  headers: {
                       //       token: "Bearer " + cookies.token,

                         //     "Content-Type": "application/json",
                          //    },
                       //   withCredentials: true,
                   //   }


              //    ).then(window.location.reload(false)).catch(error => console.log(error))
               //   break;
                 
                 //   case "brand":
                  //      axios.delete(`/api/barnd/${id}`,
                        //    {
                          //      headers: {
                         //           token: "Bearer " + cookies.token,
      
                             //       "Content-Type": "application/json",
      
      
                            //    },
                            //    withCredentials: true,
                        //    }
      
      
                    //    ).then(window.location.reload(false)).catch(error => console.log(error))
                    //    break;
                         
                 //   case "category":
                   //   axios.delete(`/api/category/${id}`,
                   //       {
                           //   headers: {
                           //       token: "Bearer " + cookies.token,
    
                                  //"Content-Type": "application/json",
    
    
                           //   },
                           //   withCredentials: true,
                      //    }
    
    
                   //   ).then(window.location.reload(false)).catch(error => console.log(error))
                   //   break;
            //  default: return

       //  // }
   //   } else {
        //  return
     // }
 // }
    
//         ************************************************

  //useEffect(() => {
     // switch (type) {
          //case "products":
              //axios
               //   .get(`/api/products`)
                 // .then(function (response) {
                 //     // handle success

                  //    dispatch(productActions.getProducts(response.data));
                //  })
                //  .catch(function (error) {
                      // handle error
                 //     console.log(error);
                //  });
              //break;
         // case "users":
             // axios
               //   .get(`/api/users`, {
                  //    headers: {
                   //       token: "Bearer " + cookies.token,

                         // "Content-Type": "application/json",


                   //   },
                   //   withCredentials: true,
                //  }
                //  )
               //   .then(function (response) {
                      // handle success
                    //  console.log(response.data);
                    //  dispatch(usersActions.getUsers(response.data));
                 // })
                 // .catch(function (error) {
                      // handle error
                 //     console.log(error);
                //  });
           //   break;
      //    default: return

     // }
      // call useEffect every change in type
  //}, [type])

  //get data from redux
  //************************************



  // for load tables
  let rows
  switch (type) {
     // case "users": rows =
       //   users.map(user => {
            //  return {username: user.name, email: user.email, status: user.status }
        //  })
        //  break;
    //  case "products": rows = products.map(product => {
        //  return {  name: product.title, ageGroup: product.ageGroup, price: product.price ,gender:product.gender}
   //   })
         // break;
//
      case "category": rows = [
          {
              id: "2",
             
              title: "Cersei@gmail.com",
          },
      ]
          break;

      case "brand": rows = [
          {
              id: "2",
             
              title: "Cersei@gmail.com",
          },
      ]
          break;
      case "orders": rows = [{
          id: "Snow",
          customer:
             "ali",
             img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          date: "Jon@gmail.com",
          total: " $35",
          payment: "Active",
          status: "approved",
      }]
          break;


      default: { }
  }

  let actionColumn = [
    {
      field : "action",
      headerName:"Action",
      width:200,
      renderCell:(params)=>{
        return(
          <div className="cellAction">
               <Link to={`/admin/${type}/${params.row.id}`}  style={{textDecoration:"none"}}>
             <div className="viewButton">View</div>
             </Link>
            <Link to={`/admin/${type}/${params.row.id}/edit`} style={{textDecoration:"none"}}>
             <div className="editButton">Edit</div>
             </Link>
            
            <div className="deleteButton"><DeleteIcon/></div>
            
          </div>
        )
      }
    }
  ]
  
      
  return (
    <div className='dataTable'>
      <div className="datatableTitle">
        {(type !== "users" && type !=="orders")&&  (<Link to={`/admin/${type}/new`} className='link'>
          {btn}
        </Link>)}
     
        


      </div>
   
           <DataGrid
        rows={rows}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        
      />
    </div>
  )
}

export default Datatable