DROP DATABASE IF EXISTS delivery;

CREATE DATABASE delivery;

USE delivery;

CREATE TABLE user (
  id int NOT NULL AUTO_INCREMENT,
  firstName varchar(255),
  lastName varchar(255),
  email varchar(255),
  password varchar(255),
  phoneNumber int,
  points int,
  ip varchar(20),
  device varchar(200),
  profilePicture varchar(255),
  PRIMARY KEY (id)
);

CREATE TABLE restaurant (
  restaurant_id int NOT NULL AUTO_INCREMENT,
  name varchar(50),
  password varchar(64),
  picture varchar(255),
  description varchar(255),
  PRIMARY KEY (restaurant_id)
);

CREATE TABLE menu (
  id_menu int NOT NULL AUTO_INCREMENT,
  food_name varchar(50),
  price int,
  image_food varchar(255) NOT NULL,
  Descr varchar(255),
  click int , 
  PRIMARY KEY (id_menu)
);

CREATE TABLE orders(
id int NOT NULL AUTO_INCREMENT,
id_user int,
orderstring varchar(200), 
PRIMARY KEY(id)
);

  CREATE TABLE reviews (id_person int NOT NULL AUTO_INCREMENT,id_feedback int Not NULL ,person_name varchar(50),feedback varchar(255),PRIMARY KEY (id_person));
