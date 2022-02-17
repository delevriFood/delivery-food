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
  image_food varchar(900) NOT NULL,
  Descr varchar(255),
  click int , 
  PRIMARY KEY (id_menu)
);