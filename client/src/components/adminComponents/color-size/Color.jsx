import { useState } from "react";
import genId from "../../../helpers/unique-Id";
import Size from "./Size";
import Button from "react-bootstrap/Button";
import ImageUploading from "react-images-uploading";
import Form from "react-bootstrap/Form"


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




let imageForm =
<div className="App">
  <ImageUploading
    multiple
    name="images"
    onChange={fileChangeHandler}
    maxNumber={5}
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
                    // onChange={}
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








	return (
		<div style={{border:"1px solid red"}}>
			<label>
				color
				<input type={"color"} onChange={changeHandler} value={color} />
			</label>
			{imageForm}
      {sizeInputs.map(ele => {
        return (<Size onChange={ele.onChange} id={ele.id} key={ele.id} onDelete={ele.onDelete} />)
      })}
      <button onClick={clickHandler}>add size</button>
		</div>
	);
};

export default Color;