import Axios from "axios";

export const getPostRequestData = async () =>
  await Axios.get("http://localhost:3002/electionsView");
