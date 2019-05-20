<p align="center"><a href="https://knawat.com/" target="_blank"><img src="https://knawat.com/wp-content/uploads/2017/10/253_77.png" alt="Knawat" width="300"></a></p>

<p align="center">
  <a href="https://gitter.im/Knawat/Lobby" rel="nofollow">
    <img src="https://badges.gitter.im/Join%20Chat.svg" alt="Join the chat at Knawat">
  </a>
  <a href="http://isitmaintained.com/project/Knawat/Knawat-NPM-JavaScript-SDK">
    <img src="http://isitmaintained.com/badge/resolution/Knawat/Knawat-NPM-JavaScript-SDK.svg" alt="Average time to resolve an issue"/>
  </a>
<a href="https://app.fossa.io/projects/git%2Bgithub.com%2FKnawat%2FKnawat-NPM-JavaScript-SDK?ref=badge_shield" alt="FOSSA Status"><img src="https://app.fossa.io/api/projects/git%2Bgithub.com%2FKnawat%2FKnawat-NPM-JavaScript-SDK.svg?type=shield"/></a>
  <a href="http://isitmaintained.com/project/Knawat/Knawat-NPM-JavaScript-SDK">
    <img src="http://isitmaintained.com/badge/open/Knawat/Knawat-NPM-JavaScript-SDK.svg" alt="Percentage of issues still open"/>
  </a>
  <a href="https://npm-stat.com/charts.html?package=@knawat/mp">
    <img src="https://img.shields.io/npm/dm/@knawat/mp.svg" alt="npm"/>
  </a>
  <a href="https://www.npmjs.com/package/@knawat/mp">
    <img src="https://img.shields.io/npm/v/@knawat/mp.svg" alt="npm"/>
  </a>
</p>

# Knawat Node.js NPM Package (MP)

A Node.js package for Knawat Dropshipping MP REST API. Easily interact with the Knawat MP REST API using this library.

## Installation

```
npm install --save @knawat/mp
```

## Getting started

Check out the Knawat Dropshipping MP REST API endpoints and data that can be manipulated in <https://mp.knawat.io/>.

## Setup

Setup for the new Knawat Dropshipping REST API integration:

```javascript
const MP = require('knawat/mp');

const mp = new MP({
  key: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
  secret: 'XXXXXXXXXXXXXXXXXXXXXXXX',
  token: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
});
```

### Options

| Option   | Type     | Required    | Description                                                                   |
| -------- | -------- | ----------- | ----------------------------------------------------------------------------- |
| `key`    | `string` | conditional | Your Store's API consumer key if token not provided this field is required    |
| `secret` | `string` | conditional | Your Store's API consumer secret if token not provided this field is required |
| `token`  | `string` | conditional | Previous token if key and secret not provided this field is required          |

<small>https://knawat-mp.restlet.io/#operation_get_token</small>

# Methods

## Product Methods

### getProducts

_Retrieve the list of all products or products for this channel, sorted by create date DESC_

```javascript
mp.getProducts(limit, page, lastupdate);
```

| Params           | Type     | Required | Description                                                                      |
| ---------------- | -------- | -------- | -------------------------------------------------------------------------------- |
| `limit`          | `Number` | No       | Number of products to retrieve. `Default: 10`                                    |
| `page`           | `Number` | No       | Number of the page to retrieve. `Default: 1`                                     |
| `lastupdate`     | `Number` | No       | UTC Timestamp of last import. for get only updated products after this Timestamp |
| `keyword`        | `String` | No       | Text to search in product SKU                                                    |
| `hideOutOfStock` | `Number` | No       | 1 = hide out of stock products `Default: 0`                                      |

<small>https://knawat-mp.restlet.io/#operation_get_products</small>

### addProducts

_Add products to my list_

```javascript
mp.addProducts(products);
```

| Option     | Type    | Required | Description                       |
| ---------- | ------- | -------- | --------------------------------- |
| `products` | `array` | yes      | Array of SKUs `[{ sku: '1234' }]` |

<small>https://knawat-mp.restlet.io/#operation_add_to_my_products</small>

### getProductsCount

_Get in stock products count_

```javascript
mp.getProductsCount();
```

<small>https://knawat-mp.restlet.io/#operation_products_count</small>

### getProductBySku

_Retrieve single product information by Product SKU. product should be under this store_

```javascript
mp.getProductBySku(sku);
```

