import { useState } from "react";

const Size = (props) => {
	const [size, setSize] = useState("");
	const [qty, setQty] = useState("");

	const sizeChnageHandler = (e) => {
    console.log("haaaay");
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
    console.log("aaaaaah");
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

	return (
		<>
			<label>
				size
				<input type="text" onChange={sizeChnageHandler} value={size} />
			</label>
			<label>
				quantity
				<input type="number" onChange={qtyChnageHandler} value={qty} />
			</label>
		</>
	);
};

export default Size;
