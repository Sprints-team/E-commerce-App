import { useState } from "react";
import genId from "../../helpers/unique-id";
import Size from "./Size";

const Color = (props) => {
	const id = genId();
	const [color, setColor] = useState("#000000");
	const [colorObj, setColorObj] = useState({});
	const [file, setFile] = useState();

	console.log(file);
	const updateSize = (sizeobj, id) => {
		console.log("ahoooooo");
		console.log(file);
		setColorObj((prevState) => {
			prevState[id] = sizeobj;
			return { ...prevState };
		});
		console.log(file);
		props.onChange(
			{
				[color]: { ...colorObj, [id]: sizeobj },
			},
			props.id,
			file
		);
  };
  props.onChange(
    {
      [color]: { ...colorObj },
    },
    props.id,
    file
  );

	const [sizeInputs, setSizeInputs] = useState([
		<Size onChange={updateSize} id={id} key={id} />,
	]);

	const changeHandler = (e) => {
		setColor(e.target.value);
		props.onChange(
			{
				[e.target.value]: colorObj,
			},
			props.id,
			file
		);
	};

	const clickHandler = (e) => {
		// e.preventDefualt()
		const id = genId();
		setColorObj((prevState) => ({
			...prevState,
			[id]: {},
		}));
		setSizeInputs((prevState) => [
			...prevState,
			<Size onChange={updateSize} id={id} key={id} />,
		]);
	};

	const fileChangeHandler = (e) => {
		setFile(e.target.files);
		props.onChange(
			{
				[color]: colorObj,
			},
			props.id,
			e.target.files
		);
	};

	return (
		<>
			<label>
				color
				<input type={"color"} onChange={changeHandler} value={color} />
			</label>
			<input type={"file"} onChange={fileChangeHandler} multiple={true} />
			{sizeInputs}
			<button onClick={clickHandler}>add size</button>
		</>
	);
};

export default Color;
