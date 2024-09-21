CREATE TABLE business (
	id SERIAL PRIMARY KEY,
	businessName VARCHAR(255) NOT NULL,
    category VARCHAR(50) NOT NULL,
    address VARCHAR(50) NOT NULL,
    rating FLOAT NOT NULL
);