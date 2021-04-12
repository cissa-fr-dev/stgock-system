const db = require('../database/database');

exports.getAllCategories = async (req, res) => {
    await db.getAllCategories((resolve, error) => {
        if (error)
            console.log(error);
        res.send(resolve);
    });
};

exports.createCategory = async (req, res) => {
    await db.createCategory(req.body, (resolve, error) => {
        if (error)
            console.log(error);
        res.send(resolve);
    });
};

exports.changeCategory = async (req, res) => {
    await db.changeCategory(req.body, req.params.id, (resolve, error) => {
        if (error)
            console.log(error);
        res.send(resolve);
    });
};

exports.getCategoryById = async (req, res) => {
    await db.getCategoryById(req.params.id, (resolve, error) => {
        if (error)
            console.log(error);
        res.send(resolve);
    });
};

exports.deleteCategoryById = async (req, res) => {
    await db.deleteCategoryById(req.params.id, (resolve, error) => {
        if (error)
            console.log(error)
        res.send(resolve)
    })
}

exports.getAllProducts = async (req, res) => {
    await db.getAllProducts((resolve, error) => {
        if (error)
            console.log(error);
        res.send(resolve)
    });
};

exports.getProductById = async (req, res) => {
    await db.getProductById(req.params.id, (resolve, error) => {
        if (error)
            console.log(error);
        res.send(resolve);
    });
};

exports.createProduct = async (req, res) => {
    await db.createProduct(req.body, (resolve, error) => {
        if (error)
            console.log(error);
        res.send(resolve);
    });
};

exports.editProductById = async (req, res) => {
    await db.editProductById(req.body, req.params.id, (resolve, error) => {
        if (error)
            console.log(error);
        res.send(resolve);
    });
};

exports.deleteProductById = async (req, res) => {
    await db.deleteProductById(req.params.id, (resolve, error) => {
        if (error)
            console.log(error);
        res.send(resolve);
    });
};