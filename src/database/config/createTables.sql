BEGIN;

DROP TABLE IF EXISTS categories,meals;
CREATE TABLE categories(
    id serial PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(255) NOT NULL
);

CREATE TABLE meals(
    id serial PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    image TEXT NOT NULL,
    categories_id INT REFERENCES categories(id),
    description TEXT
);

COMMIT;