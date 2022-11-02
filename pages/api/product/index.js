import prisma from "/lib/prisma";

export default async function handler(req, res) {
  const category = (req.query.category || "all");

  const limit = parseInt(req.query.limit || process.env.NEXT_PUBLIC_PRODUCTS_LIMIT);
  const skip = parseInt(req.query.skip) || 0;

  if (category === "all") {
    const data = await prisma.product.findMany({
      skip : skip,
      take:limit,
      distinct: ['sku'],
      where: {
        image: { some: {} },
      },
      include:{
        image:true,
        category:true,
        brand:true
      }
    });
    res.json(data);
  } else {
    const data = await prisma.product.findMany({
      skip : skip,
      take:limit,
      distinct: ['sku'],
      where: {
        AND: [{ 
          category:{
            title:{
              equals: category, 
            }
          } 
        
        },         
        { image: { some: {} }  }],
      },
      include:{
        image:true,
        category:true,
        brand:true
      }
    });

    res.json(data);
  }
}
///where: { posts: { some: {} } },