var express = require('express');
var axios = require('axios');
var router = express.Router();

/* GET users listing. */
router.get('/items', async (req, res, next) => {

    var searchResults = await getSearch(req.query.q);
    
    
    res.json(processItems(searchResults));
});

router.get('/items/:id', async (req,res,next) => {
    var item = await getItem(req.params.id);
    var itemDescription = await getItemDescription(req.params.id);

    res.json(processItem(item, itemDescription));
})

function getItem(id) {
    const mlApi = "https://api.mercadolibre.com/items/" + id
  
    return axios.get(mlApi)
    .then(response => {
      return response.data
    })
  }

  function getItemDescription(id) {
    const mlApi = "https://api.mercadolibre.com/items/" + id + "/description"

    return axios.get(mlApi)
    .then(response => {
      return response.data
    })    
  }

  function processItem(itemData, itemDescription) {
    var processedItem = {
        categories: [""],
        item: {
            id:"",
            title:"",
            price: {
                currency_id:"",
                price: 0
            },
            picture:"",
            condition:"",
            free_shipping: false,
            sold_quantity: 0,
            description:""
        }
    }
    
    processedItem.item.id = itemData.id
    processedItem.item.title = itemData.title
    // processedItem.item.currency_id = itemData.currency_id
    processedItem.item.price = itemData.price
    processedItem.item.picture = itemData.thumbnail
    processedItem.item.condition = itemData.condition
    processedItem.item.free_shipping = itemData.shipping.free_shipping
    processedItem.item.sold_quantity = itemData.sold_quantity
    processedItem.item.description = itemDescription.plain_text
            
    return processedItem;
}


function getSearch(query) {
    const mlApi = "https://api.mercadolibre.com/sites/MLA/search"
  
    return axios.get(mlApi, {
      params: {
        q: query
      }
    })
    .then(response => {
      return response.data
    })
  }

function processItems(itemsData) {

    var processedItems = {
        categories: [],
        items: []
    }
    
    processedItems.items = itemsData.results.map( item => {
        return {
            id: item.id,
            title: item.title,
            price: item.price,
            picture: item.thumbnail,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping,
            location: item.address.state_name + " - " + item.address.city_name
        }
    })

    return processedItems;
}




module.exports = router;