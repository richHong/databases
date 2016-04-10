-- CREATE DATABASE chat;

USE chat;

CREATE TABLE `Messages` (
  `MessageID` INT(3) NOT NULL AUTO_INCREMENT,
  `Username` varchar(140) NOT NULL,
  `message` varchar(140) NOT NULL,
  `RoomName` varchar(140) NOT NULL,
  PRIMARY KEY (`MessageID`)
);

CREATE TABLE `User` (
  `UserID` int(3) NOT NULL AUTO_INCREMENT,
  `Username` varchar(140),
  PRIMARY KEY (`UserID`)
);

CREATE TABLE `Rooms` (
  `RoomID` int(3) NOT NULL AUTO_INCREMENT,
  `RoomName` varchar(140) NOT NULL,
  PRIMARY KEY (`RoomID`)
);


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

