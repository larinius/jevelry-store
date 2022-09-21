import { fetchCategories, cached } from "./utils";

export default async function handler(req, res) {
  const url = "/categories.json";
  const cc = await cached(fetchCategories, url);

  const names = cc
    .filter((c) => {
      return parseInt(c.item_count) > 0;
    })
    .map((c) => {
      return c.name.toLowerCase();
    });

  cc.names = names;

  res.status(200).json(cc);
}
