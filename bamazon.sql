DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

-- CREATE A TABLE CALLED "PRODUCTS" FOR STORE INVENTORY--
CREATE TABLE products (
    product_id INTEGER (11) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR (90) NOT NULL,
    department_name VARCHAR (90) NOT NULL,
    price DECIMAL (6,3) NOT NULL,
    stock_quantity INTEGER (10) NOT NULL,
    PRIMARY KEY (product_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("gangster floss", "consumer goods", 5.99, 5000),
       ("pimp cane", "sporting goods", 9.35, 10000),
       ("xbox", "gaming", 200.00, 1000),
       ("paint supplies", "arts and crafts", 3.00, 200000),
       ("new kicks", "clothing", 400.00, 454),
       ("water gun", "outdoor living", 23.23, 4000),
       ("lillies", "gardening", 1.00, 500000),
       ("cats", "pets", 400.00, 2),
       ("dogs", "pets", 900.00, 9),
       ("bananas", "produce", .69, 90000);

       SELECT * FROM products;