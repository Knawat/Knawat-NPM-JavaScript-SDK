import KnawatMP from './KnawatMP';
import categories from './api/categories';
import invoices from './api/invoices';
import membership from './api/membership';
import miscellaneous from './api/miscellaneous';
import orders from './api/orders';
import products from './api/products';
import shipping from './api/shipping';
import stores from './api/stores';
import taxes from './api/taxes';

KnawatMP._addToPrototype(categories);
KnawatMP._addToPrototype(invoices);
KnawatMP._addToPrototype(membership);
KnawatMP._addToPrototype(miscellaneous);
KnawatMP._addToPrototype(orders);
KnawatMP._addToPrototype(products);
KnawatMP._addToPrototype(shipping);
KnawatMP._addToPrototype(stores);
KnawatMP._addToPrototype(taxes);

module.exports = KnawatMP;
