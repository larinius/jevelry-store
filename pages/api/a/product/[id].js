import {fetchProduct, cached} from "/lib/utils"

export default async function handler(req, res) {

    const sku = req.query.id.replace("sku-", "");
    const apiUrl = `/items.json?page=0&field=sku&s=${sku}&exact=true`;   
    
    const data = await cached(fetchProduct, apiUrl);

    res.status(200).json(data);
}
