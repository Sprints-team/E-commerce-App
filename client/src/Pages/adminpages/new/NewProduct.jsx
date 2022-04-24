
import './New.scss'
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";
import ImageUploading from "react-images-uploading";
import genId from "../../../helpers/unique-Id";
import { useState } from "react";
import Color from "../../../components/adminComponents/color-size/Color";





//coming from backend
const optionsCat = [{
  name: "category",
  value: "MEN",
  id: 1
},
{
  name: "category",
  value: "WOMEN",
  id: 2
},
{
  name: "category",
  value: "kIDS",
  id: 3
}

]



const optionsBrand = [{
  name: "brand",
  value: "PRADA",
  id: 1
},
{
  name: "brand",
  value: "CHANEL",
  id: 2
},
{
  name: "brand",
  value: "HERMES",
  id: 3
}

]

const NewProduct = (props) => {
  const [images, setImages] = useState()
  const [color, setColor] = useState({});
	const [colorField, setColorField] = useState([]);
	const [inputData, setInputData] = useState({});
	const [colorInputs, setColorInputs] = useState([]);
  const [colors, setColors] = useState({});
  const [brand, setBrand] = useState("");
  const [category,setCategory]=useState("")
  


  function updateColor(colorObj, id, file) {
		setColors((prevState) => {
			prevState[id] = colorObj;
			return { ...prevState };
    });
		setImages((prevState) => ({ ...prevState, [id]: file }));
	}

  const titleChangeHandler = (e) => {

  }


  const priceChangeHandler = () => {
    
  }

  const OnImageChanging = (e) => {
    
  }


  const ageChangeHandle = (e) => {
    
  }

  
  const descChangeHandler = (e) => {
    
  }


  const genderChangeHandler = (e) => {
    
  }

  const addColorHandler = (e) => {
		e.preventDefault();
		const id = genId();
		setColorInputs((prevState) => [
			...prevState,
			<Color onChange={updateColor} id={id} key={id} />,
		]);
	};



  const handleSubmit = (e) => {
    e.preventDefault()
		let obj = {};
		const objArr2 = Object.entries(colors).map((arr) => {
			let bigObj = {};
			// key is the hexdecimal color
			for (let key in arr[1]) {
				let newObj = {};

				//size is the size
				for (let size in arr[1][key]) {
					newObj[key] = { ...newObj[key], ...arr[1][key][size] };
				}
				bigObj = { ...bigObj, ...newObj };
			}
			return bigObj;
		});

		objArr2.forEach((ele) => {
			obj = { ...obj, ...ele };
		});
		console.log(images);
		console.log(obj);
  }


  return (
    <form  onSubmit={handleSubmit} > 
      <div className="right">
        {colorInputs}
        <button onClick={addColorHandler}>add color</button>
      </div>
      <div className="left">
      <div className="form-input" >
                  <label>Title</label>
                  <input name="title"type="text" placeholder="title" className="input title" required   onChange={titleChangeHandler}/>
                  </div>
                  {/* <div className="form-input" >
                  <label>Color</label>
                  <input name="colors" type="color" placeholder="color" className="input color" required  onChange={handleChange} />
                  </div> */}
                  <div className="form-input">
                  <label>Price</label>
                  <input name="price" type="text" placeholder="Price" className="input price" required   onChange={priceChangeHandler}/>
                  </div>
                  
   
 <div  className='formInput'><label> Age Group
        
        <input type="radio" value="ADULT" name="ageGroup"   onChange={ageChangeHandle} /> Adult
        <input type="radio" value="CHILD" name="ageGroup"   onChange={ageChangeHandle} /> Child
        </label>
    
      
     </div>
    
     <div className='form-input'>
       <label>description</label>
      <textarea className='input' name="describtion" required  onChange={descChangeHandler} />
 </div>
 <div  className='formInput radio'><label> Gender
        
        <label>< input type="radio" value="MEN" name="gender"   onChange={genderChangeHandler} />  MEN</label>
       <label>< input type="radio" value="MEN" name="gender"   onChange={genderChangeHandler} />  MEN</label>
        <label>< input type="radio" value="MEN" name="gender"   onChange={genderChangeHandler} />  MEN</label>
        
        </label>
      
    
      
     </div>
 <div className="form-input">
                <Form.Select
                  value={inputData.category}
                  onChange={(e) =>
                    setCategory((prev) => ({
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
                    setBrand((prev) => ({
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


              <button className="submit">
                Submit
              </button>
              </div>

    </form>

  )

}



export default NewProduct