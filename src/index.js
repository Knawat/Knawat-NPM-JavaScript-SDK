import Fetch from './fetch';
import querystring from 'querystring';

/**
 * A Class Library for handling Knawat MarketPlace related Operations.
 *
 * @class MP
 */
class MP extends Fetch {
  /**
   * Get all imported products
   *
   * @param {object} { limit = 10, page = 1, lastUpdate = null, keyword = null, hideOutOfStock = 0 }
   * @returns
   * @see https://knawat-mp.restlet.io/#operation_get_products
   * @memberof MP
   */
  getProducts({
    limit = 10,
    page = 1,
    lastUpdate = null,
    keyword = null,
    hideOutOfStock = 0,
    currency = 'USD'
  } = {}) {
    // Generate url query paramaters
    const params = querystring.stringify({
      limit,
      page,
      lastUpdate,
      keyword,
      hideOutOfStock,
      currency
    });

    return this.$fetch('GET', `/catalog/products?${params}`);
  }

  /**
   * Get product by sku
   *
   * @param {string} sku
   * @returns
   * @see https://knawat-mp.restlet.io/#operation_get_product_by_sku
   * @memberof MP
   */
  getProductBySku(sku) {
    return this.$fetch('GET', `/catalog/products/${sku}`);
  }

  /**
   * Get total number of imported products
   *
   * @returns
   * @see https://knawat-mp.restlet.io/#operation_products_count
   * @memberof MP
   */
  getProductsCount() {
    return this.$fetch('GET', `catalog/products/count`);
  }

  /**
   * Add product(s) to my list
   *
   * @param {array*} products
   * @returns
   * @see https://knawat-mp.restlet.io/#operation_add_to_my_products
   * @memberof MP
   */
  addProducts(products) {
    return this.$fetch('POST', '/catalog/products', {
      body: JSON.stringify({ products })
    });
  }

  /**
   * Update product external IDs by SKU
   *
   * @param {*} data
   * @returns
   * @see https://knawat-mp.restlet.io/#operation_update_product
   * @memberof MP
   */
  updateProductBySku(sku, data) {
    return this.$fetch('PUT', `/catalog/update/${sku}`, {
      body: JSON.stringify({ data })
    });
  }

  /**
   * Bulk product update
   *
   * @param {*} data
   * @returns
   * @see
   * @memberof MP
   */
  updateBulkProduct(data) {
    return this.$fetch('PATCH', `/catalog/products`, {
      body: JSON.stringify(data)
    });
  }

  /**
   * Remove product from my list
   *
   * @returns
   * @see https://knawat-mp.restlet.io/#operation_delete_product_by_sku
   * @memberof MP
   */
  deleteProductBySku(sku) {
    return this.$fetch('DELETE', `/catalog/products/${sku}`);
  }

  /**
   * Get all catalog categories
   *
   * @returns
   * @see https://knawat-mp.restlet.io/#operation_get_list_of_categories
   * @memberof MP
   */
  getCategories() {
    return this.$fetch('GET', '/catalog/categories');
  }

  /**
   *  Get all current orders
   *
   * @param {number} [limit=25]
   * @param {number} [page=1]
   * @returns
   * @see https://knawat-mp.restlet.io/#operation_get_order_s_
   * @memberof MP
   */
  getOrders(limit = 25, page = 1) {
    const params = querystring.stringify({ limit, page });
    return this.$fetch('GET', `/orders?${params}`);
  }

  /**
   * Get order by id
   *
   * @param {string} id
   * @returns
   * @see https://knawat-mp.restlet.io/#operation_order_by_id
   * @memberof MP
   */
  getOrderById(id) {
    return this.$fetch('GET', `/orders/${id}`);
  }

  /**
   * Cancel order by id
   *
   * @param {string} id
   * @returns
   * @see https://knawat-mp.restlet.io/#operation_order_by_id
   * @memberof MP
   */
  cancelOrder(id) {
    return this.$fetch('DELETE', `/orders/${id}`);
  }

  /**
   * Create new order
   *
   * @param {array} data
   * @returns
   * @see https://knawat-mp.restlet.io/#operation_create_order
   * @memberof MP
   */
  createOrder(data) {
    return this.$fetch('POST', '/orders', {
      body: JSON.stringify(data)
    });
  }

  /**
   * Update current order
   *
   * @param {string} orderId
   * @param {array} data
   * @returns
   * @see https://knawat-mp.restlet.io/#operation_update_order
   * @memberof MP
   */
  updateOrder(orderId, data) {
    return this.$fetch('PUT', `/orders/${orderId}`, {
      body: JSON.stringify(data)
    });
  }

  /**
   * get invoices list
   */
  getInvoices = function() {
    return this.$fetch('GET', '/invoices');
  };

  /**
   * get invoices list
   * @param {object} args
   */
  getCategories = function(args = {}) {
    const params = Object.entries(args)
      .map(([key, val]) => `${key}=${val}`)
      .join('&');
    return this.$fetch('GET', `/catalog/categories?${params}`);
  };
}

module.exports = MP;
