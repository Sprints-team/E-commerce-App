import React, { useState } from 'react'
import './New.scss'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import Navbar from './../../../components/adminComponents/navbar/Navbar';
import Sidebar from './../../../components/adminComponents/sidebar/Sidebar';
const New = ({inputs,title}) => {
  const[file,setFile] = useState("")
  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1> {title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
            src={
              file ? URL.createObjectURL(file)
                : 'https://image.shutterstock.com/image-vector/no-image-photo-template-on-600w-2094427453.jpg'
                
            }
            alt='avatar'
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image:  <DriveFolderUploadIcon className='icon'/>
                
                </label>
                <input type="file" id="file" style={{display:"none"}}
                onChange={e => setFile(e.target.files[0])}/>
              </div>
              {inputs.map((input)=> (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder}/>
                </div>
              )
              )}
              <button>Send</button>

            </form>
          </div>
        </div>
      </div>
    </div>

  )
}

export default New