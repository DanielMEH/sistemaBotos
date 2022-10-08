import Axios from "axios";

export const getPostRequestData = async () =>
  await Axios.get("http://localhost:3002/electionsView");

//aPRENDIZvOTANTE

export const getAprendiz = async (id) =>
  await Axios.get("http://localhost:3002/votantesView/" + id);

  