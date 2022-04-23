import React, { useState } from "react";
import "./New.scss";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import Navbar from "../../../components/adminComponents/navbar/Navbar";
import Sidebar from "../../../components/adminComponents/sidebar/Sidebar";
import axios from "../../../hooks/axios";
import { useNavigate } from "react-router-dom";
import Color from "../../../components/color-size/Color";
import genId from "../../../helpers/unique-id";
const New = ({ title, type }) => {
	let navigate = useNavigate();
	const [file, setFile] = useState("");
	const [color, setColor] = useState({});
	const [colorField, setColorField] = useState([]);
	const [inputData, setInputData] = useState({});
	const [files, setFiles] = useState({});
	const [colorInputs, setColorInputs] = useState([]);
	const [colors, setColors] = useState({});
  // let colors={}

	function updateColor(colorObj, id, file) {
		setColors((prevState) => {
			prevState[id] = colorObj;
			return { ...prevState };
    });
		setFiles((prevState) => ({ ...prevState, [id]: file }));
	}

	const handleChange = (e) => {
		setInputData((prevState) => {
			return { ...prevState, [e.target.name]: e.target.value };
		});
	};

	const addColorHandler = (e) => {
		e.preventDefault();
		const id = genId();
		setColorInputs((prevState) => [
			...prevState,
			<Color onChange={updateColor} id={id} key={id} />,
		]);
	};

  const handleSubmit = (e) => {
    e.preventDefault(e)
  }

	const sendHandler = (e) => {
		e.preventDefault();
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
		console.log(files);
		console.log(obj);
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
		<div className="new">
			<Sidebar />
			<div className="newContainer">
				<Navbar />
				<div className="top">
					<h1> {title}</h1>
				</div>
				<div className="bottom">
					<div className="left">
						<img
							src={
								file
									? URL.createObjectURL(file)
									: "https://image.shutterstock.com/image-vector/no-image-photo-template-on-600w-2094427453.jpg"
							}
							alt="avatar"
						/>
					</div>
					<div className="right">
						<form onSubmit={handleSubmit}>
							<div className="formInput">
								<label htmlFor="file">
									Image: <DriveFolderUploadIcon className="icon" />
								</label>
								<input
									type="file"
									id="file"
									style={{ display: "none" }}
									onChange={(e) => setFile(e.target.files[0])}
								/>
							</div>
							{inputs.map((input) => (
								<div className="formInput" key={input.id}>
									<label>{input.label}</label>
									<input
										type={input.type}
										placeholder={input.placeholder}
										required={input.require}
										onChange={handleChange}
									/>
								</div>
							))}

							<div className="form-input">
								<label>description</label>
								<textarea className="input" />
							</div>
							{colorInputs}
							<button onClick={addColorHandler}>addColor</button>
							<button onClick={sendHandler}>Send</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default New;
