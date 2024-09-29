CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    rating FLOAT NOT NULL,
    reviewText TEXT NOT NULL,
    reviewDate DATE NOT NULL,
    reviewTime TIME NOT NULL,
    businessid INTEGER NOT NULL,
    userid INTEGER NOT NULL
);
