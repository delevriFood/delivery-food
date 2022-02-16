DROP DATABASE IF EXISTS delivery;
CREATE DATABASE delivery;
USE delivery;
CREATE TABLE user (
  id int NOT NULL AUTO_INCREMENT,
  firstName varchar(255),
  lastName varchar(255),
  email varchar(255),
  password varchar(255),
  phoneNumber int ,
  points int ,
  ip varchar(20) , 
  device varchar(200) , 
  profilePicture varchar(255),
  PRIMARY KEY (id)
);

CREATE TABLE restaurant (
  restaurant_id int NOT NULL AUTO_INCREMENT,
  name varchar(50),    
  password varchar(64),
  picture  varchar(255),
  description varchar(255),
  PRIMARY KEY (restaurant_id)
);
CREATE TABLE menu (
  id int NOT NULL AUTO_INCREMENT,
  food_name varchar(50),
  price int ,
  restaurant_id int,
  image varchar(255)  , 
  click int ,  
  Descr varchar(255) , 

  PRIMARY KEY(id),
  FOREIGN KEY (restaurant_id) REFERENCES restaurant(restaurant_id)  
);
/* excute schema  */
/* mysql -u root -p <server/database_mysql/schema.sql
 */