import axios from "axios";
import { useState } from "react";

const useFetch = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await axios("../../public/db.json");
      const {
        data: { tips },
      } = res;
      console.log(tips);
      setData(tips);
    } catch (e) {
      console.log(e);
    }
  };

  return { getData, data };
};

export default useFetch;
