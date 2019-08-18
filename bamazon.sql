    DROP DATABASE IF EXISTS bamazonDB;
    CREATE database bamazonDB;

    USE bamazonDB;

    CREATE TABLE products (
    item_id INT NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    stock_quantity INT NULL,
    price DECIMAL(10,2) NULL,
    PRIMARY KEY (item_id)
    );

SELECT * FROM products;

INSERT INTO products (product_name, department_name, stock_quantity, price)
VALUES ("Camera", "Tech", 222, 200.13);
INSERT INTO products (product_name, department_name, stock_quantity, price)
VALUES ("Television", "Tech", 213, 500.99);
INSERT INTO products (product_name, department_name, stock_quantity, price)
VALUES ("Bigger Television", "Tech", 4, 1500.87);
INSERT INTO products (product_name, department_name, stock_quantity, price)
VALUES ("Gaming Computer", "Tech", 11, 1337.32);
INSERT INTO products (product_name, department_name, stock_quantity, price)
VALUES ("Regular Computer", "Tech", 188, 322.46);
INSERT INTO products (product_name, department_name, stock_quantity, price)
VALUES ("Kitchen Set of Stuff for your Kitchen", "Home", 423, 150.99);
INSERT INTO products (product_name, department_name, stock_quantity, price)
VALUES ("A New Bed", "Home", 233, 900.82);
INSERT INTO products (product_name, department_name, stock_quantity, price)
VALUES ("New Sneakers", "Fashion", 187, 60.56);
INSERT INTO products (product_name, department_name, stock_quantity, price)
VALUES ("T-shirt", "Fashion", 296, 15.76);
INSERT INTO products (product_name, department_name, stock_quantity, price)
VALUES ("Pants", "Fashion", 319, 20.38);