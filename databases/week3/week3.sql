 SET NAMES utf8 ;

CREATE TABLE `class` (
  `id` int(11) NOT NULL,
  `begins` datetime NOT NULL,
  `ends` datetime NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` enum('not-started','ongoing','finished') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_class_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `student` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `class_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `class_id` (`class_id`),
  KEY `nameInx` (`name`),
  CONSTRAINT `class_id` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE INDEX nameIndex
ON student (name);

ALTER TABLE class
ADD COLUMN status ENUM('not-started','ongoing','finished');

INSERT INTO `class` VALUE (1,'2019-02-14 17:33:40','2019-05-14 17:33:40','HTML',NULL);
INSERT INTO `class` VALUE(2,'2019-02-14 17:33:40','2019-04-14 17:33:40','CSS',NULL);
INSERT INTO `class` VALUES(3,'2019-02-14 17:33:40','2019-07-14 17:33:40','JavaScript',NULL);
INSERT INTO `class` VALUES(4,'2019-02-14 17:33:40','2019-08-14 17:33:40','REACT',NULL);
INSERT INTO `class` VALUES(5,'2019-02-14 17:33:40','2019-06-14 17:33:40','Database',NULL);
INSERT INTO `class` VALUES(6,'2019-02-14 17:33:40','2019-05-14 17:33:40','NodeJS',NULL);

INSERT INTO `student` VALUES (1,'Yana Khuchuieva','yanaKhuchueva@gmail.com','483-396-8795',2);
INSERT INTO `student` VALUES(2,'Pren Goldsworthy','pgoldsworthy1@spotify.com','635-572-8467',4);
INSERT INTO `student` VALUES(3,'Pablo Kisbee','pkisbee2@lulu.com','790-962-8683',3);
INSERT INTO `student` VALUES(4,'Rodie Duncan','rduncan3@quantcast.com','646-743-6191',5);
INSERT INTO `student` VALUES(5,'Aubry Polak','apolak4@indiatimes.com','302-678-7931',2);
INSERT INTO `student` VALUES(6,'Maryrose Meadows','mmeadows5@comcast.net','251-524-6594',6);
INSERT INTO `student` VALUES(7,'Pavel Brushneen','pbrushneen6@techcrunch.com','316-170-3640',2);
