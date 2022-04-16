import React from 'react'
import './Datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';

import { Link } from 'react-router-dom';
const Datatable = ({rows,columns,btn,title,type}) => {
  const actionColumn = [
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
        
      <Link to={`/admin/${type}/new`} className='link'>
          {btn}
        </Link>
        


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