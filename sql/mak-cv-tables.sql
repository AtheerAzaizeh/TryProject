CREATE TABLE users (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  role ENUM('manager', 'worker') NOT NULL
);

CREATE TABLE personal_details (
  detail_id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  date_of_birth DATE NOT NULL,
  profile_image_url VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  phone_number VARCHAR(255) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE education (
  education_id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  institution_name VARCHAR(255) NOT NULL,
  degree ENUM('bachelor', 'master', 'doctorate', 'diploma') NOT NULL,
  field_of_study ENUM('computer science', 'engineering', 'business', 'arts', 'science', 'law', 'medicine', 'other') NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE work_experience (
  experience_id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  company_name VARCHAR(255) NOT NULL,
  job_title VARCHAR(255) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  skills TEXT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);