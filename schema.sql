create table rangliste (
  id int primary key auto_increment,
  personId int not NULL,
  zuganzahl int DEFAULT 0,
  score int DEFAULT 0,
  result VARCHAR(10) DEFAULT NULL check (result in ('won', 'lost')),
  constraint ranking foreign key (personId) REFERENCES personen (personId),
);

create table personen (
  personId int primary key auto_increment,
  username VARCHAR(50) DEFAULT 'unknown',
  password VARCHAR(100) DEFAULT NULL
);

create table durchläufe (
id int primary key auto_increment,
ergebnis VARCHAR(10) DEFAULT NULL check (ergebnis in ('won', 'lost')),
zuganzahl int DEFAULT 0,
personId int not NULL,
score int default 0,
constraint durchlauf foreign key (personId) REFERENCES personen (personId)
);

create table details (
zuganzahl int primary key auto_increment,
look VARCHAR(1) DEFAULT NULL,
pickup VARCHAR(1) DEFAULT NULL,
apply VARCHAR(1) DEFAULT NULL,
talk VARCHAR(1) DEFAULT NULL,
richtung VARCHAR (10) DEFAULT NULL,
position VARCHAR(20) not NULL,
durchlaufid int not NULL,
constraint details foreign key (durchlaufid) REFERENCES durchläufe(id))



SET FOREIGN_KEY_CHECKS = 0;
drop table if exists details0;
drop table if exists durchläufe0;
drop table if exists details1;
drop table if exists durchläufe1;
drop table if exists details2;
drop table if exists durchläufe2;
drop table if exists details3;
drop table if exists durchläufe3;
drop table if exists details4;
drop table if exists durchläufe4;
drop table if exists details5;
drop table if exists durchläufe5;
drop table if exists details6;
drop table if exists durchläufe6;
drop table if exists details7;
drop table if exists durchläufe7;
drop table if exists details8;
drop table if exists durchläufe8;
drop table if exists details9;
drop table if exists durchläufe9;
drop table if exists details10;
drop table if exists durchläufe10;
drop table if exists details11;
drop table if exists durchläufe11;
drop table if exists details12;
drop table if exists durchläufe12;
drop table if exists details13;
drop table if exists durchläufe13;
drop table if exists details14;
drop table if exists durchläufe14;
drop table if exists details15;
drop table if exists durchläufe15;
drop table if exists details16;
drop table if exists durchläufe16;
drop table if exists details17;
drop table if exists durchläufe17;
drop table if exists details18;
drop table if exists durchläufe18;
drop table if exists details19;
drop table if exists durchläufe19;
drop table if exists details20;
drop table if exists durchläufe20;
SET FOREIGN_KEY_CHECKS = 1;