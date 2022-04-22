import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/adminComponents/navbar/Navbar";
import Sidebar from "../../../components/adminComponents/sidebar/Sidebar";
import "./New.scss";
const New = ({ title, type }) => {
  let navigate = useNavigate();
  const [file, setFile] = useState("");
  const [color, setColor] = useState({});
  const [colorField, setColorField] = useState([]);
  const [inputData, setInputData] = useState({});

  const colorInput = (e) => {
    e.preventDefault();
    setColorField((state) => [
      ...state,
      <div className='form-input' key={state.length}>
        <label>color</label>
        <input type='color' className='input' />
        <label>qty</label>
        <input type='number' className='input' />
      </div>,
    ]);
  };
  const handleChange = (e) => {
    console.log(e.target.required);
    // if (e.target.required && e.target.value === null) {
    //     setRequired(true)
    // } else {
    //     setRequired(false)
    // }
    setInputData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // try {
    // axios.post("/api/products", {
    // data: inputData,
    //header: cookies.token
    //   })
    // }
    // catch (err) { console.log(err); }

    // navigate(`/admin/${type}`)
  };

  let inputs;
  switch (type) {
    case "products":
      inputs = [
        {
          id: 1,
          label: "Title",
          name: "title",
          type: "text",
          placeholder: "Apple Macbook Pro",
          required: true,
        },
        {
          id: 2,
          label: "Price",
          name: "price",
          type: "text",
          placeholder: "Apple Macbook Pro",
          required: true,
        },
        {
          id: 3,
          label: "Category",
          name: "category",
          type: "text",
          placeholder: "Apple Macbook Pro",
          required: true,
        },
        {
          id: 4,
          label: "Brand",
          name: "brand",
          type: "text",
          placeholder: "Apple Macbook Pro",
          required: true,
        },
        {
          id: 5,
          label: "Gender",
          name: "gender",
          type: "radio",
          placeholder: "Apple Macbook Pro",
          required: true,
        },
      ];

      break;
    case "brand":
      inputs = [
        {
          id: 1,
          label: "Title",
          name: "title",
          type: "text",
          placeholder: "Apple Macbook Pro",
          required: true,
        },
      ];
      break;
    case "category":
      inputs = [
        {
          id: 1,
          label: "Title",
          name: "title",
          type: "text",
          placeholder: "category name",
          required: true,
        },
      ];
      break;

    default:
      break;
  }
  return (
    <div className='new'>
      <Sidebar />
      <div className='newContainer'>
        <Navbar />
        <div className='top'>
          <h1> {title}</h1>
        </div>
        <div className='bottom'>
          <div className='left'>
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://image.shutterstock.com/image-vector/no-image-photo-template-on-600w-2094427453.jpg"
              }
              alt='avatar'
            />
          </div>
          <div className='right'>
            <form>
              <div className='formInput'>
                <label htmlFor='file'>
                  Image: <DriveFolderUploadIcon className='icon' />
                </label>
                <input
                  type='file'
                  id='file'
                  style={{ display: "none" }}
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              {inputs.map((input) => (
                <div className='formInput' key={input.id}>
                  <label>{input.label}</label>
                  <input
                    type={input.type}
                    placeholder={input.placeholder}
                    required={input.require}
                    onChange={handleChange}
                  />
                </div>
              ))}

              <div className='form-input'>
                <label>description</label>
                <textarea className='input' required />
              </div>

              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
