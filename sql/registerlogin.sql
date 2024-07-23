CREATE TABLE regusers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone_number VARCHAR(9) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('manager', 'worker') NOT NULL
);