import prisma from "/lib/prisma";

export default async function handler(req, res) {
  const category = req.query.category || "all";

  const limit = parseInt(
    req.query.limit || process.env.NEXT_PUBLIC_PRODUCTS_LIMIT
  );
  const skip = parseInt(req.query.skip) || 0;

  if (category === "all") {
    let data = await prisma.product.findMany({
      skip: skip,
      take: limit,
      distinct: ["sku"],
      where: {
        image: { some: {} },
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
  } else {
    let data = await prisma.product.findMany({
      skip: skip,
      take: limit,
      distinct: ["sku"],
      where: {
        AND: [
          {
            category: {
              title: {
                equals: category,
              },
            },
          },
          { image: { some: {} } },
        ],
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
}
///where: { posts: { some: {} } },
