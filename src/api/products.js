export default {
  /**
   * Get all imported products
   *
   * @param {object} { limit = 10, page = 1, lastupdate = null, keyword = null, hideOutOfStock = 0, externalId = null }
   * @returns
   * @see https://docs.knawat.io/#tag/My-Products/paths/~1catalog~1products/get
   * @memberof MP
   */
  getProducts(queryParams) {
    return this.$fetch('GET', '/catalog/products', { auth: 'token', queryParams });
  },

  /**
   * Get all imported products by variation SKU(s)
   *
   * @param {array} skus Array of SKUs
   * @returns
   * @see https://docs.knawat.io/#tag/Products/paths/~1products~1{sku}/get
   * @memberof MP
   */
  getProductsByVariationSku(skus) {
    return this.$fetch('GET', '/catalog/products', { auth: 'token', queryParams });
  },

  /**
   * Get product by sku
   *
   * @param {string} sku
   * @returns
   * @see https://docs.knawat.io/#tag/My-Products/paths/~1catalog~1products~1{sku}/get
   * @memberof MP
   */
  getProductBySku(sku) {
    return this.$fetch('GET', `/catalog/products/${sku}`, { auth: 'token' });
  },

  /**
   * Get total number of imported products
   *
   * @returns
   * @see https://docs.knawat.io/#tag/My-Products/paths/~1catalog~1products~1count/get
   * @memberof MP
   */
  getProductsCount() {
    return this.$fetch('GET', 'catalog/products/count', { auth: 'token' });
  },

  /**
   * Add product(s) to my list
   *
   * @param {array*} products
   * @returns
   * @see https://docs.knawat.io/#tag/My-Products/paths/~1catalog~1products/post
   * @memberof MP
   */
  addProducts(products) {
    return this.$fetch('POST', '/catalog/products', {
      body: JSON.stringify({ products }),
      auth: 'token',
    });
  },

  /**
   * Update product external IDs by SKU
   *
   * @param {string} sku
   * @param {object} data
   * @returns
   * @see https://docs.knawat.io/#tag/My-Products/paths/~1catalog~1products~1{sku}/put
   * @memberof MP
   */
  updateProductBySku(sku, data) {
    return this.$fetch('PUT', `/catalog/update/${sku}`, {
      body: JSON.stringify(data),
      auth: 'token',
    });
  },

  /**
   * Bulk product update
   *
   * @param {object} data
   * @returns
   * @see https://docs.knawat.io/#tag/My-Products/paths/~1catalog~1products/patch
   * @memberof MP
   */
  updateBulkProduct(data) {
    return this.$fetch('PATCH', '/catalog/products', {
      body: JSON.stringify(data),
      auth: 'token',
    });
  },

  /**
   * Remove product from my list
   *
   * @param {string} sku
   * @returns
   * @see https://docs.knawat.io/#tag/My-Products/paths/~1catalog~1products~1{sku}/delete
   * @memberof MP
   */
  deleteProductBySku(sku) {
    return this.$fetch('DELETE', `/catalog/products/${sku}`, { auth: 'token' });
  },
};
