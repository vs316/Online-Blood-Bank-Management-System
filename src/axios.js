import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.healthsites.io/api/v2/",
});
instance.defaults.headers.common[
  "Authorization"
] = `Bearer ${"8cfc927d0c1ff4312dcb794e59eed9f3ce9e84f9"}`;
instance.defaults.headers.common["Accept"] = "application/json";

export default instance;
