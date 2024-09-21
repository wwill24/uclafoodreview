CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    rating FLOAT NOT NULL,
    reviewText TEXT,
    reviewDate DATE,
    reviewTime TIME
);
