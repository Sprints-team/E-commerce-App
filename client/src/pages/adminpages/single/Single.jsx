import React from 'react'
import './Single.scss'
import Chart from './../../../components/adminComponents/chart/Chart'
import Sidebar from './../../../components/adminComponents/sidebar/Sidebar';
import Navbar from './../../../components/adminComponents/navbar/Navbar';
import TableList from '../../../components/adminComponents/table/TableList';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const Single = ({users,type}) => {
  const params = useParams()
  console.log(params)
  return (
    <div className="single">
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
          
            <div className="editButton">Edit</div>
            
            <h1 className="title">Information</h1>
            <div className="item">
            
            <img src="https://i.pinimg.com/564x/9b/60/39/9b6039322cbe6a3bc2612e49f63e576a.jpg " alt="avatar" className="itemImg" />
            <div className="details">
              <h1 className="itemTitle">Samah Gad</h1>
              <div className="detailItem">
                <span className="itemKey">Email:</span>
                <span className="itemValue">samah@outlook.com</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Phone:</span>
                <span className="itemValue">*123456</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Address:</span>
                <span className="itemValue">Elton St. 234 Garden Yd</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Country:</span>
                <span className="itemValue">Egypt</span>
              </div>
            </div>
            </div>
</div>
          <div className="right">
            <Chart aspect={ 3 / 1}  title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <TableList/>
        </div>
      </div>
    </div>
  )
}

export default Single