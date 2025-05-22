const db = require('../utils/db');

const getProducts = async (req, res) => {
    try {
        const [products] = await db.execute('SELECT * FROM products');
        res.render('index', {
            products: products,
            adminView: false
        })
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = { getProducts }