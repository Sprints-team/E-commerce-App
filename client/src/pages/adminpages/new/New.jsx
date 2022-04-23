import React from 'react'
import './New.scss'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import Navbar from '../../../components/adminComponents/navbar/Navbar';
import Sidebar from '../../../components/adminComponents/sidebar/Sidebar';
import axios from '../../../hooks/axios';
import { useNavigate } from "react-router-dom";
import {useState ,useId} from "react";
import { useCookies } from "react-cookie";
import ImageUploading from "react-images-uploading";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";


const New = ({title,type}) => {
  
  
  // img form const[file,setFile] = useState("")
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

 
  
  
const handleChange = (e) => {
  setInputData((prevState) => {
    return { ...prevState, [e.target.name]: e.target.value };
  });
};
const handleFeaturedImg = (e) => {

  setuniqueImgIndex(e.target.value);
  console.log(uniqueImgIndex)
};
const handleSubmit = async (e) => {
  e.preventDefault();

  switch (type) {
    case "products":
      const imgsFiles = images.map((image) => image.file);
      const formData = new FormData();
      for (var i = 0; i < imgsFiles.length; i++) {
        formData.append("productImg", imgsFiles[i]);
      }
      formData.append("featuredImg", uniqueImgIndex);
      formData.append("describtion", inputData.describtion);
      formData.append("images", inputData.images);
      formData.append("price", inputData.price);
    // formData.append("quantity", inputData.quantity);
     // formData.append("size", inputData.size);
      formData.append("title", inputData.title);
      formData.append("category", inputData.category);
      formData.append("brand", inputData.brand);
      formData.append("gender", inputData.gender);
      formData.append("ageGroup", inputData.ageGroup);
      formData.append("colors", inputData.colors);
      try {
        const res = await axios.post(
          `/api/product/`,

          formData,
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

    case "category":
      const formCategories = new FormData();
      formCategories.append("describtion", inputData.describtion);
      formCategories.append("imgUrl", inputData.imUrl);
      formCategories.append("gender", inputData.gender);
      formCategories.append("title", inputData.title);
      


      try {
        const res = await axios.post(
          `/api/category/`,

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
      formBrands.append("describtion ", inputData.describtion );
      formBrands.append("logo", inputData.logo);
      formBrands.append("title", inputData.title);

      try {
        const res = await axios.post(
          `/api/brand/`,

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
    default: return
  }
}


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
    <div className='new'>
      <Sidebar/>
      <div className="newItem">
        <Navbar/>
        <div className="top">
          <h1 className='title'> {title}</h1>
        </div>
        <div className="bottom">
         
          
           {newForm}
         
        </div>
     </div>
    </div>

  )
}

export default New