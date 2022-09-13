const products = [
  { id: 1, name: "one", img: "/static/img/product/product-1.jpg" },
  { id: 2, name: "two", img: "/static/img/product/product-1.jpg" },
  { id: 3, name: "three", img: "/static/img/product/product-1.jpg" },
  { id: 4, name: "four", img: "/static/img/product/product-1.jpg" },
  { id: 5, name: "five", img: "/static/img/product/product-1.jpg" },
  { id: 6, name: "six", img: "/static/img/product/product-1.jpg" },
  { id: 7, name: "seven", img: "/static/img/product/product-1.jpg" },
  { id: 8, name: "eight", img: "/static/img/product/product-1.jpg" },
  { id: 9, name: "nine", img: "/static/img/product/product-1.jpg" },
];

export default async function handler(req, res) {
  const p = await fetchProducts();

  res.status(200).json(p);
}

async function fetchProducts() {
  //   products = [];

  const BASE_URL =
    "https://LDGYjcpIMDmRAnWFTsPrqygUP1hlOVmXQwh4lywX:x@dimenshteyn.salesbinder.com/api/2.0";
  const USERNAME = "LDGYjcpIMDmRAnWFTsPrqygUP1hlOVmXQwh4lywX";
  const PASSWORD = "x";

  const encodedBase64Token = Buffer.from(`${USERNAME}:${PASSWORD}`).toString(
    "base64"
  );

  const authorization = `Basic ${encodedBase64Token}`;

  const response = await axios({
    url: { BASE_URL } + "/items.json",
    method: "get",
    headers: {
      Authorization: authorization,
    },
    data: {}, // Request Body if you have
  });

  // console.log("Fetching data")
  // const client = axios.create({
  //   baseURL: { BASE_URL } + "/items.json",
  //   auth: {
  //     username: USERNAME,
  //     password: PASSWORD,
  //   },
  // });

  //   const r = client.get();
  //   console.log(r);
  //   const result = {
  //     status: r.status + "-" + res.statusText,
  //     headers: r.headers,
  //     data: r.data,
  //   };

  //   console.log(result.data);

  return products;
}
