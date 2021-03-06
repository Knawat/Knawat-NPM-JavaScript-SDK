export default {
  /**
   * get logs by store
   *
   * @param {object} params
   * @returns
   */
  getStoreLogs(queryParams) {
    return this.$fetch('GET', '/logs', { auth: 'basic', queryParams });
  },
  /**
   * Create log under the store
   *
   * @param {object} {
   *     storeId,
   *     topic    [ product | store | order ],
   *     message  String,
   *     code     Number = 200,
   *     logLevel [info | warn | error] = 'info',
   *     topicId  String,
   *     payload  Object = {},
   *   }
   * @returns
   */
  createStoreLogs({
    storeId,
    topic,
    message,
    code = 200,
    logLevel = 'info',
    topicId,
    payload = {},
  }) {
    const auth = storeId ? 'token' : 'basic';
    return this.$fetch('POST', '/logs', {
      auth,
      body: JSON.stringify({
        storeId,
        topic,
        message,
        code,
        logLevel,
        topicId,
        payload,
      }),
    });
  },
};
