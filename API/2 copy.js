const axios = require("axios");

const getData = async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

getData();