| Params | Type     | Description                    |
| ------ | -------- | ------------------------------ |
| `sku`  | `string` | SKU of Product you want to get |

<small>https://knawat-mp.restlet.io/#operation_get_product_by_sku</small>

### updateBulkProduct

_Retrieve products information using bulk update. product should be under this store_

```javascript
mp.updateBulkProduct(data);
```

| Params | Type     | Description |
| ------ | -------- | ----------- |
| `data` | `object` | ```JSON     |

{"productInstances": [{"sku": "T2BKO3966-KS","externalUrl": "http://test.t","externalId": "22825","variations": [{"sku": "newtest-1","externalId": "525827"},{"sku": "newtest-2","externalId": "525828"}]}]}

````|

<small>https://knawat-mp.restlet.io/#operation_bulk_update_products</small>

### deleteProductBySku

_Delete Product by Product SKU from store._

```javascript
mp.deleteProductBySku(products);
````

<small>https://knawat-mp.restlet.io/#operation_delete_product_by_sku</small>

### updateProductBySku

_Update imported product External IDs by SKU_

```javascript
mp.updateProductBySku(products);
```

| Option | Type     | Required | Description            |
| ------ | -------- | -------- | ---------------------- |
| `data` | `object` | yes      | Check mp documentation |

<small>https://knawat-mp.restlet.io/#operation_update_product</small>

### getCategories

_Get all categories related to my products._

```javascript
mp.getCategories();
```

<small>https://knawat-mp.restlet.io/#operation_get_list_of_categories</small>

## Order Methods

### getOrders (GET Orders)

```javascript
mp.getOrders(limit, page);
```

| Params  | Type     | Description                                  |
| ------- | -------- | -------------------------------------------- |
| `limit` | `Number` | Number of orders to retrieve. `Default: 1`   |
| `page`  | `Number` | Number of the page to retrieve. `Default: 1` |

### getOrderById (GET Order By Knawat Order Id)

```javascript
mp.getOrderById(order_id);
```

| Params     | Type     | Description     |
| ---------- | -------- | --------------- |
| `order_id` | `string` | Knawat Order ID |

### createOrder (Create Order)

```javascript
mp.createOrder(order_data);
```

| Params       | Type     | Description                          |
| ------------ | -------- | ------------------------------------ |
| `order_data` | `object` | Array of Order Data for create order |

### updateOrder (Update Order)

```javascript
mp.updateOrder(order_id, order_data);
```

| Params       | Type     | Description                                  |
| ------------ | -------- | -------------------------------------------- |
| `order_id`   | `string` | Knawat Order ID                              |
| `order_data` | `object` | Array of Updated Order Data for create order |

## REST Methods

| Params     | Type     | Description                                                                  |
| ---------- | -------- | ---------------------------------------------------------------------------- |
| `endpoint` | `string` | WooCommerce API endpoint, example: `catalog/products` or `orders/{order_id}` |
| `data`     | `array`  | Only for POST and PUT, data that will be converted to JSON                   |

### Request

```javascript
mp.$fetch(method, endpoint);
```

## Reporting Security Issues

To disclose a security issue to our team, [please submit a report here](https://knawat.com/contact/).

## Support & Chat

Developers are welcome here, please create issue or [chat with us https://gitter.im/Knawat/Lobby](https://gitter.im/Knawat/Lobby). This repository is not suitable for Knawat customers support. Please don't use our issue tracker for support requests, but for Knawat Dropshipping NPM Package issues only. Support can take place through [Knawat support portal](https://help.knawat.com/hc/en-us/requests/new/) which is available for free.

Support requests in issues on this repository will be closed on sight.

## Contributing to Knawat

If you have a patch or have stumbled upon an issue with Knawat NPM Package, you can contribute this back to the code. Please create a pull request.

## Check also

- [Knawat RESTful API](https://mp.knawat.io)
- [Knawat PHP SDK](https://github.com/Knawat/Knawat-PHP-SDK)
- [WooCommerce Dropshipping Plugin](https://github.com/Knawat/dropshipping-woocommerce)
- [Magento 2 Module](https://github.com/Knawat/knawat-dropshipping-magento2)
- [OpenCart Module](https://github.com/Knawat/knawat-dropshipping-opencart)


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FKnawat%2FKnawat-NPM-JavaScript-SDK.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FKnawat%2FKnawat-NPM-JavaScript-SDK?ref=badge_large)