-- create database
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
