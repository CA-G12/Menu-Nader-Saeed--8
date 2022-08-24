BEGIN;

DROP TABLE IF EXISTS categories,meals;
CREATE TABLE categories(
    id serial PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(255) NOT NULL
);

CREATE TABLE meals(
    id serial PRIMARY KEY,
    category_id int NOT NULL,
    name VARCHAR(100) NOT NULL,
    image TEXT NOT NULL,
    description VARCHAR(100),
    FOREIGN KEY (category_id) REFERENCES categories(id) on delete cascade on update cascade
);

COMMIT;