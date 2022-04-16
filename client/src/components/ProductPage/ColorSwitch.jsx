import { useState } from "react";
import { ColorSwatch } from "@mantine/core";
import classes from "../../styles/ProductPage/ColorSwitch.module.scss";

const ColorSwitch = ({ colors }) => {
  const [color, setColor] = useState();
  console.log(color);

  return (
    <div className={classes.container}>
      {colors.map((color) => (
        <ColorSwatch
          size={30}
          key={color}
          component='button'
          color={color}
          onClick={() => setColor(color)}
          className={classes.colorSwatch}></ColorSwatch>
      ))}
    </div>
  );
};
export default ColorSwitch;
