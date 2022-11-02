export default async function handler(req, res) {
  const sku = req.query.id.replace("sku-", "");

  const data = await prisma.product.findMany({
    where: {
      sku: sku,
    },
  });
  res.json(data);
}
