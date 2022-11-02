export default async function handler(req, res) {
  const category = req.query.category;

  if(category === "all"){
    const data = await prisma.product.findMany();
    res.json(data);
  }else{
    const data = await prisma.product.findMany(
      {
        where:{
          category: category
        }
      }
    );
    res.json(data);
  }}


}

