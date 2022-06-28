-- create database
-- CREATE DATABASE Highschool_App;
-- select database
-- USE Highschool_App;

-- create tables
CREATE TABLE highschools(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,

  center_name VARCHAR(100) NOT NULL,
  contact_phone VARCHAR(100) NOT NULL,
  location VARCHAR(100) NOT NULL,
  website VARCHAR(100) NOT NULL
);

INSERT INTO highschools (center_name, contact_phone, location, website) VALUES ('highschool1', '111-222-333', 'C/1 meh,3', 'www.website1.com'),('highschool2', '333-222-111', 'C/2 meh,23', 'www.website2.com'),('highschool3', '222-111-333', 'C/3 meh,2', 'www.website3.com'),('highschool4', '222-333-111', 'C/4 meh,239', 'www.website4.com');

CREATE TABLE teachers(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,

  first_name VARCHAR(100) NOT NULL,
  second_name VARCHAR(100) NOT NULL,
  age int NOT NULL,
  email VARCHAR(100) NOT NULL,
  contact_phone VARCHAR(100) NOT NULL,
  educational_center INT NOT NULL,

  FOREIGN KEY(educational_center) REFERENCES highschools(id)
);

CREATE TABLE students(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,

  first_name VARCHAR(100) NOT NULL,
  second_name VARCHAR(100) NOT NULL,
  age int NOT NULL,
  email VARCHAR(100) NOT NULL,
  contact_phone VARCHAR(100) NOT NULL
);

CREATE TABLE subjects(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  subject_name VARCHAR(100) NOT NULL,
  qualification FLOAT NOT NULL,
  
  student_id INT NOT NULL,
  FOREIGN KEY(student_id) REFERENCES students(id)
);

CREATE TABLE evaluations(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  subject_name VARCHAR(100) NOT NULL,
  final_qualification FLOAT NOT NULL,
  
  student_id INT NOT NULL,
  FOREIGN KEY(student_id) REFERENCES students(id)
);


CREATE TABLE classrooms(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  teacher_id INT NOT NULL,
  student_id INT NOT NULL,

  FOREIGN KEY(teacher_id) REFERENCES teachers(id),
  FOREIGN KEY(student_id) REFERENCES students(id)
);



-- external foreign keys

-- teachers
-- ALTER TABLE teachers 
-- ADD CONSTRAINT fk_teachers_ecenters 
-- FOREIGN KEY(educational_center) 
-- REFERENCES educational_centers(id);

-- subjects
-- ALTER TABLE subjects 
-- ADD CONSTRAINT fk_subjects_students 
-- FOREIGN KEY(qualification) 
-- REFERENCES students(id);

-- evaluations
-- ALTER TABLE classrooms 
-- ADD CONSTRAINT fk_evaluations_students 
-- FOREIGN KEY(final_qualification) 
-- REFERENCES students(id);

-- classrooms
-- ALTER TABLE evaluations 
-- ADD CONSTRAINT fk_classrooms_teachers 
-- FOREIGN KEY(teacher_id) 
-- REFERENCES teachers(id);

-- ALTER TABLE classrooms 
-- ADD CONSTRAINT fk_classrooms_students 
-- FOREIGN KEY(student_id) 
-- REFERENCES students(id);
=======
CREATE DATABASE HighSchool_App;
-- access to the database
USE HighSchool_App;

-- TABLES
-- Highschools
CREATE TABLE HighSchools(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    contact_phone VARCHAR(255) NOT NULL,
    web VARCHAR(255) NOT NULL
);
-- Teachers
CREATE TABLE Teachers(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    second_name VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    email VARCHAR(255) NOT NULL,
    contact_phone VARCHAR(255) NOT NULL,
    educational_center INT NOT NULL
);
-- Highschools/Teachers Relationship - a E.C can have a lot of teachers, but any teacher has one single E.C
ALTER TABLE Teachers
    ADD CONSTRAINT FK_TEACHERS_HIGHSCHOOL
    FOREIGN KEY(educational_center)
    REFERENCES HighSchools(id);


-- Students
CREATE TABLE Students(
    id INT NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    second_name VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    email VARCHAR(255), 
    PRIMARY KEY(id)
);

-- Subjects
CREATE TABLE Subjects(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    subject_name VARCHAR(255) NOT NULL,
    exam_date DATE NOT NULL, -- format: YYYY-MM-DD
    qualification FLOAT NOT NULL,
    student_id INT NOT NULL
);

-- Evaluation
CREATE TABLE Evaluation(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    subject_name VARCHAR(255) NOT NULL,
    final_qualification FLOAT NOT NULL,
    student_id INT NOT NULL
);

-- Students/Subjects Relationship
ALTER TABLE Subjects
    ADD CONSTRAINT FK_SUBJECTS_STUDENTS
    FOREIGN KEY(student_id)
    REFERENCES Students(id);

-- Students/Evaluation Relationship
ALTER TABLE Evaluation
    ADD CONSTRAINT FK_EVALUATION_STUDENTS
    FOREIGN KEY(student_id)
    REFERENCES Students(id);



-- Classroom
CREATE TABLE Classroom(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    teacher_id INT NOT NULL,
    student_id INT NOT NULL
);


-- Teachers/Classroom Relationship
ALTER TABLE Classroom
    ADD CONSTRAINT FK_CLASSROOM_TEACHERS
    FOREIGN KEY(teacher_id)
    REFERENCES Teachers(id);
-- Students/Classroom Relationship
ALTER TABLE Classroom
    ADD CONSTRAINT FK_CLASSROOM_STUDENTS
    FOREIGN KEY(student_id)
    REFERENCES Students(id);
