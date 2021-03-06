import { useState } from "react";

const Size = (props) => {
	const [size, setSize] = useState("");
	const [qty, setQty] = useState("");

	const sizeChnageHandler = (e) => {
		props.onChange(
      {
        [e.target.value]: {
          qty: qty,
				},
			},
			props.id
      );
      setSize(e.target.value);
	};

	const qtyChnageHandler = (e) => {
		props.onChange(
      {
        [size]: {
          qty: e.target.value,
				},
			},
			props.id
      );
      setQty(e.target.value);
  };
  

  const deleteHandler = (e) => {
    props.onDelete(props.id)
  }


	return (
		<div style={{border:"2px solid black"}}>
			<label>
				size
				<input type="text" onChange={sizeChnageHandler} value={size} />
			</label>
			<label>
				quantity
				<input type="number" onChange={qtyChnageHandler} value={qty} />
      </label>
      <button onClick={deleteHandler}>delete size</button>
		</div>
	);
};

export default Size;