import React from 'react'
import './List.scss'

import Sidebar from '../../../components/adminComponents/sidebar/Sidebar';
import Navbar from '../../../components/adminComponents/navbar/Navbar';
import Datatable from '../../../components/adminComponents/datatable/Datatable';
const List = ({rows,columns,btn,title,type}) => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable  rows={rows} columns={columns} btn={btn} title={title} type={type}/>
      </div>
    </div>
  )
}

export default List