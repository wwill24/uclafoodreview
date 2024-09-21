CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    reviewTitle VARCHAR(255) NOT NULL,
    rating INTEGER NOT NULL,
    reviewText TEXT,
    reviewDate DATE,
    revieTime TIME
);
