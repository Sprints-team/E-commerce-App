import React from 'react'
import './Sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import Person from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to='/admin'  style={{textDecoration:"none"}}>
      <div className="top"><span className="logo">Sprint</span></div>
      </Link>
        
        <hr/>
        <div className="center"><ul>
          <p className="title">MAIN</p>
          <Link to='/admin'  style={{textDecoration:"none"}}>
            <li>
              <DashboardIcon className='icon'/>
              <span>
                Dashboard
              </span>
            </li>
            </Link>
            <p className="title">LISTS</p>
            <Link to='/admin/users'  style={{textDecoration:"none"}}>
            <li>
              <Person className='icon'/>
              <span>Users</span></li>
              </Link>
              <Link to='/admin/products'  style={{textDecoration:"none"}}>
            <li>
              <StoreMallDirectoryIcon className='icon'  />
              <span>Products</span>
            </li>
            </Link>
            <Link to='/admin/orders'  style={{textDecoration:"none"}}>
            <li>
            <CreditCardIcon  className='icon'/>
              <span>Orders</span>
            </li>
            </Link>
            <Link to='/admin/under' style={{textDecoration:"none"}}>
            <li>
             <LocalShippingIcon  className='icon' />
              <span>Delivery</span>
            </li>
            </Link>
            <p className="title">USEFUL</p>
            <li>
              <InsertChartIcon   className='icon'/>

              <span>Stats</span>
            </li>
            <li>
              <NotificationsIcon className='icon'/>
              <span>Notifications</span>
            </li>
            <p className="title">SERVISE</p>
            <li>
              <SettingsSystemDaydreamOutlinedIcon className='icon' />
              <span>System Health</span>
            </li>
            <li>
              <PsychologyOutlinedIcon   className='icon'/>
              <span>Logs</span>
            </li>
            
            <li>
              <SettingsIcon  className='icon'/>

              <span>Settings</span>
            </li>
            <p className="title">User</p>
            <li>
              <AccountCircleOutlinedIcon  className='icon'/>
              <span>Profile</span>
            </li>
            <li>
              <LogoutIcon  className='icon' />
              <span>Logout</span>
            </li>
            </ul>
            </div>
        <div className="bottom">
          <div className="colorOption"></div>
          <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default Sidebar