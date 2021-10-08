create table rangliste (
  id int primary key auto_increment,
  personId int not NULL,
  zuganzahl int DEFAULT 0,
  score int DEFAULT 0,
  result VARCHAR(10) DEFAULT NULL check (result in ('won', 'lost')),
  constraint ranking foreign key (personId) REFERENCES personen (personId)
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