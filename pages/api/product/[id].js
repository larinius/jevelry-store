import prisma from "/lib/prisma";

export default async function handler(req, res) {
  const sku = req.query.id.replace("sku-", "");

  const data = await prisma.product.findFirst({
    where: {
      sku: sku,
    },
    include:{
      image:true,
      category:true,
      brand:true
    }
  });
  res.json(data);
}
