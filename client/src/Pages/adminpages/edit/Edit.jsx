import React from 'react'
import Navbar from '../../../components/adminComponents/navbar/Navbar'
import Sidebar from '../../../components/adminComponents/sidebar/Sidebar'
import './Edit.scss'
import { useState } from 'react'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

import { useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "../../../hooks/axios";
import { useEffect, useId } from "react";
import ImageUploading from "react-images-uploading";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Edit = ({type,inputs}) => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [file, setFile] = useState(null);
  const [inputData, setInputData] = useState({ categories: "" });
  
// images property
const [images, setImages] = useState([]);
const maxNumber = 6;
const onImgsChange = (imageList, addUpdateIndex) => {
  // data for submit
  console.log(imageList);
  setImages(imageList);
};

const [required, setRequired] = useState(false);
const [uniqueImgIndex, setuniqueImgIndex] = useState(0);
const [cookies, setCookie] = useCookies(["token", "id"]);
const navigate = useNavigate();

const config = {
  headers: {
    token: "Bearer" + cookies.token,
  },
};
useEffect(() => {
  axios.get(`/api/${type}/find/${id}`, config).then(
    (res) => {
      setData(res.data);
    },
    (err) => {
      console.log(err);
    }
  );
}, [type, id]);


const handleFeaturedImg = (e) => {
  setuniqueImgIndex(e.target.value);
  console.log(uniqueImgIndex);
};

const handleChange = (e) => {
  setInputData((prevState) => {
    return { ...prevState, [e.target.name]: e.target.value };
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  switch (type) {
    case "products":
      const imgsFiles = images.map((image) => image.file);
      const formData = new FormData(e.currentTarget);
      console.log(Object.fromEntries([...formData]));

      for (var i = 0; i < imgsFiles.length; i++) {
        formData.append("productImg", imgsFiles[i]);
      }

      try {
        const res = await axios.put(
          `/api/product/${id}`,

          formData,
          {
            headers: {
              token: "Bearer " + cookies.token,
            },
            withCredentials: true,
          }
        );
        console.log(res);
      } catch (err) {
        console.log(err);
      }
      navigate(`/admin/${type}`);
      break;

    case "category":
      const formCategories = new FormData();
      formCategories.append("description", inputData.description);
      formCategories.append("image", inputData.image);
      formCategories.append("title", inputData.title);

      try {
        const res = await axios.put(
          `/api/category/${id}`,

          formCategories,
          {
            headers: {
              token: "Bearer " + cookies.token,
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        console.log(res);
      } catch (err) {
        console.log(err);
      }
      navigate(`/admin/${type}`);
      break;

    case "brand":
      const formBrands = new FormData();
      formBrands.append("description", inputData.description);
      formBrands.append("image", inputData.image);
      formBrands.append("title", inputData.title);

      try {
        const res = await axios.put(
          `/api/brand/${id}`,

          formBrands,
          {
            headers: {
              token: "Bearer " + cookies.token,
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        console.log(res);
      } catch (err) {
        console.log(err);
      }
      navigate(`/admin/${type}`);
      break;
    default:
      return;
  }
};
//coming from backend
const optionsCat = [{
  name: "category",
  value: "MEN",
  id: useId()
},
{
  name: "category",
  value: "WOMEN",
  id: useId()
},
{
  name: "category",
  value: "kIDS",
  id: useId()
}

]



const optionsBrand = [{
  name: "brand",
  value: "PRADA",
  id: useId()
},
{
  name: "brand",
  value: "CHANEL",
  id: useId()
},
{
  name: "brand",
  value: "HERMES",
  id: useId()
}

]

  //form
 
  let imageForm = 
  
  <div className="App">
  <ImageUploading
    multiple
    name="images"
    value={images}
    onChange={onImgsChange}
    maxNumber={maxNumber}
    dataURLKey="data_url"
  >
    {({
      imageList,
      onImageUpload,
      onImageRemoveAll,
      onImageUpdate,
      onImageRemove,
      errors,
      isDragging,
      dragProps,
    }) => (
      // write your building UI
      <div className="upload__image-wrapper">
        <div className="uploadBtns">
          <Button
            style={isDragging ? { color: "red" } : null}
            onClick={onImageUpload}
            {...dragProps}
          >
            Click or Drop here
          </Button>
          &nbsp;
          <Button onClick={onImageRemoveAll}>
            Remove all images
          </Button>
        </div>
        <div className="imgsView">
          {imageList.map((image, index) => (
            <div key={`${index}-image`} className="image-item">
              <img src={image.data_url} alt="" />
              <div className="image-item__btn-wrapper">
                <div className="imgUpdatesBtns">
                  <Button
                    variant="success"
                    onClick={() => onImageUpdate(index)}
                  >
                    Update
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => onImageRemove(index)}
                  >
                    Remove
                  </Button>
                </div>
                <Form.Check type="radio" id="check-api-radio">
                  <Form.Check.Input
                    type="radio"
                    name="featuredImg"
                    value={index}
                    onChange={handleFeaturedImg}
                    isValid
                  />
                  <Form.Check.Label>
                    set as featured image
                  </Form.Check.Label>
                </Form.Check>
              </div>
            </div>
          ))}
        </div>
        {errors && (
          <div>
            {errors.maxNumber && (
              <span>
                Number of selected images exceed maxNumber
              </span>
            )}
            {errors.acceptType && (
              <span>Your selected file type is not allow</span>
            )}
            {errors.maxFileSize && (
              <span>Selected file size exceed maxFileSize</span>
            )}
            {errors.resolution && (
              <span>
                Selected file is not match your desired
                resolution
              </span>
            )}
          </div>
        )}
      </div>
    )}
  </ImageUploading>
</div>
  let newForm


  switch (type) {
    case "products": newForm = 
      <form  onSubmit={handleSubmit} > 
      <div className="left">
      {imageForm}
      </div>
      <div className="right">
      <div className="form-input" >
                  <label>Title</label>
                  <input name="title"type="text" placeholder="title" className="input title" required   onChange={handleChange}/>
                  </div>
                  <div className="form-input" >
                  <label>Color</label>
                  <input name="colors" type="color" placeholder="color" className="input color" required  onChange={handleChange} />
                  </div>
                  <div className="form-input" >
                  <label>Price</label>
                  <input name="price" type="text" placeholder="Price" className="input price" required   onChange={handleChange}/>
                  </div>
                  
   
 <div  className='formInput'><label> Age Group
        
        <input type="radio" value="ADULT" name="ageGroup"   onChange={handleChange} /> Adult
        <input type="radio" value="CHILD" name="ageGroup"   onChange={handleChange} /> Child
        </label>
    
      
     </div>
    
     <div className='form-input'>
       <label>description</label>
      <textarea className='input' name="describtion" required  onChange={handleChange} />
 </div>
 <div  className='formInput radio'><label> Gender
        
        <label>< input type="radio" value="MEN" name="gender"   onChange={handleChange} />  MEN</label>
       <label>< input type="radio" value="MEN" name="gender"   onChange={handleChange} />  MEN</label>
        <label>< input type="radio" value="MEN" name="gender"   onChange={handleChange} />  MEN</label>
        
        </label>
      
    
      
     </div>
 <div className="form-input">
                <Form.Select
                  value={inputData.category}
                  onChange={(e) =>
                    setInputData((prev) => ({
                      ...prev,
                      categories: e.target.value,
                    }))
                  }
                >
                  <option name="category" value="1">
                    category
                  </option>
                  {optionsCat.map((option) => (
                    <option name={option.name} value={option.value} key={option.id}>
                      {option.value}
                    </option>
                  ))}
                </Form.Select>
              </div>
              <div className="form-input">
                <Form.Select
                  value={inputData.brand}
                  onChange={(e) =>
                    setInputData((prev) => ({
                      ...prev,
                      brands: e.target.value,
                    }))
                  }
                >
                  <option name="brand" value="1">
                    brand
                  </option>
                  {optionsBrand.map((option) => (
                    <option name={option.name} value={option.value} key={option.id}>
                      {option.value}
                    </option>
                  ))}
                </Form.Select>
              </div>


              <button className="submit" disabled={required}>
                Submit
              </button>
              </div>

    </form>

      
  
      
      break;
      case "brand" : newForm= 
        <form  onSubmit={handleSubmit}> 
       
          <div className="left">
         {imageForm}
         </div>
         <div className="right">
      <div className="form-input" >
                  <label>Title</label>
                  <input name="title" type="text" placeholder="title" className="input" required />
                  </div>
                  <div className='form-input'>

       <label>description</label>
      <textarea className='input' name="describtion" required  onChange={handleChange} />
 </div>
                  
 <button className="submit" disabled={required}>
                Submit
              </button>
              </div>
        </form>
       
    
      break ;
      case "category" : newForm= [

       <form   onSubmit={handleSubmit}>
         <div className="left">
         {imageForm}
         </div>
         <div className="right">
      <div className="form-input" >
                  <label>Title</label>
                  <input name="title" type="text" placeholder="title" className="input" required />

                  </div>
                  
                  <div  className='formInput radio'><label> Gender
        
        <label>< input type="radio" value="MEN" name="gender"   onChange={handleChange} />  MEN</label>
       <label>< input type="radio" value="MEN" name="gender"   onChange={handleChange} />  MEN</label>
        <label>< input type="radio" value="MEN" name="gender"   onChange={handleChange} />  MEN</label>
        
        </label>
      
    
      
     </div>
     <div className="form-input" >
       <label>description</label>
      <textarea className='input' name="describtion" required  onChange={handleChange} />
      </div>
 
      <button className="submit" disabled={required}>
                Submit
              </button>
              </div>
        </form>
       
      ]
      break ;
      
  
    default:
      break;
    }


  



   

  return (
    <div className='edit'>
        <Sidebar/>
        <div className="editContainer">
            <Navbar/>
            
            
            <div className="top">
           <h1 className='title'> Edit</h1> 
           </div>
             <div className="bottom">
               {newForm}
             </div>
            
              
                
           
          </div>
           
              </div>
           
          



              


  )
}
export default Edit