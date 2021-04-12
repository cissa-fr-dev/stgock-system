const sqlite3 = require('sqlite3').verbose();
const path = require('path')
const dbPath = path.resolve(__dirname, './database.db')

exports.getAllCategories = (callback) => {
    let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READONLY, (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Connected to the stock database.');
    });
    db.serialize(async () => {
        await db.all(`SELECT *
                 FROM category`, (err, data) => {
            if (err) {
                console.error(err.message);
            };
            callback(data);
        });
    });
    db.close((err) => {
        if (err) {
            console.error(err.message);
        };
        console.log('Close the database connection.');
    });
};

exports.createCategory = (category, callback) => {
    let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Connected to the stock database.');
    });
    console.log(category)
    db.serialize(async () => {
        await db.run(`INSERT INTO category (id, name)
                VALUES( ${category.id}, '${category.name}')`, (err, data) => {
            if (err) {
                console.error(err.message);
            }
            callback(data);
        });
    });
    db.close((err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Close the database connection.');
    });
};

exports.changeCategory = (category, id, callback) => {
    let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            return console.error(err.message);
        };
        console.log('Connected to the stock database.');
    });
    db.serialize(async () => {
        await db.run(`UPDATE category 
            SET name = '${category.name}'
            WHERE id = ${id}`, (err, data) => {
            if (err) {
                console.error(err.message);
            };
            callback(data);
        });
    });
    db.close((err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Close the database connection.');
    });
};

exports.getCategoryById = (id, callback) => {
    let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READONLY, (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Connected to the stock database.');
    });
    db.serialize(async () => {
        await db.get(`SELECT *
                 FROM category
                 WHERE id = ${id}`, (err, data) => {
            if (err) {
                console.error(err.message);
            }
            callback(data);
        });
    });
    db.close((err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Close the database connection.');
    });
};

exports.deleteCategoryById = (id, callback) => {
    let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Connected to the stock database.');
    });
    db.serialize(async () => {
        await db.run(`DELETE FROM category 
            WHERE id = ${id}`, (err, data) => {
            if (err) {
                console.error(err.message);
            }
            callback(data);
        });
    });
    db.close((err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Close the database connection.');
    });
};

exports.getAllProducts = (callback) => {
    let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READONLY, (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Connected to the stock database.');
    });
    db.serialize(async () => {
        await db.all(`SELECT *
                 FROM product`, (err, data) => {
            if (err) {
                console.error(err.message);
            }
            callback(data);
        });
    });
    db.close((err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Close the database connection.');
    });
};

exports.getProductById = (id, callback) => {
    let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READONLY, (err) => {
        if (err) {
            return console.error(err.message);
        };
        console.log('Connected to the stock database.');
    });
    db.serialize(async () => {
        await db.get(`SELECT *
                FROM product
                WHERE id = ${id}`, (err, data) => {
            if (err) {
                console.error(err.message);
            }
            callback(data);
        });
    });
    db.close((err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Close the database connection.');
    });
};

exports.editProductById = (product, id, callback) => {
    let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Connected to the stock database.');
    });
    db.serialize(async () => {
        await db.run(`UPDATE product
                SET name = '${product.name}', 
                    unit_value = '${product.unit_value}',
                    quantity = '${product.quantity}',
                    category_id = ${product.category_id}
                WHERE id = ${id}`, (err, data) => {
            if (err) {
                console.error(err.message);
            }
            callback(data);
        });
    });
    db.close((err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Close the database connection.');
    });
};

exports.createProduct = (product, callback) => {
    let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Connected to the stock database.');
    });
    db.serialize(async () => {
        await db.run(`INSERT INTO product (id, name, quantity, unit_value, category_id)
                VALUES( 
                    ${product.id}, 
                   '${product.name}',
                    ${product.quantity},
                    ${product.unit_value},
                    ${product.category_id})`, (err, data) => {
            if (err) {
                console.error(err.message);
            }
            callback(data);
        });
    });
    db.close((err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Close the database connection.');
    });
};

exports.deleteProductById = (id, callback) => {
    let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Connected to the stock database.');
    });
    db.serialize(async () => {
        await db.run(`DELETE
                FROM product                
                WHERE id = ${id}`, (err, data) => {
            if (err) {
                console.error(err.message);
            }
            callback(data);
        });
    });
    db.close((err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Close the database connection.');
    });
};