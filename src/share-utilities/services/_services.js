import config from "../config";

const list = async () => {
  try {
    const response = await fetch(
      `${config.api.apiDomain}${config.api.apiPort}${config.api.apiUrl}/product`,
      {
        method: "GET",
        headers: {},
      }
    );

    const data = await response.json();

    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

const listByCategoryName = async (categoryName) => {
  try {
    const response = await fetch(
      `${config.api.apiDomain}${config.api.apiPort}${config.api.apiUrl}/product/byCategory/${categoryName}`,
      {
        method: "GET",
        headers: {},
      }
    );

    const data = await response.json();

    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

const listByCategoryNameGender = async (categoryName, gender) => {
  try {
    const response = await fetch(
      `${config.api.apiDomain}${config.api.apiPort}${config.api.apiUrl}/product/byCategoryGender/${categoryName}/${gender}`,
      {
        method: "GET",
        headers: {},
      }
    );

    const data = await response.json();

    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

const getBestProduct = async (categoryName) => {
  try {
    const response = await fetch(
      `${config.api.apiDomain}${config.api.apiPort}${config.api.apiUrl}/product/best/${categoryName}`,
      {
        method: "GET",
        headers: {},
      }
    );

    const data = await response.json();

    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

const getBestSellingProduct = async (categoryName) => {
  try {
    const response = await fetch(
      `${config.api.apiDomain}${config.api.apiPort}${config.api.apiUrl}/product/bestSelling/${categoryName}`,
      {
        method: "GET",
        headers: {},
      }
    );

    const data = await response.json();

    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

const createMessage = async (data) => {
  const objData = data;
  try {
    const response = await fetch(
      `${config.api.apiDomain}${config.api.apiPort}${config.api.apiUrl}/message`,
      {
        method: "POST",
        body: JSON.stringify(objData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await response.json();
    return result;
  } catch (error) {
    return new Promise.reject({
      error,
    });
  }
};

const getProductById = async (id) => {
  try {
    const response = await fetch(
      `${config.api.apiDomain}${config.api.apiPort}${config.api.apiUrl}/product/${id}`,
      {
        method: "GET",
        headers: {},
      }
    );

    const data = await response.json();

    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default {
  list,
  listByCategoryName,
  listByCategoryNameGender,
  getBestProduct,
  getBestSellingProduct,
  createMessage,
  getProductById,
};
