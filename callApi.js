const axios = require("axios");

const testAxios = async () => {
  try {
    const response = await axios.get(
      "https://api2.binance.com/api/v3/ticker/24hr"
    );
    console.log(response);
    const newData = response.data.filter((item) => item.symbol.includes("BTC"));
    console.log(newData);
  } catch (error) {
    console.log(error);
  }
};

testAxios();
