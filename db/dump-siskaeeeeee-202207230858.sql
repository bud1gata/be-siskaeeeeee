-- MySQL dump 10.13  Distrib 8.0.29, for macos12 (arm64)
--
-- Host: 159.223.80.107    Database: siskaeeeeee
-- ------------------------------------------------------
-- Server version	8.0.29-0ubuntu0.20.04.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `assesmen`
--

DROP TABLE IF EXISTS `assesmen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `assesmen` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nama_asses` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `tindakan` varchar(100) NOT NULL,
  `tgl_asses` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assesmen`
--

LOCK TABLES `assesmen` WRITE;
/*!40000 ALTER TABLE `assesmen` DISABLE KEYS */;
/*!40000 ALTER TABLE `assesmen` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `level`
--

DROP TABLE IF EXISTS `level`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `level` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `level`
--

LOCK TABLES `level` WRITE;
/*!40000 ALTER TABLE `level` DISABLE KEYS */;
INSERT INTO `level` VALUES (1,'superuser'),(2,'user');
/*!40000 ALTER TABLE `level` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `operasi`
--

DROP TABLE IF EXISTS `operasi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `operasi` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nama_operasi` varchar(100) NOT NULL,
  `tgl_operasi` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `operasi`
--

LOCK TABLES `operasi` WRITE;
/*!40000 ALTER TABLE `operasi` DISABLE KEYS */;
/*!40000 ALTER TABLE `operasi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rehabrekon`
--

DROP TABLE IF EXISTS `rehabrekon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rehabrekon` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nama_rehabrekon` varchar(100) NOT NULL,
  `tgl_rehabrekon` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rehabrekon`
--

LOCK TABLES `rehabrekon` WRITE;
/*!40000 ALTER TABLE `rehabrekon` DISABLE KEYS */;
/*!40000 ALTER TABLE `rehabrekon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `respon`
--

DROP TABLE IF EXISTS `respon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `respon` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `tanggal_asses` datetime NOT NULL,
  `asses_id` int DEFAULT NULL,
  `operasi_id` int DEFAULT NULL,
  `rehabrekon_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `respon_FK` (`asses_id`),
  KEY `respon_FK_1` (`operasi_id`),
  KEY `respon_FK_2` (`rehabrekon_id`),
  CONSTRAINT `respon_FK` FOREIGN KEY (`asses_id`) REFERENCES `assesmen` (`id`),
  CONSTRAINT `respon_FK_1` FOREIGN KEY (`operasi_id`) REFERENCES `operasi` (`id`),
  CONSTRAINT `respon_FK_2` FOREIGN KEY (`rehabrekon_id`) REFERENCES `rehabrekon` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `respon`
--

LOCK TABLES `respon` WRITE;
/*!40000 ALTER TABLE `respon` DISABLE KEYS */;
/*!40000 ALTER TABLE `respon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sdm`
--

DROP TABLE IF EXISTS `sdm`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sdm` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `no_kta` varchar(5) NOT NULL,
  `callname` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `fullname` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `tempat_lahir` varchar(100) DEFAULT NULL,
  `tgl_lahir` date DEFAULT NULL,
  `gol_darah` varchar(20) NOT NULL,
  `pekerjaan` varchar(100) DEFAULT NULL,
  `alamat_domisili` varchar(150) NOT NULL,
  `alamat-asal` varchar(150) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `no_wa` varchar(100) NOT NULL,
  `no_hp` varchar(100) NOT NULL,
  `medsos` varchar(100) DEFAULT NULL,
  `ukur_kaos` varchar(5) DEFAULT NULL,
  `gender` varchar(10) NOT NULL,
  `tinggi_badan` varchar(7) DEFAULT NULL,
  `berat_badan` varchar(7) DEFAULT NULL,
  `lembaga_asal` varchar(100) DEFAULT NULL,
  `riwayat_org` varchar(400) DEFAULT NULL,
  `nama_ortu` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `alamat_ortu` varchar(100) NOT NULL,
  `no_hp_ortu` varchar(100) NOT NULL,
  `alergi` varchar(100) DEFAULT NULL,
  `riwayat_kes` varchar(400) DEFAULT NULL,
  `foto_ktp` varchar(100) DEFAULT NULL COMMENT 'ben kelingan wae',
  `foto_sim` varchar(100) DEFAULT NULL COMMENT 'ben kelingan wae',
  `foto_pas` varchar(100) DEFAULT NULL COMMENT 'ben kelingan wae',
  `foto_bpjs` varchar(100) DEFAULT NULL COMMENT 'ben kelingan wae',
  `riwayat_operasi` int DEFAULT NULL,
  `riwayat_asses` int DEFAULT NULL,
  `riwayat_rehabrekon` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `sdm_FK` (`riwayat_operasi`),
  KEY `sdm_FK_1` (`riwayat_rehabrekon`),
  KEY `sdm_FK_2` (`riwayat_asses`),
  CONSTRAINT `sdm_FK` FOREIGN KEY (`riwayat_operasi`) REFERENCES `operasi` (`id`),
  CONSTRAINT `sdm_FK_1` FOREIGN KEY (`riwayat_rehabrekon`) REFERENCES `rehabrekon` (`id`),
  CONSTRAINT `sdm_FK_2` FOREIGN KEY (`riwayat_asses`) REFERENCES `assesmen` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sdm`
--

LOCK TABLES `sdm` WRITE;
/*!40000 ALTER TABLE `sdm` DISABLE KEYS */;
INSERT INTO `sdm` VALUES (2,'1234','','us123',NULL,NULL,NULL,'',NULL,'','',NULL,'','',NULL,NULL,'',NULL,NULL,NULL,NULL,'','','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `sdm` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `level_id` int DEFAULT '1',
  `fullname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `users_FK` (`level_id`),
  CONSTRAINT `users_FK` FOREIGN KEY (`level_id`) REFERENCES `level` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,1,NULL,'admin@mail.com','$2b$10$UVg3MUkbLB3ucI1LPd08a.gebVGqsWQkeB6VDdZJpo/B6DOUobNjq',NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'siskaeeeeee'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-23  8:59:08
