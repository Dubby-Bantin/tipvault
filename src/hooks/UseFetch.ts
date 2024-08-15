import axios from "axios";
import { useState } from "react";

const useFetch = () => {
  const [data, setData] = useState([]);

  const api = "http://localhost:3000";

  const getData = async (endPoint: string) => {
    try {
      const res = await axios.get(`${api}${endPoint}`);
      setData(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  return { getData, data };
};

export default useFetch;
