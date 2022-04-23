import { useState } from "react";
import genId from "../../helpers/unique-id";
import Size from "./Size";

const Color = (props) => {
	const id = genId();
	const [color, setColor] = useState("#000000");
	const [colorObj, setColorObj] = useState({});
	const [file, setFile] = useState();

	const updateSize = (sizeobj, id) => {
		setColorObj((prevState) => {
			prevState[id] = sizeobj;
			return { ...prevState };
		});
		props.onChange(
			{
				[color]: { ...colorObj, [id]: sizeobj },
			},
			props.id,
			file
		);
  };
  // props.onChange(
  //   {
    //     [color]: { ...colorObj },
    //   },
    //   props.id,
    //   file
    // );
    const [sizeInputs, setSizeInputs] = useState([
      {onChange:updateSize,id:id,onDelete:deleteSize}
    ]);

  function deleteSize  (id) {
    setColorObj(prevState => {
      delete prevState[id]
      return {prevState}
    })
    console.log(id)
    const tempColorObj = { ...colorObj }
    delete tempColorObj.id
    props.onChange(
      {
        [color]: { ...tempColorObj },
      },
      props.id,
      file
    );
    setSizeInputs(prevState=>prevState.filter(ele=>ele.id!==id))
  }




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
			{onChange:updateSize,id:id,onDelete:deleteSize},
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
		<div style={{border:"1px solid red"}}>
			<label>
				color
				<input type={"color"} onChange={changeHandler} value={color} />
			</label>
			<input type={"file"} onChange={fileChangeHandler} multiple={true} />
      {sizeInputs.map(ele => {
        return (<Size onChange={ele.onChange} id={ele.id} key={ele.id} onDelete={ele.onDelete} />)
      })}
      <button onClick={clickHandler}>add size</button>
		</div>
	);
};

export default Color;
