import React from 'react'
import './Navbar.scss'
import ListIcon from '@mui/icons-material/List';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import SearchIcon from '@mui/icons-material/Search';
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...'/>
          <SearchIcon/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className='icon'/>
            English

          </div>
          <div className="item">
            <DarkModeIcon className='icon' />
            

          </div>
          <div className="item">
            <FullscreenExitIcon className='icon' />
          

          </div>
          <div className="item">
            <NotificationsNoneIcon  className='icon'/>
            <div className="counter">1</div>

          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon  className='icon'/>
            <div className="counter">2</div>

          </div>
          <div className="item">
            <ListIcon className='icon' />
            

          </div>
          <div className="item">
            
            <img src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxx8XP0oSQOv1Q5bUc79-6pNCVwmgdCa-PsA&usqp=CAU' alt='girl' className='avatar'/>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar