import prisma from "/lib/prisma";

// export default async function handler(req, res) {
//   const r = req.body;

//   try {
//     if (req.method === "POST") {
//       const data = await prisma.product.create({ data: r });

//       return res.status(201).json(data);
//     }
//   } catch (error) {
//     console.log(error, error.message);
//     const { response: fetchResponse } = error;
//     res.status(fetchResponse?.status || 500).json(error.message);
//   }
// }

export default async function handler(req, res) {
  console.log(req);
  if (req.body) {
    options.body = JSON.stringify(req.body);
  }

  const products = [
    { id: 123, title: "hello, world" },
    { id: 124, title: "good day sunshise" },
    { id: 125, title: "howdy partner" },
  ];
  const total = products.length;

  res.status(200).json({ data: products, total });
}
