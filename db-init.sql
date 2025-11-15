CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price NUMERIC(10,2) NOT NULL
);

INSERT INTO products (name, price) VALUES
('Mouse gamer', 25.50),
('Teclado mecánico', 60.00),
('Monitor 24 pulgadas', 150.00);
