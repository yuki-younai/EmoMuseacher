CREATE DATABASE  IF NOT EXISTS `musearch` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `musearch`;
-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: musearch
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `comments` (
  `pk` int NOT NULL AUTO_INCREMENT,
  `id` int DEFAULT NULL,
  `username` varchar(100) DEFAULT NULL,
  `comment` varchar(2000) DEFAULT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`pk`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,12312,'feaf','32131','2022-10-29 15:51:00'),(9,77068751,'feasf','dfasfd','2022-10-30 14:29:07'),(10,77068751,'feasf','fdsa','2022-10-30 14:38:28'),(11,77068751,'feasf','feaf','2022-10-30 14:41:15'),(12,77068751,'feasf','feafdadw','2022-10-30 14:41:17'),(13,77068751,'feasf','feafdadwfeaf','2022-10-30 14:41:19'),(14,77068751,'feasf','feaf','2022-10-30 14:42:03'),(15,77068751,'feasf','feafwww','2022-10-30 14:42:05'),(16,77068751,'feasf','我操zjy真tm帅\n','2022-10-30 14:42:25'),(17,77068751,'feasf','我操zjy真tm帅\n','2022-10-30 14:48:40'),(18,77068751,'feasf','我操zjy真tm帅\ndafdasdf','2022-10-30 14:48:42'),(19,77068751,'feasf','feafa','2022-10-30 14:48:46'),(20,77068751,'feasf','feafa[feaf]\n','2022-10-30 14:48:53'),(21,77068751,'feasf','[[[[feaf]]]ffea\n','2022-10-30 14:49:24'),(22,77068751,'feasf','[[[[feaf]]]ffea[]]]]]\n','2022-10-30 14:49:31'),(23,77068751,'feasf','[小青呱_hanser]','2022-10-30 14:51:55'),(24,77068751,'feasf','[月亮之上_凤凰传奇]','2022-10-30 15:28:45');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-31 20:51:14
