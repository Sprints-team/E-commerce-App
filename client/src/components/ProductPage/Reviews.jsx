import classes from "../../styles/ProductPage/Reviews.module.scss";
import { Avatar } from "@mantine/core";
import { Rating } from "react-simple-star-rating";
const Reviews = ({ reviews }) => {
  return (
    <ul className={classes.container}>
      {reviews.map((review, index) => (
        <li className={classes.review} key={index}>
          <div className={classes.avatar}>
            <Avatar radius='xl' color={"red"} />
            <h4>{`${review?.name.first} ${review?.name.last}`}</h4>
          </div>
          <div>
            <Rating
              initialValue={review?.rating}
              size={25}
              fillColor='red'
              allowHover
              transition
              allowHalfIcon
              readonly
              className={classes.rating}
            />
          </div>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};
export default Reviews;
