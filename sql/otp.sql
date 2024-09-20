CREATE TABLE otp (
	id SERIAL PRIMARY KEY,
	email VARCHAR(255),
	code VARCHAR(255),
	formdata TEXT
);
