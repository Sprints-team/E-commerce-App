import React from "react";
import Chart from "../../../components/adminComponents/chart/Chart";
import Featured from "../../../components/adminComponents/featured/Featured";
import Navbar from "../../../components/adminComponents/navbar/Navbar";
import Sidebar from "../../../components/adminComponents/sidebar/Sidebar";
import TableList from "../../../components/adminComponents/table/TableList";
import Widget from "../../../components/adminComponents/widget/Widget";
import "./Adminhome.scss";

const Adminhome = () => {
  return (
    <div className='home'>
      <Sidebar />

      <div className='homeContainer'>
        <Navbar />
        <div className='widgets'>
          <Widget type='users' />
          <Widget type='order' />
          <Widget type='earning' />
          <Widget type='balance' />
        </div>
        <div className='charts'>
          <Featured />
          <Chart aspect={2 / 1} title='Last 6 Months  (Revenue)' />
        </div>
        <div className='listContainer'>
          <div className='listTitle'>Latest Transactions</div>
          <TableList />
        </div>
      </div>
    </div>
  );
};

export default Adminhome;
