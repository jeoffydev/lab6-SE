

DEMO and Screenshots 
https://docs.google.com/document/d/14JPqfwVilMcFF2cCde0meD0zvFTq727dXV8oFrdwqqk/edit?usp=share_link


MYSQL work command line of how I created the DB, table and columns

C:\Users\Jeoffy>mysqlsh
MySQL Shell 8.0.32

Copyright (c) 2016, 2023, Oracle and/or its affiliates.
Oracle is a registered trademark of Oracle Corporation and/or its affiliates.
Other names may be trademarks of their respective owners.

Type '\help' or '\?' for help; '\quit' to exit.
 MySQL  JS > \sql
Switching to SQL mode... Commands end with ;
 MySQL  SQL > SHOW DATABASES;
ERROR: Not connected.
 MySQL  SQL > \connect root@localhost
Creating a session to 'root@localhost'
Fetching global names for auto-completion... Press ^C to stop.
Your MySQL connection id is 8 (X protocol)
Server version: 8.0.32 MySQL Community Server - GPL
No default schema selected; type \use <schema> to set one.

 MySQL  localhost:33060+ ssl  SQL > SHOW DATABASES;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mainuserdb         |
| mysql              |
| performance_schema |
| sakila             |
| sys                |
| user               |
| usertable          |
| world              |
+--------------------+
9 rows in set (0.0016 sec)

 MySQL  localhost:33060+ ssl  SQL > CREATE DATABASE mydb_lab6;
Query OK, 1 row affected (0.0411 sec)
 MySQL  localhost:33060+ ssl  SQL > SHOW DATABASES;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mainuserdb         |
| mydb_lab6          |
| mysql              |
| performance_schema |
| sakila             |
| sys                |
| user               |
| usertable          |
| world              |
+--------------------+
10 rows in set (0.0277 sec)
 MySQL  localhost:33060+ ssl  SQL > USE mydb_lab6;
Default schema set to `mydb_lab6`.
Fetching global names, object names from `mydb_lab6` for auto-completion... Press ^C to stop.
 MySQL  localhost:33060+ ssl  mydb_lab6  SQL > CREATE TABLE users_tbl(
                                            -> id INT NOT NULL AUTO_INCREMENT,
                                            -> username VARCHAR(100) NOT NULL,
                                            -> password VARCHAR(100) NOT NULL,
                                            -> PRIMARY KEY (id)
                                            -> );
Query OK, 0 rows affected (0.0771 sec)
 MySQL  localhost:33060+ ssl  mydb_lab6  SQL > SHOW TABLES;
+---------------------+
| Tables_in_mydb_lab6 |
+---------------------+
| users_tbl           |
+---------------------+
1 row in set (0.0145 sec)
 MySQL  localhost:33060+ ssl  mydb_lab6  SQL > SELECT * FROM users_tbl;
Empty set (0.0194 sec)
 MySQL  localhost:33060+ ssl  mydb_lab6  SQL > INSERT INTO users_tbl(username, password) VALUES("Jeoffy", "123456");
Query OK, 1 row affected (0.0216 sec)
 MySQL  localhost:33060+ ssl  mydb_lab6  SQL > SELECT * FROM users_tbl;
+----+----------+----------+
| id | username | password |
+----+----------+----------+
|  1 | Jeoffy   | 123456   |
+----+----------+----------+
1 row in set (0.0017 sec)
 MySQL  localhost:33060+ ssl  mydb_lab6  SQL >