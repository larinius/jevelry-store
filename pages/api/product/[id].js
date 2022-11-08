import prisma from "/lib/prisma";

export default async function handler(req, res) {
  const sku = req.query.id.replace("sku-", "");

  let data = await prisma.product.findFirst({
    where: {
      sku: sku,
    },
    include: {
      image: true,
      category: true,
      brand: true,
    },
  });

  data = data.map((item) => {
    item.imageCount = item.image.length;
    item.price = (item.weight * 30.841 * 1.3).toFixed(2);
    return item;
  });

  res.json(data);
}
