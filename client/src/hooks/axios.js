import axios from "axios";

/* export default axios.create({
    baseURL: "http://localhost:5009",
}); */

export const serverHost = "http://localhost:3000";

export default axios.create({
  baseURL: "http://localhost:3000",
});
