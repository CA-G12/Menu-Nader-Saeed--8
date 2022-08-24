BEGIN;

DROP TABLE IF EXISTS categories, meals;
CREATE TABLE categories(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description text
)
CREATE TABLE meals(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    image text NOT NULL,
    description text ,
    category_id INT REFERENCES categories(id)
)

COMMIT;