CREATE TABLE
    products (
        id INT,
        name VARCHAR(50),
        price INT,
        on_sale boolean
    );

CREATE TABLE
    restaurants (
        id BIGSERIAL NOT NULL PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        location VARCHAR(50) NOT NULL,
        price_range INT NOT NULL check (
            price_range >= 1
            and price_range <= 5
        )
    );

INSERT INTO
    restaurants (name, location, price_range)
VALUES
    ('McDonalds', 'New York', 2),
    ('Burger King', 'New York', 2);