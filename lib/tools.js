import prisma from "/lib/prisma";

async function createProduct() {
  const p = {
    title: `Demo Product ${Math.floor(Math.random() * 1001) + 1}`,
    sku: `SKU-${Math.floor(Math.random() * 1001) + 1}`,
    price: Math.floor(Math.random() * 100) + 100,
  };




    const data = await prisma.product.create({
      data: {
        ...{ sku: p.sku, title: p.title, price: p.price },
      },
    });

}
