const express = require('express');

const {
    getAllCategories,
    getCategoryById,
    changeCategory,
    createCategory,
    deleteCategoryById,

    getAllProducts,
    getProductById,
    editProductById,
    createProduct,
    deleteProductById,
} = require('../controller');

const router = express();

router.route('/stock/api/v1/product_category')
    .get(getAllCategories)
    .post(createCategory)

router.route('/stock/api/v1/product_category/:id')
    .get(getCategoryById)
    .put(changeCategory)
    .delete(deleteCategoryById)

router.route('/stock/api/v1/product')
    .get(getAllProducts)
    .post(createProduct)

router.route('/stock/api/v1/product/:id')
    .get(getProductById)
    .put(editProductById)
    .delete(deleteProductById)

module.exports = router;