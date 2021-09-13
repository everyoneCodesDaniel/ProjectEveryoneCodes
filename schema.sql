create table rangliste (
  id int primary key auto_increment,
  personId int not NULL,
  constraint ranking foreign key (personId) REFERENCES personen (personId)

);

create table personen (
  personId int primary key auto_increment,
  username VARCHAR(50) DEFAULT 'unknown',
  password VARCHAR(50) DEFAULT NULL
);

create table durchläufe (
id int primary key auto_increment,
ergebnis VARCHAR(10) DEFAULT NULL check (ergebnis in ('gewonnen', 'verloren')),
zuganzahl int DEFAULT NULL,
personId int not NULL,
constraint durchlauf foreign key (personId) REFERENCES personen (personId)
);

create table details (
zuganzahl int primary key auto_increment,
aktion VARCHAR (50) DEFAULT NULL,
ereignis VARCHAR (50) DEFAULT NULL,
richtung VARCHAR (10) DEFAULT NULL check (ergebnis in ('nord', 'ost', 'süd', 'west')),
durchlaufid int not NULL,
constraint details foreign key (durchlaufid) REFERENCES durchläufe (id)
);
