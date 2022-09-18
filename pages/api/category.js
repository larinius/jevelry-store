import axios from "axios";
import cache from "memory-cache";

export default async function handler(req, res) {
  const url = "/categories.json";
  const p = await cachedFetch(url);
  res.status(200).json(p);
}

const fetchCategories = async (url) => {
  const BASE_URL = process.env.API_BASE_URL;
  const USERNAME = process.env.API_USERNAME;
  const PASSWORD = process.env.API_PASSWORD;
  const encodedToken = Buffer.from(`${USERNAME}:${PASSWORD}`).toString(
    "base64"
  );

  const r = await axios.get(BASE_URL + url, {
    auth: {
      username: USERNAME,
      password: PASSWORD,
    },
  });

  // return r.data.items[0];

  let items = r.data.categories[0];
  return items;
};

const cachedFetch = async (url) => {
  const cachedResponse = cache.get(url);
  if (cachedResponse) {
    return cachedResponse;
  } else {
    const minutes = 5;
    const data = await fetchCategories(url);
    cache.put(url, data, minutes * 60000);
    return data;
  }
};
