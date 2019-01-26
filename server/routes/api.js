var express = require('express');
var axios = require('axios');
var router = express.Router();


router.get('/items', (req, res, next) => {
    getSearchItems(req.query.q).then(response => {
        res.json(response)
    })
});

router.get('/items/:id', async (req,res,next) => {
    getItem(req.params.id).then(response => {
        res.json(response)
    })
})

const getSearchItems = async query => {

    let searchResponse = await axios.get("https://api.mercadolibre.com/sites/MLA/search", {
        params: {
            q: query,
            limit: 4
        }
    })
    .then(response => {
        return response.data
    })

    let category = await axios.get(
        `http://api.mercadolibre.com/categories/${searchResponse.results[0].category_id}`
    )
    .then(response => {
        return response.data
    })

    var processedItems = {
        categories: [],
        items: []
    }

    processedItems.categories = category.path_from_root
    processedItems.items = searchResponse.results.map( item => {
        return {
            id: item.id,
            title: item.title,
            price: {
                amount: Math.trunc(item.price),
                currency: item.currency_id,
                decimals: parseDecimals(item.price)
            },
            picture: item.thumbnail,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping,
            location: item.address.state_name
        }
    })
    
    return processedItems;
}

const getItem = async itemId => {

    let itemResponse = await axios.get(`http://api.mercadolibre.com/items/${itemId}`)
    .then(response => {
        return response.data
    });

    let category = await axios.get(`http://api.mercadolibre.com/categories/${itemResponse.category_id}`)
    .then(response => {
        return response.data
    })

    let itemDescription = await axios.get(`https://api.mercadolibre.com/items/${itemId}/description`)
    .then(response => {
        return response.data
    })

    var processedItem = {
        categories: [],
        item: {
            id:"",
            title:"",
            price: {
                currency: "",
                amount: 0,
                decimals: 0
            },
            picture:"",
            condition:"",
            free_shipping: false,
            sold_quantity: 0,
            description:""
        }
    }
    processedItem.categories = category.path_from_root
    processedItem.item.id = itemResponse.id
    processedItem.item.title = itemResponse.title
    processedItem.item.price.amount = Math.trunc(itemResponse.price) 
    processedItem.item.price.currency = itemResponse.currency
    processedItem.item.price.decimals = parseDecimals(itemResponse.price)
    processedItem.item.picture = itemResponse.thumbnail
    processedItem.item.condition = itemResponse.condition
    processedItem.item.free_shipping = itemResponse.shipping.free_shipping
    processedItem.item.sold_quantity = itemResponse.sold_quantity
    processedItem.item.description = itemDescription.plain_text

    return processedItem;
    
}

const parseDecimals = amount =>
  amount % 1 !== 0 ? parseInt(amount.toString().split('.')[1]) : 0;


module.exports = router;