CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    rating INTEGER NOT NULL,
    reviewText TEXT,
    reviewDate DATE,
    reviewTime TIME
);
