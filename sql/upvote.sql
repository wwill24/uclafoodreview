CREATE TABLE upvotes (
    id SERIAL PRIMARY KEY,
    userid BIGINT NOT NULL,
    reviewid BIGINT NOT NULL
);
