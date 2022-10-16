import {fetchProducts, fetchCategories, cached} from "/lib/utils"

export default async function handler(req, res) {
  const category = req.query.category;

  const p_url = "/items.json";
  const pp = await cached(fetchProducts, p_url);

  const c_url = "/categories.json";
  const cc = await cached(fetchCategories, c_url);

  const cnames = cc.map((item) => {
    return item.name.toLowerCase();
  });

  if (cnames.includes(category)) {
    const ff = pp.filter(
      (item) => item.category.name.toLowerCase() === category
    );
    res.status(200).json(ff);
  } else {
    res.status(200).json(pp);
  }
}

