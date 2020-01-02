export default {
  /**
   * Create a new tax record
   *
   * @param {object} tax
   * @returns Promise<TaxRecord>
   * @memberof MP
   */
  createTaxRecord(tax) {
    return this.$fetch('POST', '/tax', {
      auth: 'basic',
      body: JSON.stringify(tax),
    });
  },

  /**
   * Update a new tax record
   *
   * @param {string} id
   * @param {object} tax
   * @returns Promise<TaxRecord>
   * @memberof MP
   */
  updateTaxRecord(id, tax) {
    return this.$fetch('PUT', `/tax/${id}`, {
      auth: 'basic',
      body: JSON.stringify(tax),
    });
  },

  /**
   * Update a new tax record
   *
   * @param {string} country
   * @param {Array} classes
   * @returns Array<TaxRecord>
   * @memberof MP
   */
  getRecord(country, classes) {
    const queryParams = { class: classes };
    return this.$fetch('PUT', `/tax/${country}`, {
      auth: 'basic',
      queryParams,
    });
  },

  /**
   * Update a new tax record
   *
   * @param {string} id
   * @returns Promise
   * @memberof MP
   */
  deleteTaxRecord(id) {
    return this.$fetch('DELETE', `/tax/${id}`, { auth: 'basic' });
  },
};
