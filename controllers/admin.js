const db = require('../utils/db');

const getAdminProducts = async (req, res) => {
    try {
        const [products] = await db.execute('SELECT * FROM products');
        res.render('index', {
            products: products || [],
            adminView: true
        })
    } catch (error) {
        console.error('Error fetching admin products:', error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = { getAdminProducts }