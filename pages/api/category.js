export default async function handler(req, res) {

  const data = await prisma.category.findMany();
  res.json(data);

}
