import axios from "axios";
import cache from "memory-cache";

const BASE_URL = process.env.API_BASE_URL;
const USERNAME = process.env.API_USERNAME;
const PASSWORD = process.env.API_PASSWORD;

const fetchProducts = async (url) => {
  const r = await axios.get(BASE_URL + url, {
    auth: {
      username: USERNAME,
      password: PASSWORD,
    },
  });

  let items = r.data.items[0];

  for (
    let page = parseInt(r.data.page);
    page < parseInt(r.data.pages);
    page++
  ) {
    const r = await axios.get(BASE_URL + url + `?page=${page + 1}`, {
      auth: {
        username: USERNAME,
        password: PASSWORD,
      },
    });

    const chunk = r.data.items[0];

    items.push(...chunk);
  }

  return items;
};

const fetchCategories = async (url) => {
  const r = await axios.get(BASE_URL + url, {
    auth: {
      username: USERNAME,
      password: PASSWORD,
    },
  });

  let items = r.data.categories[0];



  
  return items;
};

const fetchProduct = async (url) => {
  const r = await axios.get(BASE_URL + url, {
    auth: {
      username: USERNAME,
      password: PASSWORD,
    },
  });

  const item = r.data.item[0];  
  return item;
};

const cached = async (func, url) => {
  const cachedResponse = cache.get(func.name + "_" + url);
  if (cachedResponse) {
    return cachedResponse;
  } else {
    const minutes = 5;
    const data = await func(url);
    cache.put(func.name + "_" + url, data, minutes * 60000);
    return data;
  }
};

function makeSerializable (o) {
  return JSON.parse(JSON.stringify(o))
}

export { cached, fetchProduct, fetchProducts, fetchCategories, makeSerializable };
